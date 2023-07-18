import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Field, FormRenderProps } from 'react-final-form';

import { Box } from '@mui/material';
import { RenderProjectField } from '@components/forms/CloneGenerator/fields/RenderProjectField';
import { RenderGeneratorNameField } from '@components/forms/CloneGenerator/fields/RenderGeneratorNameField';

// RENDER_FIELDS
import { schema } from './schema';

const CloneGenerator = (props: FormRenderProps) => {
  return (
    <Box
      maxWidth={280}
      width={'100%'}
      display={'flex'}
      flexDirection={'column'}>
      <Field
        name={`project`}
        component={RenderProjectField}
        parse={(value) => value && JSON.parse(value)}
        format={(value) => value && JSON.stringify(value)}
      />
      <Field name={`generator_name`} component={RenderGeneratorNameField} />
      {/*FIELDS*/}
    </Box>
  );
};

export default CloneGenerator;

export { schema, CloneGenerator };

/*
Paste to the component where you want to use the form

import { EvneFinalForm } from '@packages/evne-form';
import { schema, CloneGenerator } from '@components/forms/CloneGenerator';

<EvneFinalForm
  component={CloneGenerator}
  sagaAction={projectsActions.cloneGenerator}
  schema={schema}
/>
* */
