// @ts-nocheck
import { Components, Theme } from '@mui/material';
import {
  PaletteColorOptions,
  PaletteOptions,
} from '@mui/material/styles/createPalette';
import { dark } from '../../palette/dark';

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
          color: dark.info.dark,
        },
      },
    ],
    styleOverrides: {
      root: {
        borderColor: dark.info.light,
        backgroundColor: dark.secondary.light,
        color: dark.info.main,
        '&:hover': {
          borderColor: dark.primary.light,
        },
      },
      input: {
        '&:-webkit-autofill': {
          WebkitBoxShadow: `0 0 0 100px ${dark.secondary.light} inset`,
        },
      },
    },
  },
};
