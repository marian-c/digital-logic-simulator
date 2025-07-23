import type { CustomBoxElement } from '@/app/types';

/**
 * ! MUTATES
 */
export function simulate(circuit: CustomBoxElement): CustomBoxElement {
  // walk the graph, throw if cycle encountered, for now
  // throw if inputs come from two places as well

  // start from the pieces that don't have inputs

  const piecesThatDontHaveInputs = circuit.boxElements.filter((boxElement) => {
    // input boxes only have outputs
    if (boxElement.boxKind === 'input') {
      return true;
    }

    // any other box that does not have a connector attached
    circuit.connectorElements.some();

    return false;
  });

  const inputs = circuit.boxElements.filter((boxElement) => {
    switch (boxElement.boxKind) {
      case 'input':
        return true;
      default:
        return false;
    }
  });
  inputs.forEach((input) => {
    console.log(input);
  });

  return circuit;
}
