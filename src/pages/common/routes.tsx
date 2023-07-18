/* eslint-disable prettier/prettier */
import React, { lazy } from 'react';

import layouts from '@layouts/index';
import { Box } from '@mui/material';
import { book } from '@routes/book';

import { AppRoute } from '@setup/typedefs';
const TermsOfUse = lazy(()=> import('@pages/common/TermsOfUse'));

// IMPORTS
export const commonRoutes: AppRoute<any>[] = [
  // inject
  {
    path: book.terms,
    Component: <TermsOfUse />,
    Layout: layouts.CommonLayout,
    layoutProps: {},
  },
  // INJECT
  {
    path: '/*',
    Component: <>404</>,
    Layout: layouts.CommonLayout,
    layoutProps: {},
  },
];