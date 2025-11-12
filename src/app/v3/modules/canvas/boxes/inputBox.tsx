import type { FunctionComponent } from '@/types/r-ui';
import type { InputBoxElement } from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import { inputCircleToCircleDist } from '@/app/v3/config';
import React from 'react';
import { GenericBox } from '@/app/v3/modules/canvas/boxes/genericBox';
import { useSketchStorageMethods } from '@/app/v3/providers/dataStorageProvider';
import { getActiveInputState } from '@/app/v3/data/utils/selectors';
import { actionToggleActiveInputState } from '@/app/v3/data/utils/actions';
import { useInteractionsMethods } from '@/app/v3/providers/interactions';
import { ConnectorPoint } from '@/app/v3/modules/canvas/boxes/connectorPoint';
import type { BoxSimulationState } from '@/app/v3/types/innerSketchSimulation';

export const InputBox: FunctionComponent<{
  boxElement: InputBoxElement;
  boxPosition: SketchBoxPosition;
  boxSim: BoxSimulationState;
}> = ({ boxElement, boxPosition, boxSim }) => {
  const { $setSketchData, sketchDataRef } = useSketchStorageMethods();
  const { hasDraggedRef } = useInteractionsMethods();

  return (
    <GenericBox
      boxId={boxElement.id}
      pos={boxPosition.pos}
      innerChildren={
        <>
          <rect
            fill="black"
            stroke="black"
            width={inputCircleToCircleDist}
            height={6}
            x={0}
            y={-3}
          />
          <rect
            cursor={'pointer'}
            fill={getActiveInputState(boxElement, sketchDataRef.current) ? 'crimson' : 'dimgray'}
            stroke="#E8AA2DFF"
            strokeWidth={1}
            width={30}
            height={20}
            x={-15}
            y={-10}
            onMouseUp={() => {
              if (!hasDraggedRef.current) {
                $setSketchData(actionToggleActiveInputState(boxElement, sketchDataRef.current));
              }
            }}
          />
        </>
      }
      overChildren={
        <>
          {!boxElement.hideLabel && (
            <text x="-15" y="-15" fill="black" fontSize={13} fontWeight="bold">
              {boxElement.label} ({boxElement.id})
            </text>
          )}
          <ConnectorPoint
            portKind="outputPort"
            portId={0}
            boxElement={boxElement}
            cx={inputCircleToCircleDist}
            state={boxSim.simStatesOutputs[0]!.state}
          />
        </>
      }
    />
  );
};
