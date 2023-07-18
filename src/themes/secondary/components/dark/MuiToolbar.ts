// @ts-nocheck
import { Components, Theme } from '@mui/material';
import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';

import { dark } from '../../palette/dark';
export const MuiToolbar: Partial<Components<Theme>> = {
  MuiToolbar: {
    styleOverrides: {
      root: {
        backgroundColor: dark.secondary.dark,
      },
    },
  },
};
