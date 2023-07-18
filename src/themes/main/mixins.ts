import { MixinsOptions } from '@mui/material/styles/createMixins';
import createTheme from '@mui/material/styles/createTheme';
const { transitions, spacing, breakpoints } = createTheme();

export const mixins: MixinsOptions = {
  drawerOpen: {
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
  },
  drawerClosed: {
    transition: transitions.create('width', {
      easing: transitions.easing.sharp,
      duration: transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${spacing(7)} + 1px)`,
    [breakpoints.up('sm')]: {
      width: `calc(${spacing(8)} + 1px)`,
    },
  },
};
