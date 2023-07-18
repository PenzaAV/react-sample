// @ts-nocheck
import { Components, Theme } from '@mui/material';
import { dark } from '../../palette/dark';

export const MuiCheckbox: Partial<Components<Theme>> = {
  MuiCheckbox: {
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
