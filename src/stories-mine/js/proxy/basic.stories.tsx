import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';
import { action } from 'storybook/actions';
import { useConstant } from '@/imported/signals/dnd-kit-react/hooks/useConstant';

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
      useConstant(() => {
        const obj = { firstName: 'me', lastName: 'me' };
        const proxied = new Proxy(obj, {});
        console.log(proxied);
        doAction('For empty handler the reference differs?', proxied !== obj);
        const pr2 = new Proxy(proxied, {
          get(target, prop, _receiver) {
            return (target as any)[prop];
          },
        });
        console.log('pr2', pr2);
      });

      return <div>An empty handler does nothing</div>;
    }

    return <Demo />;
  },
};
