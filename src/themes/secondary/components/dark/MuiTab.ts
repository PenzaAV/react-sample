// @ts-nocheck
import { Components, Theme } from '@mui/material';
import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';

import { dark } from '../../palette/dark';

export const MuiTab: Partial<Components<Theme>> = {
  MuiTab: {
    defaultProps: {
      size: 'small',
    },
    variants: [
      {
        props: {
          disabled: true,
        },
        style: {
          color: dark.info.dark,
        },
      },
    ],
    styleOverrides: {
      root: {
        color: dark.info.main,
        '&:hover': {
          backgroundColor: dark.secondary.dark,
        },
        '&:focus': {
          backgroundColor: dark.primary.dark,
        },
        '&.Mui-selected:not(.Mui-disabled)': {
          color: dark.info.main,
        },
      },
    },
  },
};
