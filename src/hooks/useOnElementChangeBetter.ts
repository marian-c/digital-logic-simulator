import { useRef } from 'react';
import { currentValueBetter, type RefOrValueBetter } from '@/utilities/currentValueBetter';
import { useIsomorphicLayoutEffect } from '@/imported/signals/dnd-kit-react/hooks/useIsomorphicLayoutEffect';

export function useOnElementChangeBetter<E>(
  value: RefOrValueBetter<E>,
  onChange: (value: E extends null ? undefined : E) => void,
): void;
export function useOnElementChangeBetter<E>(
  value: RefOrValueBetter<E>,
  onChange: (value: E | undefined) => void,
): void {
  const previous = useRef(currentValueBetter<E>(value));

  useIsomorphicLayoutEffect(() => {
    const current = currentValueBetter<E>(value);

    if (current !== previous.current) {
      previous.current = current;
      onChange(current);
    }
  });
}
