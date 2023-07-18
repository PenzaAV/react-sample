import React, { FC, useState } from 'react';
import { Box, IconButton, Dialog, Paper, Typography } from '@mui/material';
import { Project } from '@bus/projects/typedefs';
import { Delete, Edit, ContentCopy } from '@mui/icons-material';
import { styles } from './styles';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { projectsActions } from '@bus/projects/actions';
import { DeleteGenerator } from '@components/modals/DeleteGenerator';
import { CloneProjectModal } from '@components/modals/CloneProjectModal';

type ProjectCardProps = {
  project: Project;
};

export const ProjectCard: FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [openCloneModal, setOpenCloneModal] = useState(false);

  return (
    <Paper sx={styles.projectCard}>
      <Typography variant={'h5'}>{project.name}</Typography>
      <Box sx={styles.box}>
        <IconButton
          aria-label="clone"
          size={'small'}
          onClick={() => setOpenCloneModal(true)}>
          <ContentCopy />
        </IconButton>
        <IconButton
          aria-label="edit"
          size={'small'}
          onClick={() => {
            navigate(`/projects/${project._id}`);
          }}>
          <Edit />
        </IconButton>
        <IconButton
          aria-label="delete"
          size={'small'}
          onClick={() => setOpenModal(true)}>
          <Delete />
        </IconButton>
        <Dialog
          sx={styles.modal}
          open={openModal}
          onClose={() => setOpenModal(false)}>
          <DeleteGenerator
            closeFn={() => setOpenModal(false)}
            onConfirm={() => {
              dispatch(projectsActions.deleteProject(project._id));
              setOpenModal(false);
            }}
            text={
              'You want delete project. Are you sure? If project contains templates, they will be deleted too.'
            }
            cancelButton={{
              text: 'cancel',
            }}
            confirmButton={{
              text: 'delete',
            }}
            modalPayload={undefined}
          />
        </Dialog>
        <Dialog
          sx={styles.modal}
          open={openCloneModal}
          onClose={() => setOpenCloneModal(false)}>
          <CloneProjectModal
            project={project}
            closeFn={() => setOpenCloneModal(false)}
            onConfirm={() => {
              setOpenCloneModal(false);
            }}
            modalPayload={undefined}
          />
        </Dialog>
      </Box>
    </Paper>
  );
};

export default ProjectCard;
