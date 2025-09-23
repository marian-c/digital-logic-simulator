import { useRef } from 'react';
import { flushSync } from 'react-dom';
import { effect } from '@/imported/signals/preact-signals-core';
import { useForceUpdate } from '@/imported/signals/dnd-kit-react/hooks/useForceUpdate';
import { useIsomorphicLayoutEffect } from '@/imported/signals/dnd-kit-react/hooks/useIsomorphicLayoutEffect';
import type { Sig } from '@/imported/signals/dnd-kit-state/types';

/** Trigger a re-render when reading a signal. */
export function useSignal<T = any>(signal: Sig<T>, sync = false) {
  const previous = useRef(signal.peek());
  const read = useRef(false);
  const forceUpdate = useForceUpdate();

  useIsomorphicLayoutEffect(
    () =>
      effect(() => {
        const previousValue = previous.current;
        const currentValue = signal.value;

        if (previousValue !== currentValue) {
          previous.current = currentValue;

          if (!read.current) return;

          if (sync) {
            flushSync(forceUpdate);
          } else {
            forceUpdate();
          }
        }
      }),
    [signal, sync, forceUpdate],
  );

  return {
    get value() {
      read.current = true;

      return signal.peek();
    },
  };
}
