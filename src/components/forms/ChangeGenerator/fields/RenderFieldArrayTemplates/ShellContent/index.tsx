import React, { useMemo } from 'react';
import { Field } from 'react-final-form';

import { Box, FormHelperText } from '@mui/material';

import { getFieldError } from '@packages/evne-form';
import CodeMirror from '@uiw/react-codemirror';
import {
  autocompletion,
  CompletionContext,
  Completion,
  CompletionResult,
} from '@codemirror/autocomplete';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { getHeigthOfEditor } from '@components/forms/ChangeGenerator/helpers';
import { ProjectGeneratorFormField } from '@bus/projects/typedefs';

type ShellContentProps = {
  name: string;
  formProps: any;
  index: number;
};

export const ShellContent: React.FC<ShellContentProps> = ({
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
      <Field name={`${name}.template`}>
        {(props) => (
          <Box>
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
    </Box>
  );
};
