import React from 'react';
import { Boxes } from '@/app/v3/modules/canvas/boxes';
import { Connectors } from '@/app/v3/modules/canvas/connectors';

export function CanvasInner() {
  return (
    <>
      {/*render connectors first because they would go over connection points, and we make use of mouseOver events
         for those points
      */}
      <Connectors />
      <Boxes />
    </>
  );
}
