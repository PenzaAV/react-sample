import React from 'react';

import MockProvider from '@core/providers/MockProvider';

import preloadedState from './__mocks__/preloadedState.json';
import { GitGenerators } from './';

export default {
  component: GitGenerators,
};

export const Default = {
  args: {},
  decorators: [
    (Story: () => any) => (
      <MockProvider preloadedState={preloadedState}>{Story()}</MockProvider>
    ),
  ],
};
