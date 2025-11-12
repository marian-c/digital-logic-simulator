import type { Meta, StoryObj } from '@storybook/nextjs';
import React from 'react';
import { action } from 'storybook/actions';
import { computed, effect, signal } from '@/imported/signals/preact-signals-core/index';
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

export const SignalSimple: Story = {
  render() {
    const sig = useConstant(() => signal(1));
    return (
      <div>
        <h3>A signal holds a value which you can read with .value ({sig.value})</h3>
      </div>
    );
  },
};

export const SignalCallbacks: Story = {
  render() {
    const sig = useConstant(() =>
      signal(1, {
        watched() {
          console.log('watched');
          doAction('watched');
        },
        unwatched() {
          doAction('unwatched');
        },
      }),
    );
    return (
      <div>
        <h3>Passing callbacks when signal is created for some lifecycle ({sig.value})</h3>
      </div>
    );
  },
};

export const EffectSimple: Story = {
  render() {
    useConstant(() => {
      return effect(() => {
        console.log('empty effect');
        doAction('empty effect Action');
      });
    });
    return <div>Effect simple</div>;
  },
};

export const EffectActuallySubscribed: Story = {
  render() {
    function Demo() {
      const { sig, dispose } = useConstant(() => {
        const sig = signal(1, {
          watched() {
            console.log('watched');
            doAction('watch');
          },
          unwatched() {
            console.log('unwatched');
            doAction('un-watch');
          },
        });
        const dispose = effect(() => {
          console.log(`Effect, value: ${sig.value}`);
          doAction(`effect, value: ${sig.value}`);
        });
        return { sig, dispose };
      });

      return (
        <div>
          <h3>Actually using sig.value will make the subscription work {sig.value}</h3>
          <button
            onClick={() => {
              sig.value = sig.value + 1;
            }}
          >
            Change (inc)
          </button>
          <button
            onClick={() => {
              dispose();
            }}
          >
            Dispose
          </button>
        </div>
      );
    }

    return <Demo />;
  },
};

export const EffectSubscribedToTwoSignals: Story = {
  render() {
    function Demo() {
      const { signal1, signal2 } = useConstant(() => {
        const signal1 = signal(1);
        const signal2 = signal('a');
        effect(() => {
          doAction(`A signal changed ${signal1.value}, ${signal2.value}`);
        });
        return { signal1, signal2 };
      });

      return (
        <div>
          <button
            onClick={() => {
              signal1.value++;
            }}
          >
            Change signal 1
          </button>
          <button
            onClick={() => {
              signal2.value = signal2.value + 1;
            }}
          >
            Change signal 2
          </button>
        </div>
      );
    }

    return <Demo />;
  },
};

export const EffectUsing2SignalsButSubscribedToOne: Story = {
  render() {
    function Demo() {
      const { signal1, signal2 } = useConstant(() => {
        const signal1 = signal(1);
        const signal2 = signal('a');
        effect(() => {
          doAction(`A signal changed ${signal1.peek()}, ${signal2.value}`);
        });
        return { signal1, signal2 };
      });

      return (
        <div>
          <button
            onClick={() => {
              signal1.value++;
            }}
          >
            Change signal 1
          </button>
          <button
            onClick={() => {
              signal2.value = signal2.value + 1;
            }}
          >
            Change signal 2
          </button>
        </div>
      );
    }

    return <Demo />;
  },
};

export const Computed: Story = {
  render() {
    function Demo() {
      useConstant(() => {
        const fname = signal('J');
        const surname = signal('D');
        const name = computed(() => {
          return `FullName: ${fname.value} ${surname.value}`;
        });
        effect(() => {
          doAction(`A signal changed ${name.value}`);
        });
      });

      return (
        <div>
          <h3>Combining data from multiple signals to form a new signal</h3>
        </div>
      );
    }

    return <Demo />;
  },
};

export const ComputedForNarrowing: Story = {
  render() {
    function Demo() {
      const full = useConstant(() => {
        const fullData = signal({ a: 'First value', b: 'Second value' });
        const secondValue = computed(() => {
          return fullData.value['b'];
        });

        effect(() => {
          doAction(`Original value changed ${JSON.stringify(fullData.value)}`);
        });
        effect(() => {
          doAction(
            `second value changed ${secondValue.value} (first one is: ${fullData.peek().a})`,
          );
        });
        return fullData;
      });

      return (
        <div>
          <h3>Using computed to narrow down the data</h3>
          <button
            onClick={() => {
              full.value = { ...full.value, a: full.value.a + 1 };
            }}
          >
            Change first value
          </button>
          <button
            onClick={() => {
              full.value = { ...full.value, b: full.value.b + 1 };
            }}
          >
            Change second value
          </button>
        </div>
      );
    }

    return <Demo />;
  },
};

export const Batch: Story = {
  render() {
    return <div>TODO</div>;
  },
};

export const Untracked: Story = {
  render() {
    return <div>TODO</div>;
  },
};
