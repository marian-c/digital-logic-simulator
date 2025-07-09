// XXX: use client - because dnd provider would strangely error
'use client';
import { DragDropProvider } from '@dnd-kit/react';
import { Example1 } from '@/app/pg/react-eco/dnd-kit/example1';
import { Example2 } from '@/app/pg/react-eco/dnd-kit/example2';
import { Example3 } from '@/app/pg/react-eco/dnd-kit/example3';

export default function PagePGEcoDndKit() {
  return (
    <div>
      <h3>DND Kit</h3>
      <DragDropProvider>
        <Example1 id={'example1'} />
        <hr />
        <Example2 id={'example2'} />
        <hr />
        <Example3 id={'example3'} />
        <hr />
      </DragDropProvider>
    </div>
  );
}
