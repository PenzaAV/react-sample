import React from 'react';

import { action } from '@storybook/addon-actions';

import MockProvider from '@core/providers/MockProvider';
import { CloneProjectModal } from './index';

export default {
  title: '/CloneProjectModal',
  component: CloneProjectModal,
  decorators: [(story: () => any) => <MockProvider>{story()}</MockProvider>],
};

export const Default = {
  args: {
    text: 'Are you sure you want to delete this question?',
    onConfirm: action('onConfirm'),
  },
};
