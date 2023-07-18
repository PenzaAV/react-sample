import React from 'react';

import MockProvider from '@core/providers/MockProvider';

import preloadedState from './__mocks__/preloadedState.json';
import { ProjectsList } from './';

export default {
  component: ProjectsList,
};

export const Default = {
  args: {},
  decorators: [
    (Story: () => any) => (
      <MockProvider preloadedState={preloadedState}>{Story()}</MockProvider>
    ),
  ],
};
