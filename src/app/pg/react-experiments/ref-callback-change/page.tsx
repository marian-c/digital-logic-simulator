'use client';
import React, { useState } from 'react';

export default function PagePgReactExperimentsRefCallbackChange() {
  const [num, setNum] = useState(1);
  const refCb = React.useCallback<React.RefCallback<HTMLDivElement>>(
    (element) => {
      console.log('ref called', num, element);
    },
    [num],
  );
  return (
    <div ref={refCb}>
      Ref callback change
      {num}
      <button
        onClick={() => {
          setNum(num + 1);
        }}
      >
        Inc
      </button>
      <br />
      conclusion: when the ref callback changes, the old one gets called with null and the new one
      is set
    </div>
  );
}
