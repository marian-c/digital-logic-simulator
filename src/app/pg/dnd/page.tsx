'use client';

import React from 'react';
import { defaultHeight, defaultWidth } from '@/app/pg/dnd/constants';
import { getSample } from '@/app/pg/dnd/types';

export default function PagePgDnd() {
  const [data] = React.useState(() => {
    return getSample();
  });

  return (
    <svg
      width={defaultWidth}
      height={defaultHeight}
      viewBox={`0 0 ${defaultWidth} ${defaultHeight}`}
      overflow="scroll"
      className="border border-amber-500"
    >
      {data.theBox.elements.map((element) => {
        return (
          <rect
            key={element.id}
            x={element.pos.x}
            y={element.pos.y}
            width={100}
            height={100}
            fill="pink"
          />
        );
      })}
    </svg>
  );
}
