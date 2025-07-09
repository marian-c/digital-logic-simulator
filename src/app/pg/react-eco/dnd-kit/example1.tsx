import { useDraggable } from '@dnd-kit/react';

export function Example1({ id }: { id: string }) {
  const { ref } = useDraggable({
    id,
  });

  return (
    <div>
      Move just one item
      <div ref={ref}>Move this</div>
    </div>
  );
}
