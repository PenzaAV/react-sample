import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Box } from '@mui/material';

import { styles } from './styles';

export type AuthLayoutProps = {};

const AuthLayout: React.FC<AuthLayoutProps> = () => {
  return (
    <Box sx={styles.root}>
      <Suspense fallback={<>...loading</>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default AuthLayout;
