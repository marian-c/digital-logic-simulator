import type { DataV3, Sketch } from '@/app/v3/types/data';
import { v7 as uuidv7 } from 'uuid';
import { generateEmptySketch } from '@/app/v3/data/helpers';
import {
  getActiveInputStateObject,
  getActiveSketch,
  getBoxPositionById,
} from '@/app/v3/data/utils/selectors';
import type { BoxElement, BoxParams } from '@/app/v3/types/innerSketchStructure';
import { assertNever } from '@/helpers/basics';
import {
  generateBoxInputState,
  generateBoxSimState,
  genNewBox,
} from '@/app/v3/data/utils/generate';

export function actionAddEmptySketchAndSelect(newName: string, oldData: DataV3) {
  const uuid = uuidv7();
  const newSketch = generateEmptySketch({ name: newName, uuid });
  // XXX: just mutates
  oldData.sketches.push(newSketch);
  // XXX: just mutates
  oldData.selectedSketchUuid = uuid;
  return { ...oldData };
}

export function actionSelectSketch(uuid: string, oldData: DataV3) {
  // XXX: just mutates
  oldData.selectedSketchUuid = uuid;
  return { ...oldData };
}

export function actionSetActiveSketchName(newName: string, oldData: DataV3) {
  // TODO: not for examples
  const activeSketch = getActiveSketch(oldData);
  // XXX: just mutates
  activeSketch.meta.name = newName;
  return { ...oldData };
}
export function actionSetActiveSketchDescription(description: string, oldData: DataV3) {
  // TODO: not for examples
  const activeSketch = getActiveSketch(oldData);
  // XXX: just mutates
  activeSketch.meta.description = description;
  return { ...oldData };
}

export function actionSetActiveSketchZoomAndPan(
  zoom: number,
  panX: number,
  panY: number,
  oldData: DataV3,
) {
  const activeSketch = getActiveSketch(oldData);
  // XXX: just mutates
  activeSketch.state.zoomFactor = zoom;
  activeSketch.state.panX = panX;
  activeSketch.state.panY = panY;
  return { ...oldData };
}

export function actionSetActiveSketchZoom(zoom: number, oldData: DataV3) {
  const activeSketch = getActiveSketch(oldData);
  // XXX: just mutates
  activeSketch.state.zoomFactor = zoom;
  return { ...oldData };
}

export function actionSetActiveSketchPan(panX: number, panY: number, oldData: DataV3) {
  const activeSketch = getActiveSketch(oldData);
  // XXX: just mutates
  activeSketch.state.panX = panX;
  activeSketch.state.panY = panY;
  return { ...oldData };
}

export function actionMoveActiveBoxBy(
  deltaX: number,
  deltaY: number,
  activeBoxId: number,
  oldData: DataV3,
) {
  // XXX: PERF: this happens of every mouse move event, but the active sketch does not change, so
  // let's not find it every time
  const activeSketch = getActiveSketch(oldData);
  const activeBoxPosition = getBoxPositionById(activeBoxId, activeSketch);
  const zoom = activeSketch.state.zoomFactor;
  // XXX: just mutates
  activeBoxPosition.pos.x += deltaX / zoom;
  activeBoxPosition.pos.y += deltaY / zoom;
  return { ...oldData };
}

export function actionSnapActiveBox(x: number, y: number, activeBoxId: number, oldData: DataV3) {
  // XXX: PERF: this happens of every mouse move event, but the active sketch does not change, so
  // let's not find it every time
  const activeSketch = getActiveSketch(oldData);
  const activeBoxPosition = getBoxPositionById(activeBoxId, activeSketch);
  // XXX: just mutates
  activeBoxPosition.pos.x = Math.round(x / 10) * 10;
  activeBoxPosition.pos.y = Math.round(y / 10) * 10;
  // TODO: PERF: only deref ("actual change it") when the spanned calculated position is different
  return { ...oldData };
}

export function actionToggleActiveInputState(box: BoxElement, oldData: DataV3) {
  const activeSketch = getActiveSketch(oldData);
  let stateObj = getActiveInputStateObject(box, activeSketch);
  if (!stateObj) {
    stateObj = { boxId: box.id, state: true };
    activeSketch.inputs.inputsState.push(stateObj);
  } else {
    // XXX: just mutates
    stateObj.state = !stateObj.state;
  }
  return { ...oldData };
}

export function actionAddMutateConnector(
  fromBox: { boxId: number; portId: number },
  toBox: { boxId: number; portId: number },
  sketch: Sketch,
) {
  const id = sketch.meta.nextId++;
  sketch.structure.main.connectorElements.push({
    id,
    fromBoxId: fromBox.boxId,
    fromPortId: fromBox.portId,
    toBoxId: toBox.boxId,
    toPortId: toBox.portId,
  });
  sketch.simulation.connectorSimState.push({ connectorId: id, state: false });
}

