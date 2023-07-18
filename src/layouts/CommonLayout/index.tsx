import React, { Suspense } from 'react';
import { Outlet } from 'react-router-dom';

import { Box, Container } from '@mui/material';

import { styles } from './styles';

export type CommonLayoutProps = {};

const CommonLayout: React.FC<CommonLayoutProps> = () => {
  return (
    <Box sx={styles.root}>
      <Suspense fallback={<>...loading</>}>
        <Outlet />
      </Suspense>
    </Box>
  );
};

export default CommonLayout;
