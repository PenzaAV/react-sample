// @ts-nocheck
import { Components, Theme } from '@mui/material';
import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';

import { dark } from '../../palette/dark';

export const MuiTabs: Partial<Components<Theme>> = {
  MuiTabs: {
    styleOverrides: {
      indicator: {
        height: '3px',
        backgroundColor: dark.secondary.light,
      },
    },
  },
};
