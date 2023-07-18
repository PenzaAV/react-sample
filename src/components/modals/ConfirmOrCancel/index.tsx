import React from 'react';

import { Box, Button, Typography } from '@mui/material';

import { ModalTypes } from '@core/Modal/types';

import { styles } from './styles';

type ConfirmOrCancelProps = {
  text: string;
  cancelButton: {
    text: string;
  };
  confirmButton: {
    text: string;
  };
};

export const ConfirmOrCancel: React.FC<
  ModalTypes.ModalComponentProps<ConfirmOrCancelProps>
> = ({ closeFn, onCancel, onConfirm, text, cancelButton, confirmButton }) => {
  const closeModal = () => {
    closeFn();
  };

  const newModal = () => {
    console.log('new modal');
  };

  return (
    <Box
      sx={styles.root}
      display={'flex'}
      flexDirection={'column'}
      m={'20px 70px 20px 70px'}
      alignItems={'center'}
      maxWidth={'306px'}
      gap={'29px'}>
      {text && (
        <Box>
          <Typography variant={'h5'}>{text}</Typography>
        </Box>
      )}
      <Box display={'flex'} gap={'10px'}>
        <Button onClick={closeModal} color={'error'}>
          {cancelButton?.text || 'Cancel'}
        </Button>
        <Button onClick={newModal} color={'primary'}>
          {confirmButton?.text || 'Open next modal'}
        </Button>
      </Box>
    </Box>
  );
};
