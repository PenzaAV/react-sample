import React from 'react';

import { action } from '@storybook/addon-actions';

import MockProvider from '@core/providers/MockProvider';
import { CopyGenerator } from './index';

export default {
  title: '/CopyGenerator',
  component: CopyGenerator,
  decorators: [(story: () => any) => <MockProvider>{story()}</MockProvider>],
};

export const Default = {
  args: {
    text: 'Are you sure you want to delete this question?',
    onConfirm: action('onConfirm'),
  },
};
