import React, { Suspense, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Box, CircularProgress } from '@mui/material';

import { authActions } from '@bus/auth/actions';
import { getIsAuthenticated, getIsInitialize } from '@bus/auth/selectors';

import PrivateRoutes from './PrivateRoutes';
import PublicRoutes from './PublicRoutes';

const Routers = () => {
  const isInitialised = useSelector(getIsInitialize);
  const isAuthenticated = useSelector(getIsAuthenticated);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(authActions.authenticate());
  }, [dispatch]);

  return isInitialised ? (
    <BrowserRouter basename={'/'}>
      <>
        <Suspense fallback={<>...loading</>}>
          <Routes>
            {isAuthenticated ? (
              <Route path={`/*`} element={<PrivateRoutes />} />
            ) : (
              <Route path={`/*`} element={<PublicRoutes />} />
            )}
          </Routes>
        </Suspense>
      </>
    </BrowserRouter>
  ) : (
    <Box
      width={'100vw'}
      height={'100vh'}
      display={'flex'}
      justifyContent={'center'}
      alignItems={'center'}>
      <CircularProgress />
    </Box>
  );
};

export default Routers;
