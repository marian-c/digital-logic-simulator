import type { RefObject } from 'react';

export type RefOrValueBetter<T> = T | RefObject<T>;

function isRef<T>(value: RefOrValueBetter<T>): value is RefObject<T> {
  return value != null && typeof value === 'object' && 'current' in value;
}

export function currentValueBetter<T>(value: RefOrValueBetter<T>): T extends null ? undefined : T;
export function currentValueBetter<T>(value: RefOrValueBetter<T>): NonNullable<T> | undefined {
  if (value == null) {
    return undefined;
  }

  if (isRef(value)) {
    return value.current ?? undefined;
  }

  return value;
}
