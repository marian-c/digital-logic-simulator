import type { Fn } from './types';

export const isBrowser = typeof window !== 'undefined';

export function isFunction<T extends Fn>(val: any): val is T {
  return typeof val === 'function';
}

export const isDev = process.env.NODE_ENV === 'development' || process.env.NODE_ENV === 'test';
