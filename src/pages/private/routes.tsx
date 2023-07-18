/* eslint-disable prettier/prettier */
import React, { lazy } from 'react';

import layouts from '@layouts/index';
import { commonRoutes } from '@pages/common/routes';
import { book } from '@routes/book';
import { AppRoute } from '@setup/typedefs';
const HomePage = lazy(() => import('@pages/private/HomePage'));
const CreateProjectPage = lazy(() =>
  import('@pages/private/CreateProjectPage'),
);
const ProjectPage = lazy(() => import('src/pages/private/ProjectPage'));
const AddGeneratorPage = lazy(() =>
  import('src/pages/private/AddGeneratorPage'),
);
const UpdateGeneratorPage = lazy(() =>
  import('@pages/private/UpdateGeneratorPage'),
);
const SettingsPage = lazy(() => import('@pages/private/SettingsPage'));

// IMPORTS

export const privateRoutes: AppRoute<any>[] = [
  ...[
    {
      path: `${book.home}`,
      Component: <HomePage />,
      Layout: layouts.AppLayout,
      layoutProps: {},
    },
    {
      path: `${book.createProject}`,
      Component: <CreateProjectPage />,
      Layout: layouts.AppLayout,
      layoutProps: {},
    },
    {
      path: `${book.singleProject}`,
      Component: <ProjectPage />,
      Layout: layouts.AppLayout,
      layoutProps: {
        title: 'Project',
      },
    },
    {
      path: `${book.addGenerator}`,
      Component: <AddGeneratorPage />,
      Layout: layouts.AppLayout,
      layoutProps: {},
    },
    {
      path: `${book.updateGenerator}`,
      Component: <UpdateGeneratorPage />,
      Layout: layouts.AppLayout,
      layoutProps: {},
    },
    {
      path: `${book.settings}`,
      Component: <SettingsPage />,
      Layout: layouts.AppLayout,
      layoutProps: {},
    },
    // INJECT
  ],
  ...commonRoutes,
];
