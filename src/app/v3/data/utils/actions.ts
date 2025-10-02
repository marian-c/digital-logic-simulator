import type { DataV3 } from '@/app/v3/types/data';
import { v7 as uuidv7 } from 'uuid';
import { generateEmptySketch } from '@/app/v3/data/helpers';
import { getActiveBox, getActiveBoxPosition, getActiveSketch } from '@/app/v3/data/utils/selectors';

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

export function actionMoveActiveBox(
  activeBoxX: number,
  activeBoxY: number,
  activeBoxId: number,
  oldData: DataV3,
) {
  const activeBoxPosition = getActiveBoxPosition(activeBoxId, oldData);
  // XXX: just mutates
  activeBoxPosition.pos.x = activeBoxX;
  activeBoxPosition.pos.y = activeBoxY;
  return { ...oldData };
}
