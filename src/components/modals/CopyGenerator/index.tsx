import React, { useEffect, useRef } from 'react';

import { Box, Button, Typography } from '@mui/material';
import { ProjectGenerator } from '@bus/projects/typedefs';

import { ModalTypes } from '@core/Modal/types';

import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { projectsActions } from '@bus/projects/actions';

import { EvneFinalForm } from '@packages/evne-form';
import { schema, CloneGenerator } from '@components/forms/CloneGenerator';
import { enqueueSnackbar } from 'notistack';

type CopyGeneratorProps = {
  generator: ProjectGenerator;
};

export const CopyGenerator: React.FC<
  ModalTypes.ModalComponentProps<CopyGeneratorProps>
> = ({ closeFn, onCancel, onConfirm, generator }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(projectsActions.fetchProjects());
  }, []);

  const closeModal = () => {
    closeFn();
  };

  return (
    <Box sx={styles.copyGenerator}>
      <Box>
        <Typography variant={'h5'}>Copy generator</Typography>
      </Box>
      <Box>
        <Typography variant={'body1'}>
          Select project and enter new name of template. Name should be unique
        </Typography>
      </Box>
      <EvneFinalForm
        initialValues={{
          generator_name: `${generator.name} copy`,
          generatorId: generator._id,
        }}
        component={CloneGenerator}
        sagaAction={projectsActions.cloneGenerator}
        schema={schema}
        portalId={'copy-generator-submit'}
        onSubmitSuccess={() => {
          enqueueSnackbar('Generator copied');
          closeModal();
        }}
        onSubmitFailure={(errors) => {
          enqueueSnackbar('Copy of generator is wrong please check name', {
            variant: 'error',
          });
        }}
        portalBtn={() => (
          <Button type="submit" onClick={onConfirm} color={'primary'}>
            Save
          </Button>
        )}
      />
      <Box display={'flex'} gap={'10px'}>
        <Button onClick={closeModal} color={'secondary'}>
          Cancel
        </Button>
        <div id="copy-generator-submit"></div>
      </Box>
    </Box>
  );
};

export default CopyGenerator;
