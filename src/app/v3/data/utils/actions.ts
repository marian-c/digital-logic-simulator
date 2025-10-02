import type { DataV3 } from '@/app/v3/types/data';
import { v7 as uuidv7 } from 'uuid';
import { generateEmptySketch } from '@/app/v3/data/helpers';
import {
  getActiveBox,
  getActiveBoxPosition,
  getActiveSketch,
  getBoxPositionFromSketch,
} from '@/app/v3/data/utils/selectors';

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
  const activeBoxPosition = getBoxPositionFromSketch(activeBoxId, activeSketch);
  const zoom = activeSketch.state.zoomFactor;
  // XXX: just mutates
  activeBoxPosition.pos.x += deltaX / zoom;
  activeBoxPosition.pos.y += deltaY / zoom;
  return { ...oldData };
}
