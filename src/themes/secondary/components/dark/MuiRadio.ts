// @ts-nocheck
import { Components, Theme } from '@mui/material';
import { dark } from '../../palette/dark';

export const MuiRadio: Partial<Components<Theme>> = {
  MuiRadio: {
    defaultProps: {
      size: 'small',
    },
    styleOverrides: {
      root: {
        '& .MuiSvgIcon-root path': {
          fill: dark.info.light,
        },
        '&:hover .MuiSvgIcon-root path': {
          fill: dark.primary.dark,
        },
      },
    },
  },
};
