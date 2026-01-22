import type { PanAndZoomTree, SketchForStorage, SketchWithSimulation } from '@/app/v4/types/data';
import type {
  BoxElement,
  ConnectorElement,
  CustomBoxElement,
  InputBoxElement,
} from '@/app/v4/types/innerSketchStructure';
import { assertNever, assertTrue, error } from '@/helpers/basics';
import type { BoxInfo, ConnectorInfo } from '@/app/v4/types/innerSketchElementsInfo';
import type { SketchInputs } from '@/app/v4/types/innerSketchInputs';
import type {
  BoxSimulationState,
  ConnectorSimState,
  CustomSketchesSupportData,
} from '@/app/v4/types/innerSketchSimulation';

function _removeBox(boxId: number, _boxes: BoxElement[]): [BoxElement[], BoxElement] {
  const boxes = _boxes.slice();
  for (let i = boxes.length - 1; i >= 0; i--) {
    const box = boxes[i]!;
    if (box.id === boxId) {
      boxes.splice(i, 1);
      return [boxes, box];
    }
  }
  error('_removeBox: Box not found');
}

function _removeBoxInfo(boxId: number, _elementsInfoBoxes: BoxInfo[]): BoxInfo[] {
  const elementsInfoBoxes = _elementsInfoBoxes.slice();
  for (let i = elementsInfoBoxes.length - 1; i >= 0; i--) {
    const info = elementsInfoBoxes[i]!;
    if (info.boxId === boxId) {
      elementsInfoBoxes.splice(i, 1);
      return elementsInfoBoxes;
    }
  }
  error('_removeBoxInfo: Box not found');
}

function _removeConnectorInfo(
  connectorId: number,
  _elementsInfoConnectors: ConnectorInfo[],
): ConnectorInfo[] {
  const elementsInfoConnectors = _elementsInfoConnectors.slice();
  for (let i = 0; i < elementsInfoConnectors.length; i++) {
    const info = elementsInfoConnectors[i]!;
    if (info.connectorId === connectorId) {
      elementsInfoConnectors.splice(i, 1);
      return elementsInfoConnectors;
    }
  }
  error('_removeConnectorInfo: connector not found');
}

function _removeConnectorInfos(
  connectorIds: number[],
  _elementsInfoConnectors: ConnectorInfo[],
): ConnectorInfo[] {
  const elementsInfoConnectors = _elementsInfoConnectors;
  let count = 0;
  for (let i = elementsInfoConnectors.length - 1; i >= 0; i--) {
    const info = elementsInfoConnectors[i]!;
    if (connectorIds.includes(info.connectorId)) {
      count++;
      elementsInfoConnectors.splice(i, 1);
    }
  }
  assertTrue(count === connectorIds.length, '_removeConnectorInfos: some info not found');
  return elementsInfoConnectors;
}

function _removeConnector(
  connectorId: number,
  connectors_: ConnectorElement[],
): ConnectorElement[] {
  const connectors = connectors_.slice();
  for (let i = 0; i < connectors.length; i++) {
    const connector = connectors[i]!;
    if (connector.id === connectorId) {
      connectors.splice(i, 1);
      return connectors;
    }
  }
  error('_removeConnector: connector not found');
}

function _removeConnectorsByBoxId(
  boxId: number,
  connectors: ConnectorElement[],
): [ConnectorElement[], number[]] {
  const _c = connectors.slice();
  const removed: number[] = [];
  for (let i = _c.length - 1; i >= 0; i--) {
    const connector = _c[i]!;
    if (connector.fromBoxId === boxId || connector.toBoxId === boxId) {
      removed.push(connector.id);
      _c.splice(i, 1);
    }
  }
  return [removed.length ? _c : connectors, removed];
}

function _removeInputState(box: InputBoxElement, _inputs: SketchInputs): SketchInputs {
  const inputs = _inputs.slice();
  for (let i = 0; i < inputs.length; i++) {
    const input = inputs[i]!;
    if (input.boxId === box.id) {
      inputs.splice(i, 1);
      return inputs;
    }
  }
  error('_removeInputState: input not found');
}

function _removeBoxSim(boxId: number, _boxSimState: BoxSimulationState[]): BoxSimulationState[] {
  const boxSimState = _boxSimState.slice();
  for (let i = 0; i < boxSimState.length; i++) {
    const boxSim = boxSimState[i]!;
    if (boxSim.boxId === boxId) {
      boxSimState.splice(i, 1);
      return boxSimState;
    }
  }
  error('_removeBoxSim: boxSim not found');
}

