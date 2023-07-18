import React from 'react';

import { action } from '@storybook/addon-actions';

import MockProvider from '../../../core/providers/MockProvider';
import { ConfirmOrCancel } from './index';

export default {
  title: 'modals/ConfirmDelete',
  component: ConfirmOrCancel,
  decorators: [(story: () => any) => <MockProvider>{story()}</MockProvider>],
};

export const Default = {
  args: {
    text: 'Are you sure you want to delete this question?',
    onConfirm: action('onConfirm'),
  },
};
