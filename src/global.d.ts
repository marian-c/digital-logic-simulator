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
  interface History {
    state: { __APP_V4_PREV_SKETCH?: { name: string; uuid: string } };
  }
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_LOGS_DEBUG?: '1' | '0';
      NEXT_PUBLIC_PERF_GENERAL?: '1' | '0';
      NEXT_PUBLIC_PERF_SIM?: '1' | '0';
      NEXT_PUBLIC_SKETCH_VALIDATION?: '1' | '0';
      NEXT_PUBLIC_EXTRA_CHECKS?: '1' | '0';
    }
  }
}
