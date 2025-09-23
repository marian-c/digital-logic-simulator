import { useMemo, useRef } from 'react';
import { useSignal } from '@/imported/signals/dnd-kit-react/hooks/useSignal';
import { computed } from '@/imported/signals/dnd-kit-state/computed';

export function useComputed<T = any>(compute: () => T, dependencies: any[] = [], sync = false) {
  const $compute = useRef(compute);
  $compute.current = compute;

  return useSignal(
    useMemo(() => computed(() => $compute.current()), dependencies),
    sync,
  );
}
