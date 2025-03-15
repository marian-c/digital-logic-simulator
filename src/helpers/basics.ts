export const isBrowser = typeof window !== 'undefined';

export const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);
