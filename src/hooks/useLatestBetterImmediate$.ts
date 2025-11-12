import { useRef } from 'react';

// like useLatestBetter$, but it will be updated immediately
export function useLatestBetterImmediate<T>(value: T) {
  const valueRef = useRef<T>(value);
  valueRef.current = value;
  return valueRef;
}
