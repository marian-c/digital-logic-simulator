import React from 'react';
import { useElementLayout } from '@/hooks/useElementLayout/useElementLayout';
import type { LayoutEvent } from '@/types/rnw';

/**
 * wrapper over useElementLayout
 *
 * Just reduces boilerplate by creating the ref and returning it ready to be attached
 *
 */
export const useElementLayoutWithRef = <T extends HTMLElement>(fn: (e: LayoutEvent<T>) => void) => {
  const elRef = React.useRef<T>(null);
  useElementLayout(elRef, fn);
  return elRef;
};
