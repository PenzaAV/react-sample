// @ts-nocheck
import { Components, Theme } from '@mui/material';
import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';

import { dark } from '../../palette/dark';

export const MuiDialog: Partial<Components<Theme>> = {
  MuiDialog: {
    styleOverrides: {
      paper: {
        backgroundColor: dark.secondary.main,
      },
    },
  },
};
