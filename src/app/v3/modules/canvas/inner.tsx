import React from 'react';
import { Boxes } from '@/app/v3/modules/canvas/boxes';

export function CanvasInner() {
  return (
    <>
      {/*render connectors first because they would go over connection points, and we make use of mouseOver events
         for those points
      */}
      <Boxes />
    </>
  );
}
