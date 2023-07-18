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
  title: 'Pages/public/ForgotPasswordPage',
  component: PublicRoutes,
  decorators: [
    (Story: () => any) => (
      <MockProvider
        preloadedState={preloadedState}
        routeEntries={[book.forgotPassword]}>
        {Story()}
      </MockProvider>
    ),
  ],
};

export const Default = {
  args: {},
};
