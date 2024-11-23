import { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';
import { ComponentProps } from 'react';

import Typography from '.';

type StoryProps = ComponentProps<typeof Typography> & {
  text: string;
};

const meta: Meta<StoryProps> = {
  component: Typography,
  tags: ['autodocs'],
  args: {
    onClick: fn(),
  },
  argTypes: {
    as: {
      control: {
        type: 'text',
      },
    },
    variant: {
      options: [
        'heading4Xl',
        'heading3Xl',
        'heading2Xl',
        'headingXl',
        'headingLg',
        'body5Xl',
        'body4Xl',
        'body3Xl',
        'body2Xl',
        'bodyXl',
        'bodyLg',
        'bodyMd',
        'bodySm',
        'bodyXSm',
        'body2XSm',
        'body3XSm',
        'buttonLg',
        'buttonMd',
        'buttonSm',
        'buttonXSm',
      ],
      control: {
        type: 'select',
      },
    },
    cursor: {
      options: ['pointer', 'not-allowed', 'default'],
      control: {
        type: 'select',
      },
    },
  },
};

export default meta;

type Story = StoryObj<StoryProps>;

export const TypographyStory: Story = {
  args: {
    text: 'Hello World!',
    variant: 'heading4Xl',
    cursor: 'default',
    as: 'span',
  },
  render: ({ text, ...args }) => <Typography {...args}>{text}</Typography>,
};
