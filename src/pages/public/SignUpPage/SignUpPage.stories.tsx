import React from 'react';

import MockProvider from '@core/providers/MockProvider';
import PublicRoutes from '@routes/PublicRoutes';
import { book } from '@routes/book';

const preloadedState = {
  auth: {
    isAuthenticated: false,
  },
};
export default {
  title: 'Pages/public/SignUp',
  component: PublicRoutes,
  decorators: [
    (Story: () => any) => (
      <MockProvider
        preloadedState={preloadedState}
        routeEntries={[book.signUp]}>
        {Story()}
      </MockProvider>
    ),
  ],
};

export const Default = {
  args: {},
};
