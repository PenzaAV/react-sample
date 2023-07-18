import React from 'react';
import { Box } from '@mui/material';
import { Field } from 'react-final-form';
import { RenderDependsOnFormFieldField } from '../RenderDependsOnFormFieldField';
import {
  getItemsForDepentsOn,
  optionsOfConditions,
  showFieldsDependsOn,
} from '@components/forms/ChangeGenerator/helpers';
import { getFieldError } from '@packages/evne-form';
import Select from '@components/common/inputs/Select';
import { RenderConditionFieldValueField } from '../RenderConditionFieldValueField';
import { styles } from './styles';

type SettingsContentProps = {
  close: () => void;
  name: string;
  formProps: any;
  index: number;
};

export const SettingsContent: React.FC<SettingsContentProps> = ({
  close,
  name,
  formProps,
  index,
}) => {
  return (
    <Box sx={styles.container}>
      <Field
        name={`${name}.depends_on_form_field`}
        type="checkbox"
        component={RenderDependsOnFormFieldField}
      />
      {showFieldsDependsOn(formProps.values?.generators?.[index]) && (
        <>
          <Box sx={styles.fieldBox}>
            <Field name={`${name}.depends_on_field`}>
              {(props) => (
                <Select
                  options={getItemsForDepentsOn(
                    formProps.values?.generators,
                    index,
                  )}
                  label={'Depends on field'}
                  error={!!getFieldError(props.meta)}
                  helperText={getFieldError(props.meta)}
                  fullWidth
                  {...props.input}
                />
              )}
            </Field>
          </Box>
          <Box sx={styles.fieldBox}>
            <Field name={`${name}.condition`}>
              {(props) => (
                <Select
                  options={optionsOfConditions}
                  label={'Condition'}
                  fullWidth
                  error={!!getFieldError(props.meta)}
                  helperText={getFieldError(props.meta)}
                  {...props.input}
                />
              )}
            </Field>
          </Box>
          <Field
            name={`${name}.condition_field_value`}
            component={RenderConditionFieldValueField}
          />
        </>
      )}
    </Box>
  );
};
