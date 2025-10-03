import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';
import { useCounter } from '@/hooks/useCounter';
import { action } from 'storybook/actions';
import { useLatest } from '@/imported/signals/dnd-kit-react/hooks/useLatest';

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

export const Primary: Story = {
  render() {
    const { counter, buttonEl } = useCounter();
    const latest = useLatest(counter);
    return (
      <div>
        <h3>Transforms state into refs</h3>
        {buttonEl}
        <br />
        latest: {latest.current}
        <br />
        Because the state change re-render triggered the latest update, when displaying it, it will
        be one step behind, well.. except the first time
      </div>
    );
  },
};

export const Usefullness: Story = {
  render() {
    const { counter, buttonEl } = useCounter();
    const counterRef = useLatest(counter);
    const handler = React.useCallback(() => {
      doAction(`Using latest: ${counterRef.current}`);
    }, [counterRef]);
    return (
      <div>
        <h3>Useful for callbacks</h3>
        {buttonEl}

        <button onClick={handler}>Use latest</button>
      </div>
    );
  },
};
