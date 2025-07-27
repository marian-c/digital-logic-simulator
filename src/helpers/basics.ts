export const isBrowser = typeof window !== 'undefined';

export const canUseDOM: boolean = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const noop = () => {};
export const isSetTrue = (arg: boolean | undefined | null) => !!arg;

export function assertNever(value: never, noThrow?: boolean, message?: string): never {
  if (noThrow) {
    return value;
  }

  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}${message ? `\n${message}` : ''}`,
  );
}

export function assertIsDefined<T>(
  val: T,
  msg: string | null = null,
): asserts val is NonNullable<T> {
  if (val === undefined || val === null) {
    const message = msg ?? `Expected 'val' to be defined, but received ${val}`;
    console.error(message);
    throw new Error(message);
  }
}
