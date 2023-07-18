import React from 'react';
import { IProfile } from '@bus/auth/typedefs';
import MockProvider from '@core/providers/MockProvider';
import db from '@mocks/db.json';
import PrivateRoutes from '@routes/PrivateRoutes';
import { book } from '@routes/book';
import { ComponentStory } from '@storybook/react';

const preloadedState = {
  auth: {
    isAuthenticated: true,
    profile: db.me as IProfile,
  },
};

export default {
  title: 'Pages/private/SettingsPage',
  component: PrivateRoutes,
  parameters: {
    layout: 'fullscreen',
  },
  decorators: [
    (story: () => any) => {
      return (
        <MockProvider
          preloadedState={preloadedState}
          routeEntries={[book.settings]}>
          {story()}
        </MockProvider>
      );
    },
  ],
};

export const Default: ComponentStory<typeof PrivateRoutes> = () => {
  return <PrivateRoutes />;
};
