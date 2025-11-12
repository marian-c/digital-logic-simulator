import React from 'react';
import { Boxes } from '@/app/v3/modules/canvas/boxes';
import { Connectors } from '@/app/v3/modules/canvas/connectors';
import { useInteractionsData } from '@/app/v3/providers/interactions';
import { FloatingConnectorC } from '@/app/v3/modules/canvas/floatingConnector';

export function CanvasInner() {
  const { floatingConnector } = useInteractionsData();
  return (
    <>
      {/*render connectors first because they would go over connection points, and we make use of mouseOver events
         for those points
      */}
      <Connectors />
      <Boxes />
      {floatingConnector && <FloatingConnectorC floatingConnector={floatingConnector} />}
    </>
  );
}
