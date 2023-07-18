import React, { FC, useState } from 'react';

import { Box, IconButton, Dialog, Paper, Typography } from '@mui/material';

import { styles } from './styles';
import { ProjectGenerator } from '@bus/projects/typedefs';
import { Delete, Edit, Star, ContentCopy } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { CopyGenerator } from '@components/modals/CopyGenerator';
import { DeleteGenerator } from '@components/modals/DeleteGenerator';
import { useDispatch } from 'react-redux';
import { projectsActions } from '@bus/projects/actions';

type GeneratorCardProps = {
  generator: ProjectGenerator;
};

export const GeneratorCard: FC<GeneratorCardProps> = ({ generator }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [openModal, setOpenModal] = useState(false);
  const [openCloneModal, setOpenCloneModal] = useState(false);

  return (
    <Paper sx={styles.generatorCard}>
      <Typography variant={'h5'}>{generator.name}</Typography>
      <Box sx={styles.box}>
        <IconButton
          aria-label="edit"
          size={'small'}
          onClick={() => {
            dispatch(projectsActions.toggleFavoriteGenerator(generator));
          }}>
          <Star color={generator.isFavorite ? 'warning' : 'primary'} />
        </IconButton>
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
            navigate(`/generators/${generator._id}`);
          }}>
          <Edit />
        </IconButton>
        <IconButton
          aria-label="delete"
          size={'small'}
          onClick={() => {
            setOpenModal(true);
          }}>
          <Delete />
        </IconButton>
        <Dialog
          sx={styles.modal}
          open={openModal}
          onClose={() => setOpenModal(false)}>
          <DeleteGenerator
            closeFn={() => setOpenModal(false)}
            modalPayload={undefined}
            onConfirm={() => {
              setOpenModal(false);
              dispatch(projectsActions.deleteGenerator(generator));
            }}
            text={'You want delete generator. Are you sure?'}
            cancelButton={{
              text: 'cancel',
            }}
            confirmButton={{
              text: 'delete',
            }}
          />
        </Dialog>
        <Dialog
          sx={styles.modal}
          open={openCloneModal}
          onClose={() => setOpenCloneModal(false)}>
          <CopyGenerator
            generator={generator}
            closeFn={() => setOpenCloneModal(false)}
            modalPayload={undefined}
            onConfirm={() => {
              setOpenModal(false);
            }}
          />
        </Dialog>
      </Box>
    </Paper>
  );
};

export default GeneratorCard;
