import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import { useSelector } from 'react-redux';

import { Box } from '@mui/material';

import { getOptions } from '@bus/options/selectors';
import Autocomplete from '@components/common/inputs/Autocomplete';
import Select from '@components/common/inputs/Select';
import { getFieldError } from '@packages/evne-form';
import { IOption } from '@setup/typedefs';
import { getProjects } from '@bus/projects/selectors';
import { convertProjectsToIOptions } from '../helpers';

export const RenderProjectField: React.FC<FieldRenderProps<IOption>> = ({
  input,
  meta,
}) => {
  const projects = useSelector(getProjects);

  return (
    <Box my={1}>
      <Select
        options={convertProjectsToIOptions(projects)}
        data-testid={`clone-generator-project`}
        fullWidth
        required
        label={'Project'}
        error={!!getFieldError(meta)}
        helperText={getFieldError(meta)?.id}
        {...input}
      />
    </Box>
  );
};
