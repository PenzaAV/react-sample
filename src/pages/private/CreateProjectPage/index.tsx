import React from 'react';

import { Box } from '@mui/material';

import { styles } from './styles';
import { EvneFinalForm } from '@packages/evne-form';
import { schema, CreateProject } from '@components/forms/CreateProject';
import { projectsActions } from '@bus/projects/actions';
import { useNavigate } from 'react-router-dom';
import { book } from '@routes/book';

const CreateProjectPage: React.FC = () => {
  const navigate = useNavigate();

  const onSubmitSuccess = () => {
    navigate(book.home);
  };

  return (
    <Box sx={styles.root}>
      <EvneFinalForm
        component={CreateProject}
        sagaAction={projectsActions.createProject}
        onSubmitSuccess={onSubmitSuccess}
        schema={schema}
      />
    </Box>
  );
};

export default CreateProjectPage;
