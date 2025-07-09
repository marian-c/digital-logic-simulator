import React from 'react';
import { useDraggable } from '@dnd-kit/react';
import { RestrictToElement } from '@dnd-kit/dom/modifiers';

export function Example2({ id }: { id: string }) {
  const containerRef = React.useRef(null);
  const { ref } = useDraggable({
    id,
    modifiers: [RestrictToElement.configure({ element: containerRef.current })],
  });

  return (
    <div ref={containerRef} className="border-2 border-amber-500 w-48 h-48 overflow-auto">
      Restrict to element
      <button ref={ref} className="inline">
        Move this
      </button>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      Extra
    </div>
  );
}
