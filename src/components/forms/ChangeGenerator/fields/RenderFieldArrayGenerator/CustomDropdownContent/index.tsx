import React, { useMemo } from 'react';

import { Box, TextField } from '@mui/material';
import { Field, FormRenderProps } from 'react-final-form';
import { getFieldError } from '@packages/evne-form';
import { RenderLabelField } from '../RenderLabelField';

import { styles } from './styles';
import { RenderIsRequiredField } from '../RenderIsRequiredField';
import { RenderPathField } from '../RenderPathField';
import { RenderRelativeField } from '../RenderRelativeField';
import { RenderItemsDropdownField } from '../RenderItemsDropdownField';

type CustomDropdownContentProps = {
  name: string;
};

export const CustomDropdownContent: React.FC<CustomDropdownContentProps> = ({
  name,
}) => {
  return (
    <Box>
      <Box sx={styles.nameRow}>
        <Field name={`${name}.name`}>
          {(props) => (
            <TextField
              placeholder="Field Name"
              label={'Field Name'}
              fullWidth
              value={props.input.value}
              onChange={(e) => props.input.onChange(e.target.value)}
              error={!!getFieldError(props.meta)}
              helperText={getFieldError(props.meta)}
            />
          )}
        </Field>
        <Field name={`${name}.label`} component={RenderLabelField} />
      </Box>
      <Box sx={styles.pathRow}>
        <Field name={`${name}.path`} component={RenderPathField} />
        <Field
          name={`${name}.relative`}
          type="checkbox"
          component={RenderRelativeField}
        />
      </Box>
      <Field
        name={`${name}.items_dropdown`}
        component={RenderItemsDropdownField}
      />
      <Field
        name={`${name}.is_required`}
        type="checkbox"
        component={RenderIsRequiredField}
      />
    </Box>
  );
};
