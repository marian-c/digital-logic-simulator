import type { FunctionComponent } from '@/types/r-ui';
import React from 'react';
import type { BoxElement } from '@/app/v3/types/innerSketchStructure';
import { useSketchStorageMethods } from '@/app/v3/providers/dataStorageProvider';
import { getActiveIsPortDraggable } from '@/app/v3/data/utils/selectors';
import { useInteractionsMethods } from '@/app/v3/providers/interactions';
import type { PortKind } from '@/app/v3/types/data';

export const ConnectorPoint: FunctionComponent<{
  boxElement: BoxElement;
  cx?: number;
  cy?: number;
  state: boolean;
  portId: number;
  portKind: PortKind;
}> = ({ cx, cy, state, boxElement, portId, portKind }) => {
  const { $onConnectorPointMouseDown, $onConnectorPointMouseOver, $onConnectorPointMouseOut } =
    useInteractionsMethods();
  const { sketchDataRef } = useSketchStorageMethods();
  const isPortDraggable = getActiveIsPortDraggable(
    portId,
    portKind,
    boxElement,
    sketchDataRef.current,
  );
  return (
    <circle
      cursor={isPortDraggable ? 'copy' : undefined}
      onMouseDown={
        !isPortDraggable
          ? undefined
          : (mouseEvent) => {
              $onConnectorPointMouseDown(portId, portKind, boxElement, mouseEvent);
            }
      }
      onMouseOver={() => {
        $onConnectorPointMouseOver(portId, portKind, boxElement);
      }}
      onMouseOut={() => {
        $onConnectorPointMouseOut(portId, portKind, boxElement);
      }}
      fill={state ? 'crimson' : 'dimgray'}
      r={6}
      cx={cx}
      cy={cy}
    />
  );
};
