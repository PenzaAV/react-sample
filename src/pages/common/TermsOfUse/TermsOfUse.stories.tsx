import React from 'react';

import MockProvider from '../../../core/providers/MockProvider';
import { TermsOfUse } from './index';

export default {
  title: 'Pages/common/TermsOfUse',
  component: TermsOfUse,
  decorators: [
    (story: () => any) => {
      return <MockProvider>{story()}</MockProvider>;
    },
  ],
};

export const Default = {
  args: {},
};
