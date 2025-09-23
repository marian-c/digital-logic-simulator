import type { Effect, CleanupFunction } from './types';
import { effect } from '@/imported/signals/preact-signals-core';

export function effects(...entries: Effect[]): CleanupFunction {
  const effects = entries.map((eff) => {
    return effect(eff);
  });

  return () => effects.forEach((cleanup) => cleanup());
}
