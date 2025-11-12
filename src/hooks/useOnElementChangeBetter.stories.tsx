import React from 'react';
import type { Meta, StoryObj } from '@storybook/nextjs';
import { useCounter } from '@/hooks/useCounter';
import { action } from 'storybook/actions';
import { useOnElementChangeBetter } from '@/hooks/useOnElementChangeBetter';

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

export const WithValue: Story = {
  render() {
    const { counter, buttonEl } = useCounter();
    useOnElementChangeBetter(counter as number | null, (mewCounter) => {
      doAction(`counter has changed (${mewCounter})`);
    });
    return (
      <div>
        <h3>Do something when a value changes</h3>
        <div>State value for example</div>
        {buttonEl}
      </div>
    );
  },
};
export const WithRef: Story = {
  render() {
    const ref = React.useRef(1);
    const { counter, buttonEl } = useCounter();
    useOnElementChangeBetter(counter, (mewCounter) => {
      doAction(`ref has changed (${mewCounter})`);
    });
    return (
      <div>
        <h3>Do something when a ref changes but needs a re-render</h3>
        <div>State value for example</div>
        {buttonEl}
        <button
          onClick={() => {
            ref.current++;
          }}
        >
          Increment ref {ref.current}
        </button>
      </div>
    );
  },
};
