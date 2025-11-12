import { useRef } from 'react';
import {
  currentValue,
  type RefOrValue,
} from '@/imported/signals/dnd-kit-react/utilities/currentValue';
import { useIsomorphicLayoutEffect } from '@/imported/signals/dnd-kit-react/hooks/useIsomorphicLayoutEffect';

export function useOnElementChange(
  value: RefOrValue<Element>,
  onChange: (value: Element | undefined) => void,
) {
  const previous = useRef(currentValue(value));

  useIsomorphicLayoutEffect(() => {
    const current = currentValue(value);

    if (current !== previous.current) {
      previous.current = current;
      onChange(current);
    }
  });
}
