import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CloseIcon from '@mui/icons-material/Close';
import { Dialog, IconButton } from '@mui/material';

import { ModalTypes } from '@core/Modal/types';

import { modalActions } from './state/actions';
import { getModalData } from './state/selectors';
import { styles } from './styles';

type ModalsProps = {
  registeredModals: ModalTypes.RegisteredModals;
};

export const Modals: React.FC<ModalsProps> = ({ registeredModals }) => {
  const modalData = useSelector(getModalData);
  const dispatch = useDispatch();

  const close = (name: string) => {
    dispatch(modalActions.closeModal(name));
  };

  return (
    <>
      {Object.values(modalData).map(
        ({ component, ...rest }: any, index: number) => {
          const forceClose =
            rest.forceClose === undefined ? true : rest.forceClose;

          return (
            <Dialog
              key={index}
              sx={styles.root}
              open={true}
              disableEscapeKeyDown={!forceClose}
              onClose={() => forceClose && close(component)}>
              {forceClose && (
                <IconButton
                  sx={styles.closeCross}
                  onClick={() => close(component)}
                  aria-label="close">
                  <CloseIcon />
                </IconButton>
              )}
              {React.createElement(registeredModals[component], {
                ...rest,
                closeFn: () => close(component),
              })}
            </Dialog>
          );
        },
      )}
    </>
  );
};
