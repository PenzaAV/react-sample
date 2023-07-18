import * as React from 'react';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Field, FormRenderProps } from 'react-final-form';

import { Box, Button } from '@mui/material';
import { RenderDomainUrlField } from '@components/forms/GitSettings/fields/RenderDomainUrlField';
import { RenderProjectIdField } from '@components/forms/GitSettings/fields/RenderProjectIdField';
import { RenderAccessTokenField } from '@components/forms/GitSettings/fields/RenderAccessTokenField';

// RENDER_FIELDS
import { schema } from './schema';

const GitSettings = (props: FormRenderProps) => {
  return (
    <Box width={500} display={'flex'} flexDirection={'column'}>
      <Field name={`domainUrl`} component={RenderDomainUrlField} />
      <Field
        name={`projectId`}
        component={RenderProjectIdField}
        type={'number'}
      />
      <Field name={`accessToken`} component={RenderAccessTokenField} />
      {/*FIELDS*/}
      <Box my={1}>
        <Button type={'submit'} role={'submit'} disabled={props.pristine}>
          Save
        </Button>
        <Button
          type={'button'}
          sx={{ ml: 2 }}
          disabled={props.pristine}
          onClick={props.form.reset}>
          Cancel
        </Button>
      </Box>
    </Box>
  );
};

export default GitSettings;

export { schema, GitSettings };

/*
Paste to the component where you want to use the form

import { EvneFinalForm } from '@packages/evne-form';
import { schema, GitSettings } from '@components/forms/GitSettings';

<EvneFinalForm
  component={GitSettings}
  sagaAction={profileActions.setGitSettings}
  schema={schema}
/>
* */
