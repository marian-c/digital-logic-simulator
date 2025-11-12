'use client';

import React from 'react';
import { useElementLayout } from '@/hooks/useElementLayout/useElementLayout';

export default function PagePgElementLayout() {
  const [width, setWidth] = React.useState(400);
  const [random, setRandom] = React.useState(0);
  const elRef = React.useRef<HTMLDivElement>(null);
  console.log('PagePgElementLayout', elRef.current);
  useElementLayout(elRef, (e) => {
    console.debug('onLayout', e, elRef.current);
    setRandom(Math.random);
  });

  return (
    <div
      style={{ width, background: 'tan' }}
      ref={elRef}
      onClick={() => {
        setWidth(width + 1);
      }}
    >
      content {width} {random}
    </div>
  );
}
