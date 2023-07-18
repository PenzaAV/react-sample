// @ts-nocheck
import { Components, Theme } from '@mui/material';
import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';

import { dark } from '../../palette/dark';

export const MuiButton: Partial<Components<Theme>> = {
  MuiButton: {
    defaultProps: {
      variant: 'contained',
      color: 'primary',
      size: 'small',
    },
    variants: [
      {
        props: {
          variant: 'outlined',
        },
        style: {
          color: dark.info.main,
          borderColor: dark.info.light,
          background: dark.secondary.light,
          '&:hover': {
            borderColor: dark.primary.dark,
          },
        },
      },
      {
        props: {
          variant: 'contained',
        },
        style: {
          backgroundColor: dark.primary.main,
          // border-width can not be set does not know why
          borderColor: dark.primary.dark,
          color: dark.success.light,
          '&:hover': {
            backgroundColor: dark.primary.main,
            borderColor: dark.primary.light,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        borderRadius: '3px',
        borderWidth: '1px',
      },
    },
  },
};
