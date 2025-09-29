import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';
import { action } from 'storybook/actions';
import {
  useComputed,
  useSignalEffect,
  useSignal,
  useSignals,
} from '@/imported/signals/preact-signals-react-runtime';
import { signal } from '@/imported/signals/preact-signals-core';
import { useLiveSignal } from '@/imported/signals/preact-signals-react-runtime/utils';

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

export const Basic: Story = {
  render() {
    function Demo() {
      doAction('RENDER');
      useSignals();
      const count = useSignal(0);
      const double = useComputed(() => count.value * 2);

      useSignalEffect(() => {
        doAction(`Value: ${count.value}, value x 2 = ${double.value}`);
      });

      return (
        <button onClick={() => count.value++}>
          Value: {count.value}, value x 2 = {double.value}
        </button>
      );
    }
    return <Demo />;
  },
};

const globalSignal = signal(0);

export const GlobalSignal: Story = {
  render() {
    function Demo() {
      useSignals();
      return <button onClick={() => globalSignal.value++}>Global: {globalSignal.value}</button>;
    }
    return <Demo />;
  },
};

const globalSignal2 = signal(0);

export const UseLiveSignalTODO: Story = {
  render() {
    function Demo() {
      useSignals();
      const _localSignal = useLiveSignal(globalSignal2);
      return <button>TODO</button>;
    }
    return <Demo />;
  },
};

export const UseSignalRefTODO: Story = {
  render() {
    return <div>TODO</div>;
  },
};
