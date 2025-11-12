import type { RefObject } from 'react';

export type FunctionComponentWithChildren<P = unknown> = React.FunctionComponent<
  React.PropsWithChildren<P>
>;
export type FunctionComponent<P = unknown> = React.FunctionComponent<P>;

export type RefType<T> = T extends RefObject<infer U> ? U : never;
