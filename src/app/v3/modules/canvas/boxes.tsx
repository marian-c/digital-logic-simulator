// TODO: if a box is dragged, we don't need to render all the other boxes

import type { FunctionComponent } from '@/types/r-ui';
import { assertNever } from '@/helpers/basics';
import React from 'react';
import {
  andGateColor,
  andGateHeight,
  andGateWidth,
  connectorCircleRadius,
  notGateColor,
  notGateHeight,
  notGateWidth,
} from '@/app/v3/config';
import type { AndBoxElement, BoxElement, NotBoxElement } from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';
import { getActiveSketch, getBoxPositionById } from '@/app/v3/data/utils/selectors';
import { GenericBox } from '@/app/v3/modules/canvas/boxes/genericBox';
import { OutputBox } from '@/app/v3/modules/canvas/boxes/outputBox';
import { InputBox } from '@/app/v3/modules/canvas/boxes/inputBox';

const NotBox: FunctionComponent<{
  boxElement: NotBoxElement;
  boxPosition: SketchBoxPosition;
}> = ({ boxElement, boxPosition }) => {
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
          <circle cx="0" cy={notGateHeight / 2} r={connectorCircleRadius} fill="red" />
          <circle cx={notGateWidth} cy={notGateHeight / 2} r={connectorCircleRadius} fill={'red'} />
        </>
      }
    />
  );
};

const AndBox: FunctionComponent<{
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
          <circle cx="0" cy={andGateHeight / 4} r={connectorCircleRadius} fill="red" />
          <circle cx="0" cy={(3 * andGateHeight) / 4} r={connectorCircleRadius} fill="red" />
          <circle
            cx={notGateWidth}
            cy={andGateHeight / 2}
            r={connectorCircleRadius}
            fill={'blue'}
          />
        </>
      }
    />
  );
};

const Box: FunctionComponent<{ boxElement: BoxElement; boxPosition: SketchBoxPosition }> = ({
  boxElement,
  boxPosition,
}) => {
  const { boxElementKind } = boxElement;
  switch (boxElementKind) {
    case 'not':
      return <NotBox boxElement={boxElement} boxPosition={boxPosition} />;
      break;
    case 'input':
      return <InputBox boxElement={boxElement} boxPosition={boxPosition} />;
      break;
    case 'output':
      return <OutputBox boxElement={boxElement} boxPosition={boxPosition} />;
      break;
    case 'and':
      return <AndBox boxElement={boxElement} boxPosition={boxPosition} />;
      break;
    default:
      assertNever(boxElementKind);
      break;
  }
};

export const Boxes: FunctionComponent = () => {
  const data = useSketchStorageData();
  const activeSketch = getActiveSketch(data);

  return (
    <>
      {activeSketch.structure.main.boxElements.map((boxElement) => {
        // XXX: assumes valid sketch
        const boxPosition = getBoxPositionById(boxElement.id, activeSketch);
        return <Box boxElement={boxElement} boxPosition={boxPosition} key={boxElement.id} />;
      })}
    </>
  );
};
