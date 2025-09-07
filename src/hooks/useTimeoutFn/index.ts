// PORT: https://github.com/streamich/react-use/blob/master/src/useTimeoutFn.ts
// added lint comments

import { useCallback, useEffect, useRef } from 'react';

export type UseTimeoutFnReturn = [() => boolean | null, () => void, () => void];

// eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
export default function useTimeoutFn(fn: Function, ms: number = 0): UseTimeoutFnReturn {
  const ready = useRef<boolean | null>(false);
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const timeout = useRef<ReturnType<typeof setTimeout>>();
  const callback = useRef(fn);

  const isReady = useCallback(() => ready.current, []);

  const set = useCallback(() => {
    ready.current = false;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    timeout.current && clearTimeout(timeout.current);

    timeout.current = setTimeout(() => {
      ready.current = true;
      callback.current();
    }, ms);
  }, [ms]);

  const clear = useCallback(() => {
    ready.current = null;
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    timeout.current && clearTimeout(timeout.current);
  }, []);

  // update ref when function changes
  useEffect(() => {
    callback.current = fn;
  }, [fn]);

  // set on mount, clear on unmount
  useEffect(() => {
    set();

    return clear;
  }, [ms]);

  return [isReady, clear, set];
}
