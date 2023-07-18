import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Box, TextField } from '@mui/material';

import { getFieldError } from '@packages/evne-form';

export const RenderConditionFieldValueField: React.FC<
  FieldRenderProps<string>
> = ({ input, meta }) => {
  return (
    <TextField
      inputProps={{
        'data-testid': `${input.name}-change-generator-condition-field-value`,
      }}
      fullWidth
      label={'Condition Field Value'}
      error={!!getFieldError(meta)}
      helperText={getFieldError(meta)}
      {...input}
    />
  );
};
