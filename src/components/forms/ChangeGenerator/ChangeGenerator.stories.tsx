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
import ChangeGenerator from './index';
import { schema } from './schema';

export default {
  title: 'forms/ChangeGenerator',
  component: ChangeGenerator,
  decorators: [
    (story: () => any) => (
      <MockProvider preloadedState={preloadedState as Subset<RootState>}>
        {story()}
      </MockProvider>
    ),
  ],
};

export const ChangeGeneratorSuccess: ComponentStory<typeof EvneFinalForm> = (
  args,
) => <EvneFinalForm {...args} />;

ChangeGeneratorSuccess.args = {
  onSubmit: action('handleSubmit'),
  component: ChangeGenerator,
  schema,
};
ChangeGeneratorSuccess.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await interactions.sleep(1000);
  await interactions.clickElement(
    canvas,
    'change-generator-field-array-form_field_array-add-button',
  );
  await interactions.typeToInput(canvas, 'change-generator-name', 'tempor');
  await interactions.typeToInput(
    canvas,
    'change-generator-description',
    'mollit',
  );
  await interactions.clickElement(
    canvas,
    'templates[0].relative-change-generator-relative',
  );

  await interactions.typeToInput(
    canvas,
    'generators[0].filter-change-generator-filter',
    'minim',
  );
  await interactions.clickElement(
    canvas,
    'generators[0].relative-change-generator-relative',
  );
  await interactions.typeToInput(
    canvas,
    'generators[0].items_dropdown-change-generator-items-dropdown',
    'ad',
  );
  await interactions.clickElement(
    canvas,
    'templates[0].open_in_editor-change-generator-open-in-editor',
  );
  await interactions.typeToInput(
    canvas,
    'generators[0].label-change-generator-label',
    'consectetur',
  );
  await interactions.clickElement(
    canvas,
    'generators[0].is_required-change-generator-is-required',
  );
  await interactions.selectOption(
    canvas,
    'generators[0].depends_on_field-change-generator-depends-on-field',
  );
  await interactions.clickElement(
    canvas,
    'templates[0].depends_on_form_field-change-generator-depends-on-form-field',
  );
  await interactions.typeToInput(
    canvas,
    'templates[0].condition_field_value-change-generator-condition-field-value',
    'veniam',
  );
  await interactions.selectOption(
    canvas,
    'generators[0].format-change-generator-format',
  );
  // SUCCESS PLAY
  await interactions.clickElement(
    canvas,
    'change-generator-field-array-template_field_array-add-button',
  );
  await interactions.sleep(2000);
  await interactions.clickElement(
    canvas,
    'change-generator-field-array-template_field_array-remove-button',
  );
  await interactions.sleep(1000);
  await interactions.clickSubmit(canvas);
  await waitFor(() => expect(args.onSubmit).toHaveBeenCalled());
};

export const ChangeGeneratorError: ComponentStory<typeof EvneFinalForm> = (
  args,
) => <EvneFinalForm {...args} />;

ChangeGeneratorError.args = {
  onSubmit: action('handleSubmit'),
  component: ChangeGenerator,
  schema,
};

ChangeGeneratorError.play = async ({ args, canvasElement }) => {
  const canvas = within(canvasElement);
  await interactions.sleep(1000);
  await interactions.clickSubmit(canvas);
  await waitFor(() => expect(args.onSubmit).not.toHaveBeenCalled());
};
