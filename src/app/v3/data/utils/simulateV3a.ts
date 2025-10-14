import { assertNever } from '@/helpers/basics';
import type { DataV3, Sketch } from '@/app/v3/types/data';
import { getActiveSketch } from '@/app/v3/data/utils/selectors';
import type {
  AndBoxElement,
  BoxElement,
  InputBoxElement,
  NotBoxElement,
  OutputBoxElement,
} from '@/app/v3/types/innerSketchStructure';
import type { BoxSimulationState } from '@/app/v3/types/innerSketchSimulation';

/**
 * Strategy: start simulating from the extremities of the graph,
 * then recurse up until the dependency chain is solved
 */

function getUpstreamBox(originBoxId: number, portNumber: number, activeSketch: Sketch) {
  // XXX structure assumption
  const connector = activeSketch.structure.main.connectorElements.find(function (connector) {
    return connector.toBoxId === originBoxId && connector.toPortId === portNumber;
  });
  if (connector) {
    const foundBox = activeSketch.structure.main.boxElements.find(function (boxElement) {
      return boxElement.id === connector.fromBoxId;
    });
    if (foundBox) {
      return [foundBox, connector] as const;
    }
  }
  return undefined;
}

function hasConnectorOut(boxElementId: number, activeSketch: Sketch) {
  return activeSketch.structure.main.connectorElements.some(function (connector) {
    return connector.fromBoxId === boxElementId;
  });
}

function getElementsWithoutOutput(activeSketch: Sketch, _data: DataV3) {
  return activeSketch.structure.main.boxElements.filter(function (boxElement) {
    switch (boxElement.boxElementKind) {
      case 'not':
        return !hasConnectorOut(boxElement.id, activeSketch);
      case 'input':
        return !hasConnectorOut(boxElement.id, activeSketch);
      case 'and':
        return !hasConnectorOut(boxElement.id, activeSketch);
      case 'output':
        return true;
      default:
        assertNever(boxElement);
    }
  });
}

export function simulateV3a(data: DataV3) {
  if (data.sketches.length === 0) {
    return data;
  }
  /**
   * +-------+
   * | INPUT |----O
   * +-------+
   */
  function handleInputBox(boxElement: InputBoxElement, activeSketch: Sketch): BoxSimulationState {
    // TODO: handle not found either by throwing or validating at the beginning
    const state = activeSketch.inputs.inputsState.find((s) => s.boxId === boxElement.id)!.state;
    return {
      boxId: boxElement.id,
      simStatesInputs: [],
      simStatesOutputs: [{ portId: 0, state }],
    };
  }

  /**
   *      +--------+
   * 0----| OUTPUT |
   *      +--------+
   */
  function handleOutputBox(boxElement: OutputBoxElement, activeSketch: Sketch): BoxSimulationState {
    const ingress = getUpstreamSignal(boxElement.id, 0, activeSketch) || false;
    return {
      boxId: boxElement.id,
      simStatesInputs: [{ portId: 0, state: ingress }],
      simStatesOutputs: [],
    };
  }

  /**
   *      +-------+
   * O----|  NOT  |----1
   *      +-------+
   */
  function handleNotBox(boxElement: NotBoxElement, activeSketch: Sketch): BoxSimulationState {
    const ingress = getUpstreamSignal(boxElement.id, 0, activeSketch) || false;
    const out = !ingress;
    return {
      boxId: boxElement.id,
      simStatesInputs: [{ portId: 0, state: ingress }],
      simStatesOutputs: [{ portId: 1, state: out }],
    };
  }

  /**
   *      +-------+
   * O----|       |
   *      |  AND  |----2
   * 1----|       |
   *      +-------+
   */
  function handleAndBox(boxElement: AndBoxElement, activeSketch: Sketch): BoxSimulationState {
    const in0 = getUpstreamSignal(boxElement.id, 0, activeSketch) || false;
    const in1 = getUpstreamSignal(boxElement.id, 1, activeSketch) || false;
    const out = in0 && in1;
    return {
      boxId: boxElement.id,
      simStatesInputs: [
        { portId: 0, state: in0 },
        { portId: 1, state: in1 },
      ],
      simStatesOutputs: [{ portId: 2, state: out }],
    };
  }

  function getUpstreamSignal(originBoxId: number, portNumber: number, activeSketch: Sketch) {
    const upstream = getUpstreamBox(originBoxId, portNumber, activeSketch);
    if (!upstream) {
      return undefined;
    }
    const [upstreamBox, upstreamConnector] = upstream;
    const sim = handleBox(upstreamBox, activeSketch);
    const ingress =
      sim.simStatesOutputs.find((o) => o.portId === upstreamConnector.fromPortId)!.state || false;
    return ingress;
  }

  function handleBox(boxToHandle: BoxElement, activeSketch: Sketch): BoxSimulationState {
    // TODO: detect cycles and fix some how (random?)

    const simulated = activeSketch.simulation.boxSimState.find((s) => s.boxId === boxToHandle.id);
    if (simulated) {
      return simulated;
    }

    let handled: BoxSimulationState;

    switch (boxToHandle.boxElementKind) {
      case 'input':
        handled = handleInputBox(boxToHandle, activeSketch);
        break;
      case 'output':
        handled = handleOutputBox(boxToHandle, activeSketch);
        break;
      case 'not':
        handled = handleNotBox(boxToHandle, activeSketch);
        break;
      case 'and':
        handled = handleAndBox(boxToHandle, activeSketch);
        break;
      default:
        assertNever(boxToHandle);
    }

    handled.simStatesOutputs.forEach((output) => {
      const connectors = activeSketch.structure.main.connectorElements.filter(function (connector) {
        return connector.fromBoxId === boxToHandle.id && connector.fromPortId === output.portId;
      });
      for (const connector of connectors) {
        activeSketch.simulation.connectorSimState.push({
          connectorId: connector.id,
          state: output.state,
        });
      }
    });
    activeSketch.simulation.boxSimState.push(handled);
    return handled;
  }

  const _activeSketch = getActiveSketch(data);
  // clean old sim data
  // TODO: maybe if we don't clean it up we can avoid recreating all those objects
  //   and just mutate what's there
  _activeSketch.simulation.boxSimState = [];
  _activeSketch.simulation.connectorSimState = [];

  // start from the pieces that don't have outputs
  const startingPoints = getElementsWithoutOutput(_activeSketch, data);

  startingPoints.forEach((box) => {
    handleBox(box, _activeSketch);
  });

  // TODO: if after handling all the starting points and their dependencies,
  //   we still have unsolved boxes, the rest are in a cycle and we need to pic a random one maybe
  //   or detect the cycle and apply "the" fix

  return data;
}
