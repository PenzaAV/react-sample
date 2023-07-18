import React, { FC } from 'react';

import { Box, Typography } from '@mui/material';

import { styles } from './styles';
import { Project } from '@bus/projects/typedefs';
import ProjectCard from '@components/common/ProjectCard';

type ProjectsListProps = {
  projects: Project[];
};

export const ProjectsList: FC<ProjectsListProps> = ({ projects }) => {
  if (!projects.length)
    return (
      <Box sx={styles.projectsList}>
        <Typography
          variant={'h5'}>{`You don't have any projects yet`}</Typography>
      </Box>
    );

  return (
    <Box sx={styles.projectsList}>
      {projects.map((project) => {
        return (
          <Box key={project._id} sx={styles.project}>
            <ProjectCard project={project} />
          </Box>
        );
      })}
    </Box>
  );
};

export default ProjectsList;
