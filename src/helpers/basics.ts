export const isBrowser = typeof window !== 'undefined';

export const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const noop = () => {};
export const isSetTrue = (arg: boolean | undefined | null) => !!arg;
