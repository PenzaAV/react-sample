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
import CloneGenerator from './index';
import { schema } from './schema';

export default {
  title: 'forms/CloneGenerator',
  component: CloneGenerator,
  decorators: [
    (story: () => any) => (
      <MockProvider preloadedState={preloadedState as Subset<RootState>}>
        {story()}
      </MockProvider>
    ),
  ],
};

export const CloneGeneratorSuccess: ComponentStory<typeof EvneFinalForm> = (
  args,
) => <EvneFinalForm {...args} />;

CloneGeneratorSuccess.args = {
  onSubmit: action('handleSubmit'),
  component: CloneGenerator,
  schema,
};
CloneGeneratorSuccess.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await interactions.sleep(1000);
  await interactions.selectOption(canvas, 'clone-generator-project');
  await interactions.typeToInput(
    canvas,
    'clone-generator-generator-name',
    'occaecat',
  );
  // SUCCESS PLAY
  await interactions.sleep(1000);
  await interactions.clickSubmit(canvas);
  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};

export const CloneGeneratorError: ComponentStory<typeof EvneFinalForm> = (
  args,
) => <EvneFinalForm {...args} />;

CloneGeneratorError.args = {
  onSubmit: action('handleSubmit'),
  component: CloneGenerator,
  schema,
};

CloneGeneratorError.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await interactions.sleep(1000);
  await interactions.clickSubmit(canvas);
  await waitFor(() => expect(args.onSubmit).not.toHaveBeenCalled());
};
