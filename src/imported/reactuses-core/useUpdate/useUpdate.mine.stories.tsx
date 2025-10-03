import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';
import { action } from 'storybook/actions';
import { useUpdate } from '@/imported/reactuses-core/useUpdate/index';

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
      const doUpdate = useUpdate();
      React.useEffect(() => {
        doAction('component has rendered');
      });
      return (
        <div>
          Time: {Date.now()}
          <br />
          <button onClick={doUpdate}>Force update</button>
        </div>
      );
    }

    return <Demo />;
  },
};
