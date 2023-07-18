import { Theme } from '@mui/material/styles';

export const styles = (drawerWidth: number) => ({
  appBar: {
    zIndex: (theme: Theme) => theme.zIndex.drawer + 1,
    transition: (theme: Theme) =>
      theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
  },
  appBarShift: {
    marginLeft: `${drawerWidth}px`,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: (theme: Theme) =>
      theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
  },
});
