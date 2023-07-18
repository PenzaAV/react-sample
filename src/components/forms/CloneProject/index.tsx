import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Field, FormRenderProps } from 'react-final-form';

import { Box, Button } from '@mui/material';
import { RenderNameField } from '@components/forms/CloneProject/fields/RenderNameField';

// RENDER_FIELDS
import { schema } from './schema';

const CloneProject = (props: FormRenderProps) => {
  return (
    <Box
      maxWidth={280}
      width={'100%'}
      display={'flex'}
      flexDirection={'column'}>
      <Field name={`name`} component={RenderNameField} />
      {/*FIELDS*/}
    </Box>
  );
};

export default CloneProject;

export { schema, CloneProject };

/*
Paste to the component where you want to use the form

import { EvneFinalForm } from '@packages/evne-form';
import { schema, CloneProject } from '@components/forms/CloneProject';

<EvneFinalForm
  component={CloneProject}
  sagaAction={projectsActions.cloneProject}
  schema={schema}
/>
* */
