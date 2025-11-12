import { notGateColor, notGateHeight, notGateWidth } from '@/app/v3/config';
import { ConnectorPoint } from '@/app/v3/modules/canvas/boxes/connectorPoint';
import React from 'react';
import { GenericBox } from '@/app/v3/modules/canvas/boxes/genericBox';
import type { FunctionComponent } from '@/types/r-ui';
import type { NotBoxElement } from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import type { BoxSimulationState } from '@/app/v3/types/innerSketchSimulation';

export const NotBox: FunctionComponent<{
  boxElement: NotBoxElement;
  boxPosition: SketchBoxPosition;
  boxSim: BoxSimulationState;
}> = ({ boxElement, boxPosition, boxSim }) => {
  return (
    <GenericBox
      boxId={boxElement.id}
      pos={boxPosition.pos}
      innerChildren={
        <>
          <rect fill={notGateColor} width={notGateWidth} height={notGateHeight} />
          <text x="14" y="15" fill="white" fontWeight="bold" fontSize={14}>
            NOT
          </text>
        </>
      }
      overChildren={
        <>
          <ConnectorPoint
            portKind="inputPort"
            cx={0}
            cy={notGateHeight / 2}
            portId={0}
            boxElement={boxElement}
            state={boxSim.simStatesInputs[0]!.state}
          />
          <ConnectorPoint
            portKind="outputPort"
            cx={notGateWidth}
            cy={notGateHeight / 2}
            portId={1}
            boxElement={boxElement}
            state={boxSim.simStatesOutputs[0]!.state}
          />
        </>
      }
    />
  );
};
