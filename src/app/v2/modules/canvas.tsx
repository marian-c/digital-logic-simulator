'use client';
import { useElementLayoutWithRef } from '@/hooks/useElementLayout/useElementLayoutWithRef';
import React from 'react';

export function CanvasV2() {
  console.log('Render - canvasV2');

  const [size, setSize] = React.useState({ width: 0, height: 0 });

  // on first render this will be 0-0, and will render again
  const canvasRef = useElementLayoutWithRef<HTMLDivElement>((e) => {
    // XXX: this renders un-throttled, remains to be seen if this is a
    //  performance issue, and careful consideration of what work needs to be done for the size change
    //  alternatively, we can throttle this state chagne
    setSize({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height });
  });
  return (
    <div ref={canvasRef} className="flex-grow bg-zinc-200">
      canvas ({size.width} X {size.height})
    </div>
  );
}
