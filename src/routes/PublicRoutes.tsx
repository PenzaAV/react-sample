import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import { publicRoutes } from '@pages/public/routes';
import { book } from '@routes/book';

const PublicRoutes = () => {
  return (
    <>
      <Routes>
        {publicRoutes.map(({ path, Component, Layout, layoutProps }, i) => (
          <Route element={<Layout {...layoutProps} />} key={path}>
            <Route path={path} element={Component} />
          </Route>
        ))}
        <Route path={`/`} element={<Navigate to={book.signIn} />} />
      </Routes>
    </>
  );
};

export default PublicRoutes;
