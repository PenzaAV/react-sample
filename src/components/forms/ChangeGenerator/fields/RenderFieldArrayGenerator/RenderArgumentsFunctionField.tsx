import React from 'react';
import { FieldRenderProps } from 'react-final-form';
import CodeMirror from '@uiw/react-codemirror';
import { javascript } from '@codemirror/lang-javascript';
import { vscodeDark } from '@uiw/codemirror-theme-vscode';

import { Box, TextField, Typography } from '@mui/material';

import { getFieldError } from '@packages/evne-form';

export const RenderArgumentsFunctionField: React.FC<
  FieldRenderProps<string>
> = ({ input, meta }) => {
  return (
    <Box
      style={{
        width: '100%',
      }}>
      <Typography variant="body1">Content</Typography>
      <CodeMirror
        value={
          input.value ??
          `function(fileContent) {\n return ['item1', 'item2'];\n}`
        }
        height="200px"
        extensions={[javascript()]}
        theme={vscodeDark}
        onChange={(value) => input.onChange(value)}
      />
    </Box>
  );
};
