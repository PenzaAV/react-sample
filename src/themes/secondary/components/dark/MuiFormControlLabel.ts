// @ts-nocheck
import { Components, Theme } from '@mui/material';
import { dark } from '../../palette/dark';

export const MuiFormControlLabel: Partial<Components<Theme>> = {
  MuiFormControlLabel: {
    styleOverrides: {
      root: {
        '.MuiCheckbox-root + .MuiTypography-root': {
          color: dark.info.main,
        },
        '.MuiRadio-root + .MuiTypography-root': {
          color: dark.info.main,
        },
      },
    },
  },
};
