'use client';

import React, { useState } from 'react';
import type { FunctionComponent } from '@/types/r-ui';
import { useLatest } from '@/imported/signals/dnd-kit-react/hooks/useLatest';

const ExampleForUseLatest: FunctionComponent<{ smth: number }> = ({ smth }) => {
  const latest = useLatest(smth);
  console.log('render', smth, latest);
  return (
    <div>
      Inner: {smth} {latest.current}
    </div>
  );
};

export default function PagePgImportedSignalsDndKitReactHooksUseLatest() {
  const [counter, setCounter] = useState(1);
  return (
    <div>
      <ExampleForUseLatest smth={counter} />
      <button
        onClick={() => {
          return setCounter(counter + 1);
        }}
      >
        Increment
      </button>
    </div>
  );
}
