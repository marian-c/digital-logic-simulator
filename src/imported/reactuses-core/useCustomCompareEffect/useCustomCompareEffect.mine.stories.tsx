import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';
import { action } from 'storybook/actions';
import { useCustomCompareEffect } from '@/imported/reactuses-core/useCustomCompareEffect/index';

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

export const UseUpdate: Story = {
  render() {
    function Demo() {
      const [person, setPerson] = React.useState({ name: 'bob', id: 1 });
      useCustomCompareEffect(
        () => {
          doAction(`Person ID changed ${person.id}`);
        },
        [person] as const,
        (prevDeps, nextDeps) => prevDeps[0].id === nextDeps[0].id,
      );

      React.useEffect(() => {
        doAction(`Component has rendered`);
      });

      return (
        <div>
          <button
            onClick={() => {
              setPerson({ name: 'joey', id: 1 });
            }}
          >
            Change Person Name
          </button>
          <button
            onClick={() => {
              setPerson({ name: 'bob', id: 2 });
            }}
          >
            Change Person Id
          </button>
          <p>
            useCustomCompareEffect will run the effect based on custom comparator, it will render
            twice though
          </p>
        </div>
      );
    }

    return <Demo />;
  },
};
