import React, { FC, useState } from 'react';

import {
  Box,
  Paper,
  IconButton,
  Popover,
  ButtonGroup,
  Button,
  Collapse,
} from '@mui/material';
import { DragIndicator, Close, Settings } from '@mui/icons-material';
import { DraggableProvided } from 'react-beautiful-dnd';

import { styles } from './styles';
import { TabButtonOption } from './helpers';

type GeneratorDragContainerProps = {
  onClose?: () => void;
  tabsElements: TabButtonOption[];
  tabIndex: number;
  setTabIndex: (index: number) => void;
  header?: React.ReactNode;
  settingsContent?: ({ close }: { close: () => void }) => React.ReactNode;
  provided: DraggableProvided;
  onMouseEnter?: () => void;
  openedContent?: boolean;
};

export const GeneratorDragContainer: FC<GeneratorDragContainerProps> = ({
  onClose,
  tabsElements,
  tabIndex,
  setTabIndex,
  header,
  settingsContent,
  provided,
  onMouseEnter,
  openedContent = false,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  const renderTabButton = (index: number, tabOptions: TabButtonOption) => (
    <Button
      key={tabOptions.title}
      onClick={() => setTabIndex(index)}
      sx={[styles.tabButton, tabIndex === index ? styles.activeTabButton : {}]}>
      {tabOptions.title}
    </Button>
  );

  return (
    <Paper sx={styles.generatorDragContainer}>
      <Box sx={styles.header}>
        <IconButton {...provided.dragHandleProps}>
          <DragIndicator />
        </IconButton>
        <Box onMouseEnter={onMouseEnter} sx={styles.subHeader}>
          {!!header && <Box>{header}</Box>}
          {settingsContent && (
            <>
              <IconButton sx={styles.settingsButton} onClick={handleClick}>
                <Settings />
              </IconButton>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'left',
                }}>
                <Box sx={styles.settingsContent}>
                  {settingsContent({ close: handleClose })}
                </Box>
              </Popover>
            </>
          )}
          {!!onClose && (
            <IconButton onClick={onClose}>
              <Close />
            </IconButton>
          )}
        </Box>
      </Box>
      <Collapse in={openedContent}>
        <Box>
          {!!tabsElements?.length && (
            <ButtonGroup sx={styles.buttonGroup} variant="contained">
              {tabsElements.map((el, i) => renderTabButton(i, el))}
            </ButtonGroup>
          )}
          <Box sx={styles.content}>
            {!!tabsElements?.length && tabsElements?.[tabIndex]?.content}
          </Box>
        </Box>
      </Collapse>
    </Paper>
  );
};

export default GeneratorDragContainer;
