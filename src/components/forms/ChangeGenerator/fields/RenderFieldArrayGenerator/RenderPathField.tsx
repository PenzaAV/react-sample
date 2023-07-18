import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Box, TextField } from '@mui/material';

import { getFieldError } from '@packages/evne-form';

export const RenderPathField: React.FC<FieldRenderProps<string>> = ({
  input,
  meta,
}) => {
  return (
    <TextField
      inputProps={{
        'data-testid': `${input.name}-change-generator-path`,
      }}
      fullWidth
      label={'Path'}
      error={!!getFieldError(meta)}
      helperText={getFieldError(meta)}
      {...input}
    />
  );
};
