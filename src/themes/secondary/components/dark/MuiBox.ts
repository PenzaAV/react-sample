// @ts-nocheck
import { Components, Theme } from '@mui/material';
import { SystemCssProperties } from '@mui/system/styleFunctionSx/styleFunctionSx';

import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';

import { dark } from '../../palette/dark';

export const MuiBox: Partial<Components<Theme>> = {
  MuiBox: {
    styleOverrides: {
      root: {
        backgroundColor: dark.secondary.main,
      },
    },
  },
};
