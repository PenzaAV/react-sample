import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Box } from '@mui/material';

import { Checkbox } from '@components/common/inputs/Checkbox';
import { getFieldError } from '@packages/evne-form';

export const RenderDependsOnFormFieldField: React.FC<
  FieldRenderProps<string>
> = ({ input, meta }) => {
  return (
    <Box my={1}>
      <Checkbox
        {...input}
        label={'Depends On Form Field'}
        data-testid={`${input.name}-change-generator-depends-on-form-field`}
        error={!!getFieldError(meta)}
        helperText={getFieldError(meta)}
      />
    </Box>
  );
};
