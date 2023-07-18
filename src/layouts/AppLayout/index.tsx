import React, { Suspense } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import {
  Logout,
  PlaylistAdd,
  PlaylistAddCheck,
  SettingsOutlined,
} from '@mui/icons-material';
import { book } from '@routes/book';

import {
  Box,
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  IconButton,
} from '@mui/material';

import { styles } from './styles';
import AppBar from '@components/layouts/AppLayout/AppBar';
import { removeAccessToken } from '@REST/api';
import { useDispatch, useSelector } from 'react-redux';
import { getIsSidebarOpen } from '@bus/ui/selectors';
import { uiActions } from '@bus/ui/actions';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
export type AppLayoutProps = {
  title: string;
};

const AppLayout: React.FC<AppLayoutProps> = ({ title }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsSidebarOpen);

  const navigate = useNavigate();

  return (
    <Box sx={styles.root}>
      <AppBar title={title} />
      <Box>
        <Box component="nav" aria-label="mailbox folders">
          <Drawer
            variant="permanent"
            open={isOpen}
            sx={[styles.drawer, isOpen && styles.drawerOpen]}>
            <Box sx={styles.drawerHeader}>
              <IconButton onClick={() => dispatch(uiActions.toggleDrawer())}>
                <ChevronLeftIcon />
              </IconButton>
            </Box>
            <Divider />
            <List>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate(book.home)}>
                  <PlaylistAdd />
                  <ListItemText
                    primary={'Projects'}
                    sx={{ opacity: isOpen ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate(book.createProject)}>
                  <PlaylistAddCheck />
                  <ListItemText
                    primary={'Create project'}
                    sx={{ opacity: isOpen ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton onClick={() => navigate(book.settings)}>
                  <SettingsOutlined />
                  <ListItemText
                    primary={'Settings'}
                    sx={{ opacity: isOpen ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton
                  onClick={() => {
                    removeAccessToken();
                    setTimeout(() => {
                      navigate(0);
                    }, 1000);
                  }}>
                  <Logout />
                  <ListItemText
                    primary={'Log out'}
                    sx={{ opacity: isOpen ? 1 : 0 }}
                  />
                </ListItemButton>
              </ListItem>
            </List>
          </Drawer>
        </Box>
        <Box
          component="main"
          sx={{
            ml: 'auto',
            p: 1,
            transition: 'width 1s ease-in-out',
            width: `calc(100% - ${isOpen ? 200 : 72}px)`,
          }}>
          <Suspense fallback={<>...loading</>}>
            <Outlet />
          </Suspense>
        </Box>
      </Box>
    </Box>
  );
};

export default AppLayout;
