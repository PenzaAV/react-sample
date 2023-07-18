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
import CreateProject from './index';
import { schema } from './schema';

export default {
  title: 'forms/CreateProject',
  component: CreateProject,
  decorators: [
    (story: () => any) => (
      <MockProvider preloadedState={preloadedState as Subset<RootState>}>
        {story()}
      </MockProvider>
    ),
  ],
};

export const CreateProjectSuccess: ComponentStory<typeof EvneFinalForm> = (
  args,
) => <EvneFinalForm {...args} />;

CreateProjectSuccess.args = {
  onSubmit: action('handleSubmit'),
  component: CreateProject,
  schema,
};
CreateProjectSuccess.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await interactions.sleep(1000);
  await interactions.typeToInput(canvas, 'create-project-name', 'nulla');
  // SUCCESS PLAY
  await interactions.sleep(1000);
  await interactions.clickSubmit(canvas);
  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};

export const CreateProjectError: ComponentStory<typeof EvneFinalForm> = (
  args,
) => <EvneFinalForm {...args} />;

CreateProjectError.args = {
  onSubmit: action('handleSubmit'),
  component: CreateProject,
  schema,
};

CreateProjectError.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await interactions.sleep(1000);
  await interactions.clickSubmit(canvas);
  await waitFor(() => expect(args.onSubmit).not.toHaveBeenCalled());
};
