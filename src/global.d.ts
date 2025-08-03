import 'react';
import type { ReactLayoutHandler } from '@/types/rnw';
import type { Sketch } from '@/app/_page/types';

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
  interface Window {
    __sketch__?: Sketch;
  }
  interface Element {
    // code ported from RNW uses this
    __reactLayoutHandler?: ReactLayoutHandler | undefined;
  }
}
