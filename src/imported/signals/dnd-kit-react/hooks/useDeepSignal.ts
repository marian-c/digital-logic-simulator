import { useMemo, useRef } from 'react';
import { useForceUpdate } from '@/imported/signals/dnd-kit-react/hooks/useForceUpdate';
import { useIsomorphicLayoutEffect } from '@/imported/signals/dnd-kit-react/hooks/useIsomorphicLayoutEffect';
import { effect, untracked } from '@/imported/signals/preact-signals-core';
import { flushSync } from 'react-dom';

/** Trigger a re-render when reading signal properties of an object. */
export function useDeepSignal<T extends object | null | undefined>(
  target: T,
  synchronous?: (property: keyof T, oldValue: any, newValue: any) => boolean,
): T {
  const tracked = useRef(new Map<string | symbol, any>());
  const forceUpdate = useForceUpdate();

  useIsomorphicLayoutEffect(() => {
    if (!target) {
      tracked.current.clear();
      return;
    }

    return effect(() => {
      let stale = false;
      let sync = false;

      for (const entry of tracked.current) {
        const [key] = entry;
        const value = untracked(() => entry[1]);
        const latestValue = (target as any)[key];

        if (value !== latestValue) {
          stale = true;
          tracked.current.set(key, latestValue);
          sync = synchronous?.(key as keyof T, value, latestValue) ?? false;
        }
      }

      if (stale) {
        // eslint-disable-next-line @typescript-eslint/no-unused-expressions
        sync ? flushSync(forceUpdate) : forceUpdate();
      }
    });
  }, [target]);

  return useMemo(
    () =>
      target
        ? new Proxy(target, {
            get(target, key) {
              const value = (target as any)[key];

              tracked.current.set(key, value);

              return value;
            },
          })
        : target,
    [target],
  );
}
