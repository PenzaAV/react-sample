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
  title: 'Pages/public/ThankYouPage',
  component: PublicRoutes,
  decorators: [
    (Story: () => any) => (
      <MockProvider
        preloadedState={preloadedState}
        routeEntries={[book.thankYou]}>
        {Story()}
      </MockProvider>
    ),
  ],
};

export const Default = {
  args: {},
};
