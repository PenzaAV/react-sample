import React from 'react';

import { Box, Button, Typography } from '@mui/material';

import { ModalTypes } from '@core/Modal/types';

import { styles } from './styles';
import { Project } from '@bus/projects/typedefs';
import { EvneFinalForm } from '@packages/evne-form';
import { projectsActions } from '@bus/projects/actions';
import { schema, CloneProject } from '@components/forms/CloneProject';
import { enqueueSnackbar } from 'notistack';

type CloneProjectModalProps = {
  project: Project;
};

export const CloneProjectModal: React.FC<
  ModalTypes.ModalComponentProps<CloneProjectModalProps>
> = ({ closeFn, onCancel, onConfirm, project }) => {
  const closeModal = () => {
    closeFn();
  };

  return (
    <Box sx={styles.cloneProjectModal}>
      <Box>
        <Typography variant={'h5'}>Clone project</Typography>
      </Box>
      <EvneFinalForm
        initialValues={{ projectId: project._id, name: `${project.name} copy` }}
        component={CloneProject}
        sagaAction={projectsActions.cloneProject}
        schema={schema}
        onSubmitSuccess={() => {
          enqueueSnackbar('Project copied');
          closeModal();
        }}
        onSubmitFailure={(errors) => {
          enqueueSnackbar('Copy of project is wrong please check name', {
            variant: 'error',
          });
        }}
        portalId="clone-project-submit"
        portalBtn={() => (
          <Button type="submit" color={'primary'}>
            Clone project
          </Button>
        )}
      />

      <Box display={'flex'} gap={'10px'}>
        <Button onClick={closeModal} color={'secondary'}>
          Cancel
        </Button>

        <div id="clone-project-submit"></div>
      </Box>
    </Box>
  );
};

export default CloneProjectModal;
