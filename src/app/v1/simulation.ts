import type { CustomBoxElement } from '@/app/v1/types';
import { assertNever } from '@/helpers/basics';

/**
 * ! MUTATES
 * @todo: check for loops, optimise things
 * @todo: boxes so far only have one output, but more are possible, account for that!
 */
export function simulate(circuit: CustomBoxElement): CustomBoxElement {
  // walk the graph, throw if cycle encountered, for now
  // throw if inputs come from two places as well

  // start from the pieces that don't have outputs
  const startingPoints = circuit.boxElements.filter(function (boxElement) {
    // output boxes only have inputs
    if (boxElement.boxKind === 'output') {
      return true;
    }

    // any other box that does not have a connector attached to the output
    const connectorsOut = circuit.connectorElements.filter((connector) => {
      if (connector.startElementId === boxElement.id) {
        return true;
      }
      return false;
    });

    if (connectorsOut.length === 0) {
      return true;
    }

    return false;
  });

  startingPoints.forEach(function handleBox(boxToHandle): boolean {
    // TODO: precompute a box to connector mapping as an optimization
    // TODO: throw if more than 1 connector is found to a port
    const connectors = circuit.connectorElements
      .filter((connector) => {
        return connector.endElementId === boxToHandle.id;
      })
      .sort((a, b) => a.endElementInputId - b.endElementInputId);

    switch (boxToHandle.boxKind) {
      case 'input':
        return boxToHandle.state;
      case 'output':
        if (!connectors.length) {
          return (boxToHandle.state = false);
        }

        // TODO: only one connector in
        const originBox = circuit.boxElements.find(
          (box) => box.id === connectors[0]!.startElementId,
        );
        if (!originBox) {
          throw new Error('should not happen');
        }
        return (boxToHandle.state = connectors[0]!.state = handleBox(originBox));
      case 'custom':
        throw new Error('Implement this');
      case 'provided':
        switch (boxToHandle.providedKind) {
          case 'and': {
            if (!connectors.length) {
              return (boxToHandle.state = false);
            }
            // TODO: max 2 connectors
            let state1 = false;
            let state2 = false;
            for (const [idx, connector] of connectors.entries()) {
              const box = circuit.boxElements.find((b) => b.id === connector.startElementId);
              if (!box) {
                throw new Error('should not happen');
              }
              const result = handleBox(box);
              connector.state = result;
              if (idx === 0) {
                state1 = result;
              } else {
                state2 = result;
              }
            }
            return (boxToHandle.state = state1 && state2);
          }
          case 'not': {
            // TODO: max 1 connector
            if (!connectors.length) {
              return (boxToHandle.state = true);
            }
            const originBox = circuit.boxElements.find(
              (b) => b.id === connectors[0]!.startElementId,
            );
            if (!originBox) {
              throw new Error('should not happen');
            }
            const result = handleBox(originBox);
            connectors[0]!.state = result;
            return (boxToHandle.state = !result);
          }
        }
      default:
        assertNever(boxToHandle);
    }
  });
  return circuit;
}