function _removeConnectorSim(
  connectorId: number,
  _connectorSimState: ConnectorSimState[],
): ConnectorSimState[] {
  const connectorSimState = _connectorSimState.slice();
  for (let i = 0; i < connectorSimState.length; i++) {
    const connectorSim = connectorSimState[i]!;
    if (connectorSim.connectorId === connectorId) {
      connectorSimState.splice(i, 1);
      return connectorSimState;
    }
  }
  error('_removeConnectorSim: connectorSim not found');
}

function _removeConnectorsSim(
  connectorIds: number[],
  _connectorSimState: ConnectorSimState[],
): ConnectorSimState[] {
  const connectorSimState = _connectorSimState.slice();
  let count = 0;
  for (let i = connectorSimState.length - 1; i >= 0; i--) {
    const connectorSim = connectorSimState[i]!;
    if (connectorIds.includes(connectorSim.connectorId)) {
      count++;
      connectorSimState.splice(i, 1);
    }
  }
  assertTrue(count === connectorIds.length, '_removeConnectorsSim: some info not found');
  return connectorSimState;
}

function _removeCustomInfo(
  box: CustomBoxElement,
  _customInfo: CustomSketchesSupportData[],
): CustomSketchesSupportData[] {
  const customInfo = _customInfo.slice();
  for (let i = 0; i < customInfo.length; i++) {
    const info = customInfo[i]!;
    if (info.boxId === box.id) {
      customInfo.splice(i, 1);
      return customInfo;
    }
  }
  error('_removeCustomInfo: custom info not found');
}

export function actionRemoveBoxByBoxId<T extends SketchForStorage | SketchWithSimulation>(
  boxId: number,
  data: T,
): T {
  // remove box, connectors, pos, meta, sim for box and connector, input state (if input), custom data (if custom),
  const [boxes, removedBox] = _removeBox(boxId, data.structure.boxes);
  const [connectors, removedConnectorIds] = _removeConnectorsByBoxId(
    boxId,
    data.structure.connectors,
  );

  const elementsInfoBoxes = _removeBoxInfo(boxId, data.elementsInfo.boxes);
  const elementsInfoConnectors = _removeConnectorInfos(
    removedConnectorIds,
    data.elementsInfo.connectors,
  );

  let inputs = data.inputs;
  switch (removedBox.kind) {
    case 'input':
      inputs = _removeInputState(removedBox, inputs);
      break;
    case 'custom':
    case 'output':
    case 'and':
    case 'not':
    case 'split':
    case 'join':
      // nothing to do
      break;
    default:
      assertNever(removedBox);
  }

  const newSketch: T = {
    ...data,
    structure: { ...data.structure, boxes, connectors },
    elementsInfo: {
      ...data.elementsInfo,
      boxes: elementsInfoBoxes,
      connectors: elementsInfoConnectors,
    },
    inputs,
  };

  if (data.simulation) {
    const boxSim = _removeBoxSim(boxId, data.simulation.boxSimState);
    const connectorSim = _removeConnectorsSim(
      removedConnectorIds,
      data.simulation.connectorSimState,
    );

    // TODO: maybe put an simulation error about this being fiddled with

    let customInfo = data.simulation.customSketchesSupportData;
    switch (removedBox.kind) {
      case 'custom':
        customInfo = _removeCustomInfo(removedBox, customInfo);
        break;
        break;
      case 'input':
      case 'output':
      case 'and':
      case 'not':
      case 'split':
      case 'join':
        // nothing to do
        break;
      default:
        assertNever(removedBox);
    }

    newSketch.simulation = {
      ...data.simulation,
      boxSimState: boxSim,
      connectorSimState: connectorSim,
      customSketchesSupportData: customInfo,
    };
  }

  return newSketch;
}

export function actionRemovePanAndZoomByBoxId(
  boxId: number,
  panAndZoomTree: PanAndZoomTree,
): PanAndZoomTree {
  const newPanAndZoomTree = { ...panAndZoomTree };
  delete newPanAndZoomTree[boxId];
  return newPanAndZoomTree;
}

export function actionRemoveConnectorByConnectorId<
  T extends SketchWithSimulation | SketchForStorage,
>(connectorId: number, data: T): T {
  const connectors = _removeConnector(connectorId, data.structure.connectors);
  const info = _removeConnectorInfo(connectorId, data.elementsInfo.connectors);

  const newSketch = {
    ...data,
    structure: { ...data.structure, connectors: connectors },
    elementsInfo: { ...data.elementsInfo, connectors: info },
  };
  if (data.simulation) {
    const connectorSimState = _removeConnectorSim(connectorId, data.simulation.connectorSimState);
    data.simulation = { ...data.simulation, connectorSimState };
  }

  return newSketch;
}
