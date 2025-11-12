import type { FunctionComponent } from '@/types/r-ui';
import type { AndBoxElement } from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import React from 'react';
import { GenericBox } from '@/app/v3/modules/canvas/boxes/genericBox';
import { andGateColor, andGateHeight, andGateWidth } from '@/app/v3/config';
import { ConnectorPoint } from '@/app/v3/modules/canvas/boxes/connectorPoint';
import type { BoxSimulationState } from '@/app/v3/types/innerSketchSimulation';

export const AndBox: FunctionComponent<{
  boxElement: AndBoxElement;
  boxPosition: SketchBoxPosition;
  boxSim: BoxSimulationState;
}> = ({ boxElement, boxPosition, boxSim }) => {
  return (
    <GenericBox
      boxId={boxElement.id}
      pos={boxPosition.pos}
      innerChildren={
        <>
          <rect fill={andGateColor} width={andGateWidth} height={andGateHeight} />
          <text x="14" y="25" fill="white" fontWeight="bold" fontSize={14}>
            AND
          </text>
        </>
      }
      overChildren={
        <>
          <ConnectorPoint
            portKind="inputPort"
            cx={0}
            cy={andGateHeight / 4}
            portId={0}
            boxElement={boxElement}
            state={boxSim.simStatesInputs[0]!.state}
          />
          <ConnectorPoint
            portKind="inputPort"
            cx={0}
            cy={(3 * andGateHeight) / 4}
            portId={1}
            boxElement={boxElement}
            state={boxSim.simStatesInputs[1]!.state}
          />
          <ConnectorPoint
            portKind="outputPort"
            cx={andGateWidth}
            cy={andGateHeight / 2}
            portId={2}
            boxElement={boxElement}
            state={boxSim.simStatesOutputs[0]!.state}
          />
        </>
      }
    />
  );
};
