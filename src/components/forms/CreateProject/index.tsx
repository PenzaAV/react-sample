import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Field, FormRenderProps } from 'react-final-form';

import { Box, Button } from '@mui/material';
import { RenderNameField } from '@components/forms/CreateProject/fields/RenderNameField';

// RENDER_FIELDS
import { schema } from './schema';

const CreateProject = (props: FormRenderProps) => {
  return (
    <Box width={500} display={'flex'} flexDirection={'column'}>
      <Field name={'name'} component={RenderNameField} />
      {/*FIELDS*/}
      <Box my={1}>
        <Button type={'submit'} role={'submit'}>
          Submit
        </Button>
      </Box>
    </Box>
  );
};

export default CreateProject;

export { schema, CreateProject };

/*
Paste to the component where you want to use the form

import { EvneFinalForm } from '@packages/evne-form';
import { schema, CreateProject } from '@components/forms/CreateProject';

<EvneFinalForm
  component={CreateProject}
  sagaAction={projectsActions.createProject}
  schema={schema}
/>
* */
