import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';
import { currentValue } from '@/imported/signals/dnd-kit-react/utilities/currentValue';

const meta = {
  parameters: {
    docs: {
      codePanel: true,
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render() {
    const ref = React.useRef('Some value in ref');
    return (
      <div>
        <h3>Function that takes the value out of a ref or a value</h3>
        <div>For example: {currentValue(ref)}</div>
      </div>
    );
  },
};
