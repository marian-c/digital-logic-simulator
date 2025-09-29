import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { action } from 'storybook/actions';

const meta = {
  parameters: {
    docs: {
      codePanel: true,
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

const doAction = action('action');

export const BasicStory: Story = {
  render() {
    function Demo() {
      doAction('rendered');

      return <div></div>;
    }

    return <Demo />;
  },
};
