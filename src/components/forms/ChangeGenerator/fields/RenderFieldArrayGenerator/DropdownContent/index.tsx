import React, { useState } from 'react';

import {
  Box,
  TextField,
  Button,
  Typography,
  CircularProgress,
} from '@mui/material';
import { Field, FormRenderProps } from 'react-final-form';
import { getFieldError } from '@packages/evne-form';
import CodeMirror from '@uiw/react-codemirror';
import { enqueueSnackbar } from 'notistack';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';
import { RenderLabelField } from '../RenderLabelField';

import { styles } from './styles';
import { RenderIsRequiredField } from '../RenderIsRequiredField';
import { RenderPathField } from '../RenderPathField';
import { RenderRelativeField } from '../RenderRelativeField';
import { RenderFormatField } from '../RenderFormatField';
import { RenderFilterField } from '../RenderFilterField';
import { RenderArgumentsFunctionField } from '../RenderArgumentsFunctionField';
import { RenderExpectedValueField } from '../RenderExpectedValueField';
import { showFileContent } from '@components/forms/ChangeGenerator/helpers';
import { useDispatch, useSelector } from 'react-redux';
import { projectsActions } from '@bus/projects/actions';
import {
  TestingFunctionActionPayload,
  TestingFunctionResponse,
} from '@bus/projects/typedefs';
import { getIsRunnedTesting } from '@bus/projects/selectors';

type DropdownContentProps = {
  name: string;
  formProps: any;
  index: number;
};

export const DropdownContent: React.FC<DropdownContentProps> = ({
  name,
  formProps,
  index,
}) => {
  const dispatch = useDispatch();
  const isStartedTesting = useSelector(getIsRunnedTesting);
  const [responseText, setResponseText] = useState('');
  const [isError, setIsError] = useState<boolean | null>(null);
  const [isExpectedValueGot, setIsExpectedValueGot] = useState<boolean | null>(
    null,
  );

  const disableButton = () => {
    const currentGenerator = formProps.values?.generators?.[index];
    const functionCode: string = currentGenerator?.function ?? '';
    const fileContent: string = currentGenerator?.arguments_function ?? '';
    const expectedValues: string = currentGenerator?.expected_value ?? '';

    return !(
      functionCode.length &&
      fileContent.length &&
      expectedValues?.length
    );
  };

  const onRunTest = () => {
    setResponseText('');
    setIsExpectedValueGot(null);
    setIsError(null);

    const currentGenerator = formProps.values?.generators?.[index];
    const functionCode = currentGenerator?.function;
    const fileContent = currentGenerator?.arguments_function;
    const expectedValues = currentGenerator?.expected_value;

    const sendToBackend: TestingFunctionActionPayload = {
      language: 'typescript', // for future better got value from field
      functionCode,
      fileContent,
      expectedValues,
    };
    dispatch(
      projectsActions.testingFunction({
        resolve: (value) => {
          const resultsText = (value as TestingFunctionResponse).results.join(
            ';',
          );
          const expectedValue = (value as TestingFunctionResponse)
            .expected_value_status;
          setResponseText(resultsText);
          setIsExpectedValueGot(expectedValue);
          enqueueSnackbar(
            expectedValue
              ? 'Test success. You got expected value'
              : 'Test failed. You did not get expected value',
            {
              variant: expectedValue ? 'success' : 'error',
            },
          );
          setIsError(false);
        },
        reject: (e) => {
          setIsExpectedValueGot(null);
          const messageText = e?.details ?? '';
          setResponseText(messageText);
          enqueueSnackbar(messageText, {
            variant: 'error',
          });
          setIsError(true);
        },
        values: sendToBackend,
      }),
    );
  };

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
        name={`${name}.format`}
        component={RenderFormatField}
        parse={(value) => value && JSON.parse(value)}
        format={(value) => value && JSON.stringify(value)}
      />
      {!showFileContent(formProps.values?.generators?.[index] as any) && (
        <Field name={`${name}.filter`} component={RenderFilterField} />
      )}
      <Field
        name={`${name}.is_required`}
        type="checkbox"
        component={RenderIsRequiredField}
      />
      {showFileContent(formProps.values?.generators?.[index] as any) && (
        <Box>
          <Field name={`${name}.function`}>
            {(props) => (
              <Box
                style={{
                  width: '100%',
                }}>
                <Typography variant="body1">Function</Typography>
                <CodeMirror
                  value={
                    props.input.value ??
                    `function(fileContent) {\n return ['item1', 'item2'];\n}`
                  }
                  height="200px"
                  extensions={[javascript()]}
                  theme={vscodeDark}
                  onChange={(value) => props.input.onChange(value)}
                />
              </Box>
            )}
          </Field>
          <Field
            name={`${name}.arguments_function`}
            component={RenderArgumentsFunctionField}
          />
          <Field
            name={`${name}.expected_value`}
            component={RenderExpectedValueField}
          />
          <Button
            disabled={isStartedTesting || disableButton()}
            onClick={onRunTest}>
            Run test
          </Button>
          {responseText && (
            <Box>
              <Typography variant="body1">
                {isError ? 'Error message is:' : 'Calculated value is:'}
              </Typography>
              {isExpectedValueGot !== null && (
                <Typography variant="body1">
                  {isExpectedValueGot
                    ? 'Expected value got'
                    : 'Expected value did not get'}
                </Typography>
              )}
              <Typography variant="body2">{responseText}</Typography>
            </Box>
          )}
          {isStartedTesting && (
            <Box sx={{ display: 'flex' }}>
              <Typography variant="body1">
                Please wait, checking your test would take some time(about 15
                seconds)
              </Typography>
              <CircularProgress />
            </Box>
          )}
        </Box>
      )}
    </Box>
  );
};
