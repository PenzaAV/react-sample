import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { getCurrentUserProfile } from '@bus/auth/selectors';
import { privateRoutes } from '@pages/private/routes';
import { authActions } from '@bus/auth/actions';
import { profileActions } from '@bus/profile/actions';
import { projectsActions } from '@bus/projects/actions';

// IMPORTS
const PrivateRoutes = () => {
  const profile = useSelector(getCurrentUserProfile);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(profileActions.fetchProfile());
    dispatch(projectsActions.fetchProjects());
  }, []);

  return (
    <>
      <Routes>
        {privateRoutes
          .filter(({ forRole }) => !forRole || forRole === profile?.role)
          .map(({ path, Component, Layout, layoutProps }) => (
            <Route element={<Layout {...layoutProps} />} key={path}>
              <Route path={path} element={Component} />
            </Route>
          ))}
      </Routes>
    </>
  );
};

export default PrivateRoutes;
