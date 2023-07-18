import React from 'react';

import { EvneFinalForm } from '@packages/evne-form';
import MockProvider from '@core/providers/MockProvider';
import interactions from '@helpers/interactions';
import { RootState, Subset } from '@setup/typedefs';
import { action } from '@storybook/addon-actions';
import { expect } from '@storybook/jest';
import { ComponentStory } from '@storybook/react';
import { waitFor, within } from '@storybook/testing-library';

import preloadedState from './__mocks__/preloadedState.json';
import CloneProject from './index';
import { schema } from './schema';

export default {
  title: 'forms/CloneProject',
  component: CloneProject,
  decorators: [
    (story: () => any) => (
      <MockProvider preloadedState={preloadedState as Subset<RootState>}>
        {story()}
      </MockProvider>
    ),
  ],
};

export const CloneProjectSuccess: ComponentStory<typeof EvneFinalForm> = (
  args,
) => <EvneFinalForm {...args} />;

CloneProjectSuccess.args = {
  onSubmit: action('handleSubmit'),
  component: CloneProject,
  schema,
};
CloneProjectSuccess.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await interactions.sleep(1000);
  await interactions.typeToInput(canvas, 'clone-project-name', 'ipsum');
  // SUCCESS PLAY
  await interactions.sleep(1000);
  await interactions.clickSubmit(canvas);
  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};

export const CloneProjectError: ComponentStory<typeof EvneFinalForm> = (
  args,
) => <EvneFinalForm {...args} />;

CloneProjectError.args = {
  onSubmit: action('handleSubmit'),
  component: CloneProject,
  schema,
};

CloneProjectError.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await interactions.sleep(1000);
  await interactions.clickSubmit(canvas);
  await waitFor(() => expect(args.onSubmit).not.toHaveBeenCalled());
};
