import type { DataV3, Sketch } from '@/app/v3/types/data';
import { v7 as uuidv7 } from 'uuid';
import { generateEmptySketch } from '@/app/v3/data/helpers';
import {
  getActiveInputStateObject,
  getActiveSketch,
  getBoxPositionById,
} from '@/app/v3/data/utils/selectors';
import type { BoxElement, BoxElementKind } from '@/app/v3/types/innerSketchStructure';
import { assertNever } from '@/helpers/basics';

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

export function actionAddActiveConnector(
  fromBox: { boxId: number; portId: number },
  toBox: { boxId: number; portId: number },
  oldData: DataV3,
) {
  const activeSketch = getActiveSketch(oldData);
  // XXX: just mutates
  activeSketch.structure.main.connectorElements.push({
    id: activeSketch.meta.nextId++,
    fromBoxId: fromBox.boxId,
    fromPortId: fromBox.portId,
    toBoxId: toBox.boxId,
    toPortId: toBox.portId,
  });
  return { ...oldData };
}

export function actionAddMutateNewBox(
  boxKind: BoxElementKind,
  x: number,
  y: number,
  sketch: Sketch,
) {
  // TODO: this is a big function, should validate at the end
  const boxId = sketch.meta.nextId++;
  const newBox = { id: boxId, boxElementKind: boxKind };
  const newPosition = { boxId, pos: { x, y } };
  sketch.structure.main.boxElements.push(newBox);
  sketch.positions.boxPositions.push(newPosition);

  switch (boxKind) {
    case 'and':
      sketch.simulation.boxSimState.push({
        boxId,
        simStatesInputs: [
          { portId: 0, state: false },
          { portId: 1, state: false },
        ],
        simStatesOutputs: [{ portId: 2, state: false }],
      });
      break;
    case 'not':
      sketch.simulation.boxSimState.push({
        boxId,
        simStatesInputs: [{ portId: 0, state: false }],
        simStatesOutputs: [{ portId: 1, state: false }],
      });
      break;
    case 'output':
      sketch.simulation.boxSimState.push({
        boxId,
        simStatesInputs: [{ portId: 0, state: false }],
        simStatesOutputs: [],
      });
      break;
    case 'input':
      sketch.simulation.boxSimState.push({
        boxId,
        simStatesInputs: [],
        simStatesOutputs: [{ portId: 0, state: false }],
      });
      sketch.inputs.inputsState.push({ boxId, state: false });
      break;
    default:
      assertNever(boxKind);
  }

  return [{ newBox, newPosition }, sketch] as const;
}
export function actionActiveAddNewBox(
  boxKind: BoxElementKind,
  x: number,
  y: number,
  oldData: DataV3,
) {
  const sketch = getActiveSketch(oldData);
  // XXX mutates
  const [extra] = actionAddMutateNewBox(boxKind, x, y, sketch);
  return [extra, { ...oldData }] as const;
}
