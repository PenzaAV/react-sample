// @ts-nocheck
import { Components, Theme } from '@mui/material';
import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';

import { light } from '../../palette/light';

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
          color: light.secondary.dark,
          borderColor: light.secondary.main,
          background: 'transparent',
          '&:hover': {
            backgroundColor: 'transparent',
            borderColor: light.primary.dark,
          },
        },
      },
      {
        props: {
          variant: 'contained',
        },
        style: {
          backgroundColor: light.primary.main,
          // border-width can not be set does not know why
          borderColor: light.primary.dark,
          color: light.info.main,
          '&:hover': {
            backgroundColor: light.primary.main,
            borderColor: light.primary.light,
          },
        },
      },
    ],
    styleOverrides: {
      root: {
        borderRadius: '3px',
        borderWidth: '1px',
        height: '36px',
      },
    },
  },
};
