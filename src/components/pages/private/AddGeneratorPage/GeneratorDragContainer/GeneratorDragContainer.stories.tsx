import React from 'react';

import { GeneratorDragContainer } from './';

export default {
  component: GeneratorDragContainer,
};

export const Default = {
  args: {
    onClose: () => console.log('on Close'),
    tabsElements: [
      {
        title: 'Tab1',
        content: <div>content tab1</div>,
      },
      {
        title: 'Tab2',
        content: <div>content tab2</div>,
      },
      {
        title: 'Tab3',
        content: <div>content tab3</div>,
      },
    ],
  },
};
