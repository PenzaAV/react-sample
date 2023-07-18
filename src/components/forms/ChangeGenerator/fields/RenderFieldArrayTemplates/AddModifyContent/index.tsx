import React, { useMemo } from 'react';
import { Field, FieldRenderProps } from 'react-final-form';

import { Box, FormHelperText, TextField } from '@mui/material';

import { getFieldError } from '@packages/evne-form';
import CodeMirror from '@uiw/react-codemirror';
import {
  autocompletion,
  CompletionContext,
  Completion,
  CompletionResult,
} from '@codemirror/autocomplete';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { RenderRelativeField } from '../RenderRelativeField';
import { styles } from './styles';
import { RenderOpenInEditorField } from '../RenderOpenInEditorField';
import { getHeigthOfEditor } from '@components/forms/ChangeGenerator/helpers';
import { ProjectGeneratorFormField } from '@bus/projects/typedefs';

type AddModifyContentProps = {
  mode: 'add' | 'modify';
  name: string;
  formProps: any;
  index: number;
};

export const AddModifyContent: React.FC<AddModifyContentProps> = ({
  mode,
  name,
  formProps,
  index,
}) => {
  const options = useMemo(() => {
    const generators = formProps.values
      ?.generators as ProjectGeneratorFormField[];
    const opt: Completion[] = (generators ?? [])
      .filter((el) => !!el?.name)
      .map((gen) => ({
        label: `${gen?.name}`,
        type: 'text',
        apply: `{{${gen?.name}}}`,
      }));

    return opt;
  }, [formProps.values?.generators]);

  const autoCompleteCompletion = (
    context: CompletionContext,
  ): CompletionResult | Promise<CompletionResult | null> | null => {
    const word = context.matchBefore(/\w*/);
    if (word?.from === word?.to && !context.explicit) return null;

    return {
      from: word?.from,
      options,
    } as unknown as CompletionResult;
  };

  return (
    <Box>
      <Box sx={styles.pathRow}>
        <Field name={`${name}.path`}>
          {(props) => (
            <TextField
              placeholder="Path"
              label={'Path'}
              fullWidth
              value={props.input.value}
              onChange={(e) => props.input.onChange(e.target.value)}
              error={!!getFieldError(props.meta)}
              helperText={getFieldError(props.meta)}
            />
          )}
        </Field>
        <Box sx={styles.relative}>
          <Field
            name={`${name}.relative`}
            type="checkbox"
            component={RenderRelativeField}
          />
        </Box>
      </Box>
      {mode === 'modify' && (
        <Field name={`${name}.anchor`}>
          {(props) => (
            <Box sx={styles.anchorBox}>
              Anchor
              <CodeMirror
                value={props.input.value ?? '// INJECT'}
                height={'100px'}
                extensions={[
                  autocompletion({
                    override: [autoCompleteCompletion],
                  }),
                ]}
                theme={vscodeDark}
                onChange={(value) => props.input.onChange(value)}
              />
            </Box>
          )}
        </Field>
      )}
      <Field name={`${name}.template`}>
        {(props) => (
          <Box sx={styles.codeBox}>
            Code
            <CodeMirror
              value={props.input.value}
              height={getHeigthOfEditor(
                formProps.values?.templates?.[index] as any,
              )}
              extensions={[
                autocompletion({
                  override: [autoCompleteCompletion],
                }),
              ]}
              theme={vscodeDark}
              onChange={(value) => props.input.onChange(value)}
            />
            {getFieldError(props.meta) && (
              <FormHelperText error={!!getFieldError(props.meta)}>
                {getFieldError(props.meta)}
              </FormHelperText>
            )}
          </Box>
        )}
      </Field>
      <Field
        name={`${name}.open_in_editor`}
        type="checkbox"
        component={RenderOpenInEditorField}
      />
    </Box>
  );
};
