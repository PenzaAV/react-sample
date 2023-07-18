// @ts-nocheck
import { Components, Theme } from '@mui/material';
import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';

import { light } from '../../palette/light';
export const MuiToolbar: Partial<Components<Theme>> = {
  MuiToolbar: {
    styleOverrides: {
      root: {
        backgroundColor: light.secondary.dark,
      },
    },
  },
};
