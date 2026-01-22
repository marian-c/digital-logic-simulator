import type { SketchForStorage, SketchWithSimulation } from '@/app/v4/types/data';
import type { BoxElement, BoxParams } from '@/app/v4/types/innerSketchStructure';
import { assertNever } from '@/helpers/basics';
import type { InputState } from '@/app/v4/types/innerSketchInputs';
import { genNumWiresState } from '@/app/v4/data/gen-empty-sketch';
import { _genBoxSimAndExtra } from '@/app/v4/data/ensure-simulation';
import type { NumWires } from '@/app/v4/types/other';

function _genNewInput(boxId: number, boxParams: BoxParams): InputState | null {
  switch (boxParams[0]) {
    case 'input':
      return { boxId, state: genNumWiresState(boxParams[1].numWires) };
    case 'output':
    case 'and':
    case 'not':
    case 'split':
    case 'join':
    case 'custom':
      // only care for inputs
      return null;
    default:
      assertNever(boxParams[0]);
  }
}
function _genNewBox(id: number, boxParams: BoxParams): BoxElement {
  switch (boxParams[0]) {
    case 'input':
      return { id, kind: boxParams[0], p: boxParams[1] };
    case 'output':
      return { id, kind: boxParams[0], p: boxParams[1] };
    case 'and':
      return { id, kind: boxParams[0], p: boxParams[1] };
    case 'not':
      return { id, kind: boxParams[0], p: boxParams[1] };
    case 'split':
      return { id, kind: boxParams[0], p: boxParams[1] };
    case 'join':
      return { id, kind: boxParams[0], p: boxParams[1] };
    case 'custom':
      return { id, kind: boxParams[0], p: boxParams[1] };
    default:
      assertNever(boxParams[0]);
  }
}

export function actionAddNewBox(
  boxParams: BoxParams,
  data: SketchWithSimulation,
  x: number,
  y: number,
  otherSketches: SketchForStorage[],
) {
  let nextId = data.structure.extra.nextId;
  const boxId = nextId++;
  const boxes = data.structure.boxes.slice();
  const box = _genNewBox(boxId, boxParams);
  boxes.push(box);

  // info
  const boxesInfo = data.elementsInfo.boxes.slice();
  boxesInfo.push({ boxId, pos: { x, y } });

  // state
  let inputs = data.inputs;
  const newInput = _genNewInput(boxId, boxParams);
  if (newInput) {
    inputs = inputs.slice();
    inputs.push(newInput);
  }

  // simulation + extra data
  const [boxSim, customData] = _genBoxSimAndExtra(box, [...otherSketches, data]);
  const boxesSimState = data.simulation.boxSimState.slice();
  boxesSimState.push(boxSim);
  let customSupportData = data.simulation.customSketchesSupportData;
  if (customData) {
    customSupportData = customSupportData.slice();
    customSupportData.push(customData);
  }

  return {
    ...data,
    structure: {
      ...data.structure,
      boxes,
      extra: {
        ...data.structure.extra,
        nextId,
      },
    },
    elementsInfo: {
      ...data.elementsInfo,
      boxes: boxesInfo,
    },
    inputs,
    simulation: {
      ...data.simulation,
      boxSimState: boxesSimState,
      customSketchesSupportData: customSupportData,
    },
  };
}

export function actionAddNewConnector(
  fromBoxId: number,
  fromPortId: number,
  toBoxId: number,
  toPortId: number,
  numWires: NumWires,
  data: SketchWithSimulation,
): SketchWithSimulation {
  let nextId = data.structure.extra.nextId;
  const connectorId = nextId++;

  const connectors = data.structure.connectors.slice();
  connectors.push({
    id: connectorId,
    fromBoxId,
    fromPortId,
    toBoxId,
    toPortId,
    p: {
      numWires,
    },
  });
  const elementsInfoConnectors = data.elementsInfo.connectors.slice();
  elementsInfoConnectors.push({ connectorId, bias: { start: 0, mid: 0, end: 0 } });

  const connectorSimStates = data.simulation.connectorSimState.slice();
  connectorSimStates.push({
    connectorId,
    state: genNumWiresState(numWires),
  });

  return {
    ...data,
    structure: {
      ...data.structure,
      connectors,
      extra: {
        ...data.structure.extra,
        nextId,
      },
    },
    elementsInfo: {
      ...data.elementsInfo,
      connectors: elementsInfoConnectors,
    },
    simulation: {
      ...data.simulation,
      connectorSimState: connectorSimStates,
    },
  };
}
