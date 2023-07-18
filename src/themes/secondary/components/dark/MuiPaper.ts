// @ts-nocheck
import { Components, Theme } from '@mui/material';
import { SystemCssProperties } from '@mui/system/styleFunctionSx/styleFunctionSx';

import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';

import { dark } from '../../palette/dark';

export const MuiPaper: Partial<Components<Theme>> = {
  MuiPaper: {
    styleOverrides: {
      root: {
        backgroundImage: 'unset',
        backgroundColor: dark.secondary.main,
        '&-MuiDialog-paper': {
          backgroundColor: dark.secondary.main,
        },
        '& .MuiBox-root': {
          backgroundColor: dark.secondary.main,
        },
      },
    },
  },
};
