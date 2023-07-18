import React from 'react';

import { Box, Button, Typography } from '@mui/material';

import { ModalTypes } from '@core/Modal/types';

import { styles } from './styles';

type DeleteGeneratorProps = {
  text: string;
  cancelButton: {
    text: string;
  };
  confirmButton: {
    text: string;
  };
};

export const DeleteGenerator: React.FC<
  ModalTypes.ModalComponentProps<DeleteGeneratorProps>
> = ({ closeFn, onCancel, onConfirm, text, cancelButton, confirmButton }) => {
  const closeModal = () => {
    closeFn();
  };

  return (
    <Box sx={styles.deleteGenerator}>
      {text && (
        <Box>
          <Typography variant={'h5'}>{text}</Typography>
        </Box>
      )}
      <Box display={'flex'} gap={'10px'}>
        <Button onClick={closeModal} color={'secondary'}>
          {cancelButton?.text || 'Cancel'}
        </Button>
        <Button onClick={onConfirm} color={'error'}>
          {confirmButton?.text || 'Delete'}
        </Button>
      </Box>
    </Box>
  );
};

export default DeleteGenerator;
