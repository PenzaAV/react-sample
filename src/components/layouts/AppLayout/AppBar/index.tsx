import React, { FC } from 'react';

import {
  AppBar as MuiAppBar,
  Toolbar,
  IconButton,
  Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { styles } from './styles';
import { useDispatch, useSelector } from 'react-redux';
import { uiActions } from '@bus/ui/actions';
import { getIsSidebarOpen } from '@bus/ui/selectors';

type AppBarProps = {
  title: string;
};

export const AppBar: FC<AppBarProps> = ({ title }) => {
  const dispatch = useDispatch();
  const isOpen = useSelector(getIsSidebarOpen);

  return (
    <MuiAppBar
      position="sticky"
      sx={[styles(200).appBar, isOpen && styles(200).appBarShift]}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          onClick={() => dispatch(uiActions.toggleDrawer())}
          sx={{ mr: 2 }}>
          <MenuIcon color="info" />
        </IconButton>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          {title}
        </Typography>
        <div id="app-bar-div-id"></div>
      </Toolbar>
    </MuiAppBar>
  );
};

export default AppBar;
