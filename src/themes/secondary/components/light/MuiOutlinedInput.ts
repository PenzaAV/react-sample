// @ts-nocheck
import { Components, Theme } from '@mui/material';
import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';

import { light } from '../../palette/light';
export const MuiOutlinedInput: Partial<Components<Theme>> = {
  MuiOutlinedInput: {
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
        borderColor: light.secondary.main,
        color: light.secondary.dark,
        '&:hover': {
          borderColor: light.primary.light,
        },
      },
    },
  },
};
