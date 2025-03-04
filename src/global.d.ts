import 'react';

declare module 'react' {
  interface CSSProperties {
    // allow css variables to be set on style props
    [key: `--${string}`]: string | number;
  }
}
