import React, { useEffect } from 'react';

import { EvneFinalForm } from '@packages/evne-form';
import { Box, Button } from '@mui/material';

import { styles } from './styles';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { ChangeGenerator, schema } from '@components/forms/ChangeGenerator';
import { projectsActions } from '@bus/projects/actions';
import { getGenerator } from '@bus/projects/selectors';
import { book } from '@routes/book';
import { getInitialValueForGeneratorEditor } from '@components/forms/ChangeGenerator/convertFormAndTemplateArrsToBack';

const UpdateGeneratorPage: React.FC = () => {
  const params = useParams();
  const dispatch = useDispatch();
  const generator = useSelector(getGenerator(params.generatorId as string));
  const navigate = useNavigate();

  useEffect(() => {
    if (!params?.generatorId) {
      navigate(book.home);
    }
    dispatch(projectsActions.fetchGenerator(params.generatorId as string));
  }, []);

  const onSubmitSuccess = () => {
    navigate(book.singleProject.replace(':id', generator?.projectId ?? ''));
  };

  return (
    <Box sx={styles.root}>
      <EvneFinalForm
        initialValues={{
          ...getInitialValueForGeneratorEditor(generator),
          id: params?.generatorId,
        }}
        onSubmitSuccess={onSubmitSuccess}
        component={ChangeGenerator}
        sagaAction={projectsActions.updateGenerator}
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

export default UpdateGeneratorPage;
