'use client';
import React, { type RefCallback } from 'react';

export default function PageUseRefCallback() {
  const refCb = React.useCallback<RefCallback<HTMLElement>>((node) => {
    if (node) {
      console.log('Element has mounted');
    }
  }, []);
  const [value, setValue] = React.useState(false);
  const [counter, setCounter] = React.useState(1);

  return (
    <>
      <h2>Do something when an inner element mounts {counter}</h2>
      <button onClick={() => setValue(!value)}>Toggle</button>
      <button onClick={() => setCounter(counter + 1)}>Increment</button>
      {value && <div ref={refCb}>Here we go</div>}
    </>
  );
}
