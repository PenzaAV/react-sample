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
import GitSettings from './index';
import { schema } from './schema';

export default {
  title: 'forms/GitSettings',
  component: GitSettings,
  decorators: [
    (story: () => any) => (
      <MockProvider preloadedState={preloadedState as Subset<RootState>}>
        {story()}
      </MockProvider>
    ),
  ],
};

export const GitSettingsSuccess: ComponentStory<typeof EvneFinalForm> = (
  args,
) => <EvneFinalForm {...args} />;

GitSettingsSuccess.args = {
  onSubmit: action('handleSubmit'),
  component: GitSettings,
  schema,
};
GitSettingsSuccess.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await interactions.sleep(1000);
  await interactions.typeToInput(canvas, 'git-settings-domain-url', 'dolore');
  await interactions.typeToInput(canvas, 'git-settings-project-id', 'do');
  await interactions.typeToInput(
    canvas,
    'git-settings-access-token',
    'nostrud',
  );
  // SUCCESS PLAY
  await interactions.sleep(1000);
  await interactions.clickSubmit(canvas);
  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};

export const GitSettingsError: ComponentStory<typeof EvneFinalForm> = (
  args,
) => <EvneFinalForm {...args} />;

GitSettingsError.args = {
  onSubmit: action('handleSubmit'),
  component: GitSettings,
  schema,
};

GitSettingsError.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await interactions.sleep(1000);
  await interactions.clickSubmit(canvas);
  await waitFor(() => expect(args.onSubmit).not.toHaveBeenCalled());
};
