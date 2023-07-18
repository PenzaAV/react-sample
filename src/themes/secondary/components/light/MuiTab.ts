// @ts-nocheck
import { Components, Theme } from '@mui/material';
import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';

import { light } from '../../palette/light';

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
          color: light.info.dark,
        },
      },
    ],
    styleOverrides: {
      root: {
        color: light.secondary.dark,
        '&:hover': {
          backgroundColor: light.secondary.light,
        },
        '&:focus': {
          backgroundColor: light.primary.light,
        },
        '&.Mui-selected:not(.Mui-disabled)': {
          color: light.secondary.dark,
        },
      },
    },
  },
};
