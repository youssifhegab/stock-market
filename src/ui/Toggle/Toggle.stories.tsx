import type { Meta, StoryObj } from '@storybook/react';
import Toggle from '.';

export default {
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    isDisabled: {
      control: 'boolean',
    },
    label: {
      control: 'text',
    },
    hintMessage: {
      control: 'text',
    },
    value: {
      control: 'boolean',
    },
    onchange: {
      action: 'changed',
    },
  },
} as Meta;

type Story = StoryObj<typeof Toggle>;

export const ToggleDefaultStory: Story = {
  args: {
    label: 'Toggle',
    hintMessage: 'This is a hint message.',
    isDisabled: false,
    value: false,
  },
};
