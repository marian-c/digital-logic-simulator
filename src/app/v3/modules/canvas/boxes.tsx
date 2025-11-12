// TODO: if a box is dragged, we don't need to render all the other boxes

import type { FunctionComponent } from '@/types/r-ui';
import { assertNever } from '@/helpers/basics';
import React from 'react';
import type { BoxElement } from '@/app/v3/types/innerSketchStructure';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';
import { getActiveSketch, getBoxPositionById, getBoxSimById } from '@/app/v3/data/utils/selectors';
import { OutputBox } from '@/app/v3/modules/canvas/boxes/outputBox';
import { InputBox } from '@/app/v3/modules/canvas/boxes/inputBox';
import { AndBox } from '@/app/v3/modules/canvas/boxes/andBox';
import { NotBox } from '@/app/v3/modules/canvas/boxes/notBox';
import type { BoxSimulationState } from '@/app/v3/types/innerSketchSimulation';
import { CustomBox } from '@/app/v3/modules/canvas/boxes/customBox';

const Box: FunctionComponent<{
  boxElement: BoxElement;
  boxPosition: SketchBoxPosition;
  boxSim: BoxSimulationState;
}> = ({ boxElement, boxPosition, boxSim }) => {
  switch (boxElement.kind) {
    case 'not':
      return <NotBox boxElement={boxElement} boxPosition={boxPosition} boxSim={boxSim} />;
      break;
    case 'input':
      return <InputBox boxElement={boxElement} boxPosition={boxPosition} boxSim={boxSim} />;
      break;
    case 'output':
      return <OutputBox boxElement={boxElement} boxPosition={boxPosition} boxSim={boxSim} />;
      break;
    case 'and':
      return <AndBox boxElement={boxElement} boxPosition={boxPosition} boxSim={boxSim} />;
      break;
    case 'custom':
      return <CustomBox boxElement={boxElement} boxPosition={boxPosition} boxSim={boxSim} />;
      break;
    default:
      assertNever(boxElement);
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
        // TODO: this loops a lot, maybe have a map of boxId to boxPosition?
        const boxPosition = getBoxPositionById(boxElement.id, activeSketch);
        // TODO: this loops a lot, maybe have a map of boxId to boxSimState?
        const boxSim = getBoxSimById(boxElement.id, activeSketch);
        return (
          <Box
            boxElement={boxElement}
            boxPosition={boxPosition}
            boxSim={boxSim}
            key={boxElement.id}
          />
        );
      })}
    </>
  );
};
