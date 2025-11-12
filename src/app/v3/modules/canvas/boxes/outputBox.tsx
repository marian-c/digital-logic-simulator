import type { FunctionComponent } from '@/types/r-ui';
import type { OutputBoxElement } from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import { GenericBox } from '@/app/v3/modules/canvas/boxes/genericBox';
import { outputCircleToCircleDist } from '@/app/v3/config';
import React from 'react';
import { ConnectorPoint } from '@/app/v3/modules/canvas/boxes/connectorPoint';
import type { BoxSimulationState } from '@/app/v3/types/innerSketchSimulation';

export const OutputBox: FunctionComponent<{
  boxElement: OutputBoxElement;
  boxPosition: SketchBoxPosition;
  boxSim: BoxSimulationState;
}> = ({ boxElement, boxPosition, boxSim }) => {
  return (
    <GenericBox
      boxId={boxElement.id}
      pos={boxPosition.pos}
      innerChildren={
        <>
          <rect
            fill="black"
            stroke="black"
            width={outputCircleToCircleDist}
            height={6}
            x={0}
            y={-3}
          />

          <rect
            fill={boxSim.simStatesInputs[0]!.state ? 'crimson' : 'dimgray'}
            stroke="#E8AA2DFF"
            width={30}
            height={20}
            x={outputCircleToCircleDist - 15}
            y={-10}
          />
        </>
      }
      overChildren={
        <>
          {!boxElement.hideLabel && (
            <text
              textAnchor="end"
              x={outputCircleToCircleDist + 15}
              y="-15"
              fill="black"
              fontSize={13}
              fontWeight="bold"
            >
              {boxElement.label} ({boxElement.id})
            </text>
          )}
          <ConnectorPoint
            portKind="inputPort"
            portId={0}
            boxElement={boxElement}
            state={boxSim.simStatesInputs[0]!.state}
          />
        </>
      }
    />
  );
};
