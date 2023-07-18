import React, { useEffect, useState } from 'react';

import { Box, Button, Typography } from '@mui/material';

import { styles } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { projectsActions } from '@bus/projects/actions';
import {
  getProject,
  getProjectGenerators,
  getProjectGeneratorsMockups,
} from '@bus/projects/selectors';
import { book } from '@routes/book';
import GeneratorsList from 'src/components/pages/private/ProjectPage/GeneratorsList';
import GitGenerators from '@components/pages/private/ProjectPage/GitGenerators';
import { GitNodeForApi, NodeFromGit } from '@bus/projects/typedefs';

const EditProjectPage: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [gitError, setGitError] = useState<string | null>(null);
  const generators = useSelector(getProjectGenerators(params.id as string));
  useEffect(() => {
    if (!params.id) {
      navigate(book.home);
    }
    dispatch(projectsActions.fetchProject(params.id as string));
  }, []);

  const project = useSelector(getProject(params.id as string));
  const mockups = useSelector(getProjectGeneratorsMockups(params.id as string));

  const fetchGeneratorsFromGit = () => {
    return new Promise((resolve, reject) => {
      dispatch(
        projectsActions.getMockupsFromGit({
          values: params.id as string,
          resolve,
          reject,
        }),
      );
    })
      .then(() => gitError && setGitError(null))
      .catch((error: string) => {
        setGitError(error);
      });
  };

  const addGeneratorsFromGit = (mockups: GitNodeForApi[]) => {
    dispatch(
      projectsActions.addMockupsFromGit({
        projectId: params.id as string,
        data: mockups,
      }),
    );
  };

  return (
    <Box sx={styles.root}>
      <Typography variant={'h5'}>{project?.name}</Typography>
      <Box sx={styles.project}>
        {generators?.length ? (
          <GeneratorsList generators={generators} />
        ) : (
          <Typography variant={'h6'}>No generators yet</Typography>
        )}
      </Box>
      <Button
        onClick={() =>
          navigate(book.addGenerator.replace(':projectId', params.id as string))
        }>
        Add template
      </Button>
      <GitGenerators
        mockups={mockups}
        onFetch={fetchGeneratorsFromGit}
        onAdd={addGeneratorsFromGit}
        error={gitError}
      />
    </Box>
  );
};

export default EditProjectPage;
