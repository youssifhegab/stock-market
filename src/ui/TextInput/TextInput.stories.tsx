import { Meta, StoryObj } from '@storybook/react';
import { ComponentProps } from 'react';

import TextInput from '.';

type StoryProps = ComponentProps<typeof TextInput> & {
  text: string;
};

const meta: Meta<StoryProps> = {
  component: TextInput,
  tags: ['autodocs'],
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    label: {
      control: {
        type: 'text',
      },
    },
    placeholder: {
      control: {
        type: 'text',
      },
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const TextInputStory: Story = {
  args: {
    label: '',
    size: 'md',
    placeholder: 'Placeholder',
    fullWidth: false,
    isDisabled: false,
  },
  render: ({ ...args }) => <TextInput {...args} />,
};
