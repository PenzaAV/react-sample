import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import Select from '@components/common/inputs/Select';
import { getFieldError } from '@packages/evne-form';
import { IOption } from '@setup/typedefs';
import { optionsOfFormat } from '../../helpers';

export const RenderFormatField: React.FC<FieldRenderProps<IOption>> = ({
  input,
  meta,
}) => {
  return (
    <Select
      options={optionsOfFormat}
      data-testid={`${input.name}-change-generator-format`}
      fullWidth
      label={'Format'}
      error={!!getFieldError(meta)}
      helperText={getFieldError(meta)?.id}
      {...input}
    />
  );
};
