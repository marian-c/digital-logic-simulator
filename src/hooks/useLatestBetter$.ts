import { useRef } from 'react';
import { useIsomorphicLayoutEffect } from '@/imported/signals/dnd-kit-react/hooks/useIsomorphicLayoutEffect';

export function useLatestBetter$<T>(value: T) {
  const valueRef = useRef<T>(value);

  useIsomorphicLayoutEffect(() => {
    valueRef.current = value;
  }, [value]);

  return valueRef;
}
