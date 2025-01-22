'use client';
import React, { type RefCallback } from 'react';

export default function PageUseRefCallback() {
  const refCb = React.useCallback<RefCallback<HTMLElement>>((node) => {
    if (node) {
      console.log('Element has mounted');
    }
  }, []);
  const [value, setValue] = React.useState(false);

  return (
    <>
      <h2>Do something when an element mounts</h2>
      <button onClick={() => setValue(!value)}>Toggle</button>
      {value && <div ref={refCb}>Here we go</div>}
    </>
  );
}
