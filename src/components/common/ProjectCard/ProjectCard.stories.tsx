import React from 'react';

import { ProjectCard } from './';
import MockProvider from '@core/providers/MockProvider';

export default {
  component: ProjectCard,
};

export const Default = {
  args: {
    project: {
      name: 'Project name',
    },
  },
  decorators: [
    (Story: React.FC) => (
      <MockProvider>
        <Story />
      </MockProvider>
    ),
  ],
};
