import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';
import { useCounter } from '@/hooks/useCounter';
import { useOnElementChange } from '@/imported/signals/dnd-kit-react/hooks/useOnElementChange';
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

export const WithRef: Story = {
  render() {
    const ref = React.useRef<HTMLDivElement>(null);
    const { buttonEl } = useCounter();
    useOnElementChange(ref, (mewCounter) => {
      doAction(`ref has changed (${mewCounter})`);
    });
    return (
      <div>
        <h3>Do something when a ref changes but needs a re-render</h3>
        <div ref={ref}>the original needs an Element value</div>
        {buttonEl}
      </div>
    );
  },
};
