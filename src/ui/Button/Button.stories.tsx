import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';

import Button from '.';

type StoryProps = ComponentProps<typeof Button> & {
  buttonText: string;
};

const meta: Meta<StoryProps> = {
  component: Button,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary', 'ghost', 'link'],
      control: {
        type: 'select',
      },
    },
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
    },
    isDisabled: {
      control: {
        type: 'boolean',
      },
    },
    isFluid: {
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      control: {
        type: 'boolean',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const ButtonStory: Story = {
  args: {
    buttonText: 'Primary Button',
    variant: 'primary',
    size: 'md',
    isDisabled: false,
    isFluid: false,
    isLoading: false,
  },
  render: ({ buttonText, ...args }) => <Button {...args}>{buttonText}</Button>,
};
