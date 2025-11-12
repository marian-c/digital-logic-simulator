import { useLatestBetter$ } from '@/hooks/useLatestBetter$';
import { useState } from 'react';

export function useStateWithRef<T>(initialValue: T | (() => T)) {
  const [state, setState] = useState<T>(initialValue);
  const ref = useLatestBetter$(state);
  return [state, setState, ref] as const;
}
