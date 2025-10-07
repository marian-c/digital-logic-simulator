import type { FunctionComponent } from '@/types/r-ui';
import type { AndBoxElement, BoxElement } from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import { InputBox } from '@/app/v3/modules/canvas/boxes/inputBox';
import { OutputBox } from '@/app/v3/modules/canvas/boxes/outputBox';
import { assertNever } from '@/helpers/basics';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';
import { getActiveSketch } from '@/app/v3/data/utils/selectors';
import React from 'react';
import { GenericBox } from '@/app/v3/modules/canvas/boxes/genericBox';
import {
  andGateColor,
  andGateHeight,
  andGateWidth,
  inputCircleToCircleDist,
} from '@/app/v3/config';
import { connectorCircleRadius } from '@/app/v2/config';
import { ConnectorPoint } from '@/app/v3/modules/canvas/boxes/connectorPoint';

export const AndBox: FunctionComponent<{
  boxElement: AndBoxElement;
  boxPosition: SketchBoxPosition;
}> = ({ boxElement, boxPosition }) => {
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
            state={Math.random() > 0.5}
          />
          <ConnectorPoint
            portKind="inputPort"
            cx={0}
            cy={(3 * andGateHeight) / 4}
            portId={0}
            boxElement={boxElement}
            state={Math.random() > 0.5}
          />
          <ConnectorPoint
            portKind="outputPort"
            cx={andGateWidth}
            cy={andGateHeight / 2}
            portId={2}
            boxElement={boxElement}
            state={Math.random() > 0.5}
          />
        </>
      }
    />
  );
};
