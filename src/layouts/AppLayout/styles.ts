import { Theme } from '@mui/material/styles';

export const styles = {
  root: {
    width: '100%',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: '64px',
    padding: (theme: Theme) => theme.spacing(0, 1),
    ...(theme: Theme) => theme.mixins.toolbar,
  },
  drawer: (theme: any) => ({
    width: theme.drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...theme.mixins.drawerClosed,
    '& .MuiDrawer-paper': theme.mixins.drawerClosed,
  }),
  drawerOpen: (theme: any) => ({
    width: '200px',
    ...theme.mixins.drawerOpen,
    '& .MuiDrawer-paper': { ...theme.mixins.drawerOpen, width: '200px' },
  }),
};
