import type { Meta, StoryObj } from '@storybook/nextjs-vite';
import React from 'react';
import { action } from 'storybook/actions';
import { useComputed, useSignalEffect, useSignal, useSignals } from '@/imported/signals/preact-signals-react-runtime';


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

function Demo() {
  useSignals();
  const count = useSignal(0);
  const double = useComputed(() => count.value * 2);

  useSignalEffect(() => {
    console.log(count);
    doAction(`Value: ${count.value}, value x 2 = ${double.value}`);
  });

  return (
    <button onClick={() => count.value++}>
      Value: {count.value}, value x 2 = {double.value}
    </button>
  );
}

export const Basic: Story = {
  render() {
    return <Demo />;
  },
};
