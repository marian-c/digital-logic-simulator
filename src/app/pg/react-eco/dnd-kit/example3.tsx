import React from 'react';
import { useDragDropMonitor, useDraggable } from '@dnd-kit/react';
import { RestrictToElement } from '@dnd-kit/dom/modifiers';

const orig = { x: 16, y: 16 };
export function Example3({ id }: { id: string }) {
  const [pos, setPos] = React.useState(orig);
  const containerRef = React.useRef(null);
  const { ref } = useDraggable({
    id,
    modifiers: [RestrictToElement.configure({ element: containerRef.current })],
    feedback: 'none',
  });

  useDragDropMonitor({
    onDragMove: (operation) => {
      console.log(operation.operation.position.delta);
      const n = {
        x: operation.operation.position.current.x - operation.operation.position.initial.x,
        y: operation.operation.position.current.y - operation.operation.position.initial.y,
      };
      setPos({ x: orig.x + n.x, y: orig.y + n.y });
    },
    onDragEnd: (operation) => {
      console.log('DragEnd', operation);
      setPos((oldPos): typeof pos => {
        return {
          x: oldPos.x + operation.operation.transform.x,
          y: oldPos.y + operation.operation.transform.y,
        };
      });
    },
  });

  console.log('#RENDER example3');

  return (
    <div ref={containerRef} className="border-2 border-amber-500 w-48 h-48 overflow-auto relative">
      Restrict to element
      <button
        ref={ref}
        className="inline absolute top-4 left-4"
        style={{ left: pos.x, top: pos.y }}
      >
        Move this
      </button>
      Extra
    </div>
  );
}
