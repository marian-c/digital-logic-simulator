import 'react';
import type { ReactLayoutHandler } from '@/types/rnw';

declare module 'react' {
  interface SVGProps {
    ['data-desc']?: string;
  }
  interface CSSProperties {
    // allow css variables to be set on style props
    [key: `--${string}`]: string | number;
  }
}

declare global {
  interface Element {
    // code ported from RNW uses this
    __reactLayoutHandler?: ReactLayoutHandler | undefined;
  }
}
