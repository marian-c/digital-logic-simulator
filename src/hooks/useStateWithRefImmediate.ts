import React, { useRef, useState } from 'react';

export function useStateWithRefImmediate<T>(initialValue: T | (() => T)) {
  const [state, _setState] = useState<T>(initialValue);
  const ref = useRef<T>(
    typeof initialValue === 'function' ? (initialValue as () => T)() : initialValue,
  );
  const setState = React.useCallback((value: T) => {
    _setState(value);
    ref.current = value;
  }, []);
  return [state, setState, ref] as const;
}
