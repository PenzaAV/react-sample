import React, { FC, useState } from 'react';
import FolderIcon from '@mui/icons-material/Folder';
import {
  Alert,
  Box,
  Button,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Paper,
} from '@mui/material';

import { styles } from './styles';
import { GitNodeForApi, NodeFromGit } from '@bus/projects/typedefs';

type GitGeneratorsProps = {
  onFetch: () => void;
  onAdd: (arr: GitNodeForApi[]) => void;
  mockups: NodeFromGit[];
  error: string | null;
};

export const GitGenerators: FC<GitGeneratorsProps> = ({
  onFetch,
  onAdd,
  mockups,
  error,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [checked, setChecked] = useState<NodeFromGit[]>([]);

  const handleOpenState = () => {
    if (isOpen) return setIsOpen(false);
    onFetch();
    setIsOpen(true);
    setChecked([]);
  };

  const handleClick = (item: NodeFromGit, isGeneratorFolder: boolean) => {
    setChecked((prevState) => {
      if (isGeneratorFolder) {
        const isExist = !!prevState.find(({ id }) => id === item.id);
        if (isExist) {
          return prevState.filter((i) => i.id !== item.id);
        } else {
          return [...prevState, item];
        }
      } else {
        const items = mockups
          .filter((i) => i.path.includes(item.path))
          .reduce((acc: NodeFromGit[], value) => {
            if (value.type !== 'tree') return acc;
            if (prevState.find(({ id }) => id === value.id)) return acc;

            const globalIdx = mockups.findIndex(({ id }) => id === value.id);
            const isGenerator =
              mockups[globalIdx + 1] && mockups[globalIdx + 1].type !== 'tree';

            if (!isGenerator) return acc;

            return [...acc, value];
          }, []);

        if (items.length) return [...prevState, ...items];

        return prevState;
      }
    });
  };

  const addHandler = () => {
    const formatedData: GitNodeForApi[] = [];
    checked.forEach((i) => {
      formatedData.push(
        ...mockups
          .filter((m) => m.type === 'blob' && m.path.includes(i.path))
          .map((e) => ({
            folder: i.path,
            path: e.path.replaceAll('/', '%2F').replaceAll('.', '%2E'),
          })),
      );
    });
    onAdd(formatedData);
    setChecked([]);
    setIsOpen(false);
  };

  return (
    <Box sx={styles.gitGenerators} mt={2} mb={2}>
      <Button onClick={handleOpenState}>
        {isOpen ? 'Hide' : 'Show'} mockups
      </Button>

      {error && isOpen && (
        <Alert severity="error" sx={{ margin: '24px 0' }}>
          {error}
        </Alert>
      )}
      {!!mockups.length && isOpen && (
        <Paper sx={{ width: '100%', marginTop: 2 }}>
          <List sx={{ width: '100%' }}>
            {mockups.map((item, index: number) => {
              if (item.type !== 'tree') return <></>;
              const isGeneratorFolder =
                mockups[index + 1] && mockups[index + 1].type !== 'tree';
              const pathDeep = item.path.split('/').length;

              return (
                <ListItem key={item.id} disablePadding={true}>
                  <ListItemButton
                    dense
                    role={undefined}
                    selected={
                      isGeneratorFolder
                        ? !!checked?.find((i) => i.id === item.id)
                        : false
                    }
                    onClick={() => handleClick(item, isGeneratorFolder)}
                    sx={{
                      paddingLeft:
                        pathDeep === 1
                          ? '10px'
                          : (pathDeep - 1) * 30 + 10 + 'px',
                    }}>
                    {!isGeneratorFolder && (
                      <ListItemIcon sx={{ minWidth: 30 }}>
                        <FolderIcon />
                      </ListItemIcon>
                    )}
                    <ListItemText
                      primary={item.name}
                      sx={{ fontSize: '18px !important' }}
                    />
                  </ListItemButton>
                </ListItem>
              );
            })}
          </List>
          <Button onClick={addHandler} disabled={!checked.length} sx={{ m: 2 }}>
            Add generators from git
          </Button>
          <Button
            onClick={() => setChecked([])}
            disabled={!checked.length}
            sx={{ m: 2 }}>
            reset
          </Button>
        </Paper>
      )}
    </Box>
  );
};

export default GitGenerators;
