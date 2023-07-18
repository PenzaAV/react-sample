import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Box } from '@mui/material';

import { Checkbox } from '@components/common/inputs/Checkbox';
import { getFieldError } from '@packages/evne-form';

export const RenderIsRequiredField: React.FC<FieldRenderProps<string>> = ({
  input,
  meta,
}) => {
  return (
    <Checkbox
      {...input}
      label={'Is required'}
      data-testid={`${input.name}-change-generator-is-required`}
      error={!!getFieldError(meta)}
      helperText={getFieldError(meta)}
    />
  );
};