export function actionAddActiveConnector(
  fromBox: { boxId: number; portId: number },
  toBox: { boxId: number; portId: number },
  oldData: DataV3,
) {
  const activeSketch = getActiveSketch(oldData);
  // XXX: just mutates
  actionAddMutateConnector(fromBox, toBox, activeSketch);
  return { ...oldData };
}

export function actionRemoveActiveConnector(connectorId: number, oldData: DataV3) {
  const activeSketch = getActiveSketch(oldData);
  const connectorIdx = activeSketch.structure.main.connectorElements.findIndex((c) => {
    return c.id === connectorId;
  });
  if (connectorIdx !== -1) {
    activeSketch.structure.main.connectorElements.splice(connectorIdx, 1);
  } else {
    console.warn(`could not find connector to remove ${connectorId}, skipping`);
  }

  const simIdx = activeSketch.simulation.connectorSimState.findIndex((s) => {
    return s.connectorId === connectorId;
  });
  if (simIdx !== -1) {
    activeSketch.simulation.connectorSimState.splice(simIdx, 1);
  } else {
    console.warn(`could not find connector sim state to remove ${connectorId}, skipping`);
  }
  return { ...oldData };
}

export function actionRemoveActiveBox(boxId: number, oldData: DataV3) {
  const activeSketch = getActiveSketch(oldData);
  const boxIdx = activeSketch.structure.main.boxElements.findIndex((b) => {
    return b.id === boxId;
  });
  const box = activeSketch.structure.main.boxElements[boxIdx]!;
  if (boxIdx !== -1) {
    activeSketch.structure.main.boxElements.splice(boxIdx, 1);
  } else {
    console.warn(`could not find box to remove ${boxId}, skipping`);
  }

  const idxs: number[] = [];
  activeSketch.structure.main.connectorElements.forEach((connector, idx) => {
    if (connector.fromBoxId === boxId || connector.toBoxId === boxId) {
      idxs.push(idx);
    }
  });
  idxs.reverse().forEach((idx) => {
    activeSketch.structure.main.connectorElements.splice(idx, 1);
  });

  const boxPositionIdx = activeSketch.positions.boxPositions.findIndex((b) => {
    return b.boxId === boxId;
  });
  if (boxPositionIdx !== -1) {
    activeSketch.positions.boxPositions.splice(boxPositionIdx, 1);
  } else {
    console.warn(`could not find box position to remove ${boxId}, skipping`);
  }

  const boxSimIdx = activeSketch.simulation.boxSimState.findIndex((s) => {
    return s.boxId === boxId;
  });
  if (boxSimIdx !== -1) {
    activeSketch.simulation.boxSimState.splice(boxSimIdx, 1);
  } else {
    console.warn(`could not find box sim state to remove ${boxId}, skipping`);
  }

  switch (box.kind) {
    case 'and':
    case 'not':
    case 'output':
      break;
    case 'custom':
      // TODO: XXX if this is a custom box remove additionalSketchStuff
      break;
    case 'input':
      const inputStateIdx = activeSketch.inputs.inputsState.findIndex((s) => {
        return s.boxId === boxId;
      });
      if (inputStateIdx !== -1) {
        activeSketch.inputs.inputsState.splice(inputStateIdx, 1);
      } else {
        console.warn(`could not find input state to remove ${boxId}, skipping`);
      }
      break;
    default:
      assertNever(box);
  }
  return { ...oldData };
}

export function actionAddMutateNewBox(boxParams: BoxParams, x: number, y: number, sketch: Sketch) {
  // TODO: XXX if this is a custom box fill in additionalSketchStuff
  // TODO: this is a big function, should validate at the end
  const boxId = sketch.meta.nextId++;

  const newBox = genNewBox(boxId, boxParams);
  sketch.structure.main.boxElements.push(newBox);

  const newPosition = { boxId, pos: { x, y } };
  sketch.positions.boxPositions.push(newPosition);

  const simState = generateBoxSimState(boxId, boxParams);
  sketch.simulation.boxSimState.push(simState);

  const inputState = generateBoxInputState(boxId, boxParams);
  if (inputState !== null) {
    sketch.inputs.inputsState.push(inputState);
  }

  return [{ newBox, newPosition }, sketch] as const;
}
export function actionActiveAddNewBox(boxParams: BoxParams, x: number, y: number, oldData: DataV3) {
  const sketch = getActiveSketch(oldData);
  // XXX mutates
  const [extra] = actionAddMutateNewBox(boxParams, x, y, sketch);
  return [extra, { ...oldData }] as const;
}
