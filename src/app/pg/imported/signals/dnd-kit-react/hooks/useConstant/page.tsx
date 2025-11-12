'use client';

import React, { useState } from 'react';
import { useConstant } from '@/imported/signals/dnd-kit-react/hooks/useConstant';

export default function PagePgImportedSignalsDndKitReactHooksUseConstant() {
  const [local, setLocal] = useState(1);
  const v = useConstant(() => {
    console.log('running the initializer');
    return 42;
  });

  return (
    <div>
      Constant value: {v}{' '}
      <button
        onClick={() => {
          setLocal(local + 1);
        }}
      >
        Inc local {local}
      </button>
    </div>
  );
}
