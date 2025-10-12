import type { DataV3, PortKind, Sketch } from '@/app/v3/types/data';
import type { BoxElement, ConnectorElement } from '@/app/v3/types/innerSketchStructure';
import { assertNever } from '@/helpers/basics';
import type { SketchBoxPosition } from '@/app/v3/types/innerSketchPositions';
import {
  andGateHeight,
  notGateHeight,
  notGateWidth,
  outputCircleToCircleDist,
} from '@/app/v3/config';
import { andGateWidth } from '@/app/v2/config';

export function getActiveSketch(data: DataV3) {
  // TODO: error handling
  return data.sketches.find((s) => s.meta.uuid === data.selectedSketchUuid)!;
}

export function getBoxById(boxId: number, activeSketch: Sketch) {
  return activeSketch.structure.main.boxElements.find((b) => b.id === boxId)!;
}

export function getActiveBox(boxId: number, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  return getBoxById(boxId, activeSketch);
}

export function getBoxPositionById(boxId: number, activeSketch: Sketch) {
  return activeSketch.positions.boxPositions.find((p) => p.boxId === boxId)!;
}

export function getBoxSimById(boxId: number, activeSketch: Sketch) {
  return activeSketch.simulation.boxSimState.find((p) => p.boxId === boxId)!;
}

export function getActiveBoxPosition(boxId: number, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  return getBoxPositionById(boxId, activeSketch);
}

export function getActiveConnectorData(connectorElement: ConnectorElement, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  const fromBox = getBoxById(connectorElement.fromBoxId, activeSketch);
  const fromBoxPosition = getBoxPositionById(connectorElement.fromBoxId, activeSketch);
  const toBox = getBoxById(connectorElement.toBoxId, activeSketch);
  const toBoxPosition = getBoxPositionById(connectorElement.toBoxId, activeSketch);
  return {
    fromBox,
    fromBoxPosition,
    toBox,
    toBoxPosition,
  };
}

export function getActiveInputStateObject(box: BoxElement, sketch: Sketch) {
  return sketch.inputs.inputsState.find((s) => s.boxId === box.id);
}

export function getActiveInputState(box: BoxElement, data: DataV3) {
  // TODO: box needs to exist and be an input
  const activeSketch = getActiveSketch(data);
  const state = getActiveInputStateObject(box, activeSketch)?.state || false;
  return state;
}

export function getActiveIsPortDraggable(
  portId: number,
  portKind: PortKind,
  boxElement: BoxElement,
  data: DataV3,
) {
  const activeSketch = getActiveSketch(data);
  let isActive = true;

  switch (portKind) {
    case 'inputPort':
      const onConnector = activeSketch.structure.main.connectorElements.find(
        (c) => c.toBoxId === boxElement.id && c.toPortId === portId,
      );
      isActive = onConnector === undefined;
    case 'outputPort':
      break;
    default:
      assertNever(portKind);
  }
  return isActive;
}

export function getPoint(box: BoxElement, boxPosition: SketchBoxPosition, portId: number) {
  switch (box.boxElementKind) {
    case 'and':
      if (portId === 0) {
        return {
          x: boxPosition.pos.x,
          y: boxPosition.pos.y + andGateHeight / 4,
        };
      } else if (portId == 1) {
        return {
          x: boxPosition.pos.x,
          y: boxPosition.pos.y + (3 * andGateHeight) / 4,
        };
      } else if (portId === 2) {
        return {
          x: boxPosition.pos.x + andGateWidth,
          y: boxPosition.pos.y + andGateHeight / 2,
        };
      } else {
        throw new Error('Inconsistency: portId is not 0,1 or 2, but ' + portId + '');
      }
      break;
    case 'not':
      if (portId === 0) {
        return {
          x: boxPosition.pos.x,
          y: boxPosition.pos.y + notGateHeight / 2,
        };
      } else if (portId === 1) {
        return {
          x: boxPosition.pos.x + notGateWidth,
          y: boxPosition.pos.y + notGateHeight / 2,
        };
      } else {
        throw new Error('Inconsistency: portId is not 0 or 1, but ' + portId + '');
      }
      break;
    case 'input':
      if (portId === 0) {
        return {
          x: boxPosition.pos.x + outputCircleToCircleDist,
          y: boxPosition.pos.y,
        };
      } else {
        throw new Error('Inconsistency: portId is not 0, but ' + portId + '');
      }
      break;
    case 'output':
      if (portId === 0) {
        return {
          x: boxPosition.pos.x,
          y: boxPosition.pos.y,
        };
      } else {
        throw new Error('Inconsistency: portId is not 0, but ' + portId + '');
      }
      break;
    default:
      assertNever(box);
  }
}
