import React from 'react';
import { FieldRenderProps } from 'react-final-form';

import { Box } from '@mui/material';

import { Checkbox } from '@components/common/inputs/Checkbox';
import { getFieldError } from '@packages/evne-form';

export const RenderOpenInEditorField: React.FC<FieldRenderProps<string>> = ({
  input,
  meta,
}) => {
  return (
    <Box my={1}>
      <Checkbox
        {...input}
        label={'Open in editor'}
        data-testid={`${input.name}-change-generator-open-in-editor`}
        error={!!getFieldError(meta)}
        helperText={getFieldError(meta)}
      />
    </Box>
  );
};
