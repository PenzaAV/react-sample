import React, { useEffect } from 'react';

import { Box, Typography } from '@mui/material';

import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { projectsActions } from '@bus/projects/actions';
import ProjectsList from '@components/pages/private/HomePage/ProjectsList';
import { getProjects } from '@bus/projects/selectors';

const HomePage: React.FC = () => {
  const dispatch = useDispatch();
  const projects = useSelector(getProjects);

  useEffect(() => {
    dispatch(projectsActions.fetchProjects());
  }, []);

  return (
    <Box sx={styles.root}>
      <Typography variant={'h4'}>Projects</Typography>
      <ProjectsList projects={projects} />
    </Box>
  );
};

export default HomePage;
