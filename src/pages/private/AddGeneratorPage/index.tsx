import React, { useEffect } from 'react';

import { Box, Button } from '@mui/material';

import { styles } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { ChangeGenerator, schema } from '@components/forms/ChangeGenerator';
import { projectsActions } from '@bus/projects/actions';
import { EvneFinalForm } from '@packages/evne-form';
import { book } from '@routes/book';
import {
  typeFormByIndex,
  typeTemplateByIndex,
} from '@components/forms/ChangeGenerator/helpers';
import {
  ProjectGeneratorFormField,
  ProjectGeneratorTemplate,
} from '@bus/projects/typedefs';

const AddGeneratorPage: React.FC = () => {
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (!params?.projectId) {
      navigate(book.home);
    }
  }, []);

  const onSubmitSuccess = () => {
    navigate(book.singleProject.replace(':id', params.projectId as string));
  };

  return (
    <Box sx={styles.root}>
      <EvneFinalForm
        initialValues={{
          projectId: params.projectId,
          generators: [
            {
              id: Date.now().toString(),
              label: '',
              name: '',
              type: typeFormByIndex[0],
            } as ProjectGeneratorFormField,
          ],
          templates: [
            {
              type: typeTemplateByIndex[0],
              path: 'bus',
              template: '// comment',
              id: Date.now().toString(),
            } as ProjectGeneratorTemplate,
          ],
        }}
        component={ChangeGenerator}
        sagaAction={projectsActions.addGenerator}
        onSubmitSuccess={onSubmitSuccess}
        schema={schema}
        portalId="app-bar-div-id"
        portalBtn={() => (
          <Button color="secondary" type={'submit'} role={'submit'}>
            Submit
          </Button>
        )}
      />
    </Box>
  );
};

export default AddGeneratorPage;
