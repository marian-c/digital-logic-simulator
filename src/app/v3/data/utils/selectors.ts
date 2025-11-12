import type { DataV3, PortKind, Sketch, SketchStructure } from '@/app/v3/types/data';
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

export function getConnectorById(connectorId: number, activeSketch: Sketch) {
  return activeSketch.structure.main.connectorElements.find((c) => c.id === connectorId)!;
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

export function getConnectorSimById(connectorId: number, activeSketch: Sketch) {
  return activeSketch.simulation.connectorSimState.find((p) => p.connectorId === connectorId)!;
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

export function getPoint(
  box: BoxElement,
  boxPosition: SketchBoxPosition,
  portId: number,
  data: DataV3,
) {
  switch (box.kind) {
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
    case 'custom': {
      const customSketch = data.sketches.find((s) => s.meta.uuid === box.params.uuid)!;
      // TODO: [y pos] get the inputs and outputs in order of y pos
      const inputs = customSketch.structure.main.boxElements.filter((b) => b.kind === 'input');
      const outputs = customSketch.structure.main.boxElements.filter((b) => b.kind === 'output');
      const height = Math.max(inputs.length, outputs.length, 1) * 20;
      const stepInputs = (height - 20) / (inputs.length - 1);
      const stepOutputs = (height - 20) / (outputs.length - 1);
      for (const [idx, input] of inputs.entries()) {
        if (input.id === portId) {
          const cy = inputs.length === 1 ? height / 2 : 10 + stepInputs * idx;
          return {
            x: boxPosition.pos.x + 0,
            y: boxPosition.pos.y + cy,
          };
        }
      }
      for (const [idx, output] of outputs.entries()) {
        if (output.id === portId) {
          const width = customSketch.meta.name.length * 15;
          const cy = outputs.length === 1 ? height / 2 : 10 + stepOutputs * idx;
          return {
            x: boxPosition.pos.x + width,
            y: boxPosition.pos.y + cy,
          };
        }
      }
      throw new Error('Inconsistency: portId not found ' + portId + '');
    }
    default:
      assertNever(box);
  }
}

export function getUsableCustomBoxes(data: DataV3): Sketch[] {
  const sketches = data.sketches.filter((s) => s.meta.uuid !== data.selectedSketchUuid);

  return sketches.filter(function isGoodSketch(sketch: Sketch): boolean {
    const customBoxes = sketch.structure.main.boxElements.filter((b) => b.kind === 'custom');
    for (const customBox of customBoxes) {
      if (customBox.params.uuid === data.selectedSketchUuid) {
        return false;
      }
      const customSketch = data.sketches.find((s) => s.meta.uuid === customBox.params.uuid)!;
      const isGood = isGoodSketch(customSketch);
      if (!isGood) {
        return false;
      }
    }
    return true;
  });
}

export function getBias(connectorElementId: number, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  const bias = activeSketch.positions.connectorBiases.find(
    (b) => b.connectorId === connectorElementId,
  )!;
  if (!bias) {
    console.warn('Bias not found for connector ' + connectorElementId);
  }
  return bias;
}

export function getActiveBoxLabel(boxId: number, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  const box = getBoxById(boxId, activeSketch);
  return box.label || '';
}
export function getActiveConnectorLabel(connectorId: number, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  const connector = getConnectorById(connectorId, activeSketch);
  return connector.label || '';
}

export function getActiveConnector(connectorId: number, data: DataV3) {
  const activeSketch = getActiveSketch(data);
  return getConnectorById(connectorId, activeSketch);
}

export function getConnectorComputedLabel(connectorId: number, structure: SketchStructure) {
  const connector = structure.main.connectorElements.find((c) => c.id === connectorId)!;
  const startBox = structure.main.boxElements.find((b) => b.id === connector.fromBoxId)!;
  const endBox = structure.main.boxElements.find((b) => b.id === connector.toBoxId)!;
  return `${startBox.label}(${startBox.id}) -> ${endBox.label}(${endBox.id})`;
}
