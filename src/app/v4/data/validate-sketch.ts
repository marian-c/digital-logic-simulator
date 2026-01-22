import type { SketchForStorage } from '@/app/v4/types/data';
import { assertNever, assertTrue } from '@/helpers/basics';

export function validateSketch(data: SketchForStorage, otherSketches: SketchForStorage[]) {
  // box ids are unique
  const boxIdsCache = new Set<number>(data.structure.boxes.map((b) => b.id));
  assertTrue(boxIdsCache.size === data.structure.boxes.length, 'all box ids must be unique');

  // connectorIds are unique
  const connectorIdsCache = new Set<number>(data.structure.connectors.map((c) => c.id));
  assertTrue(
    connectorIdsCache.size === data.structure.connectors.length,
    'all connector ids must be unique',
  );

  // also
  const allIdsCache = new Set([...boxIdsCache, ...connectorIdsCache]);
  assertTrue(
    allIdsCache.size === boxIdsCache.size + connectorIdsCache.size,
    'all ids must be unique',
  );

  assertTrue(data.structure.extra.nextId > Math.max(...allIdsCache), 'next id needs to be bigger');

  // all connectors reference valid boxes
  assertTrue(
    data.structure.connectors.every(
      (c) => boxIdsCache.has(c.toBoxId) && boxIdsCache.has(c.fromBoxId),
    ),
    'some connectors reference invalid boxes',
  );

  // custom boxes must reference existing sketches
  const otherSketchesUUIDs = otherSketches.map((s) => s.uuid);
  data.structure.boxes
    .filter((b) => b.kind === 'custom')
    .forEach((customBox) => {
      assertTrue(
        otherSketchesUUIDs.includes(customBox.p.uuid),
        'custom box references invalid sketch',
      );
    });

  // connectors reference valid boxes and ports
  const inputsCache = new Set<string>();
  for (const connector of data.structure.connectors) {
    assertTrue(boxIdsCache.has(connector.toBoxId), 'connector should end at invalid box');
    assertTrue(boxIdsCache.has(connector.fromBoxId), 'connector should start at invalid box');

    assertTrue(
      !inputsCache.has(`${connector.toBoxId}-${connector.toPortId}`),
      'multiple connectors coming into the same input',
    );
    inputsCache.add(`${connector.toBoxId}-${connector.toPortId}`);

    // are the ports ok?
    // TODO: the number of wires must be correct: connector -> port
    // TODO:  from is an output, to is an input
    const fromBox = data.structure.boxes.find((b) => b.id === connector.fromBoxId)!;
    const toBox = data.structure.boxes.find((b) => b.id === connector.toBoxId)!;
    switch (fromBox.kind) {
      case 'output':
        assertTrue(false, 'connectors should not start from outputs');
        break;
      case 'input':
        assertTrue(connector.fromPortId === 0, 'Connector should start from port 0 for inputs');
        break;
      case 'not':
        assertTrue(connector.fromPortId === 1, 'Connector should start from port 1 for not gates');
        break;
      case 'split':
        assertTrue(
          connector.fromPortId >= 1 && connector.fromPortId < fromBox.p.fromNumWires + 1,
          `Connector should start from a valid port for split gates fromPortId:${connector.fromPortId}`,
        );
        break;
      case 'join':
        assertTrue(
          connector.fromPortId === fromBox.p.toNumWires,
          'Connector should start from valid port for join gates',
        );
        break;
      case 'and':
        assertTrue(connector.fromPortId === 2, 'Connector should start from port 2 for and gates');
        break;
      case 'custom':
        {
          const customBoxSketch = otherSketches.find((s) => s.uuid === fromBox.p.uuid)!;
          const outputs = customBoxSketch.structure.boxes.filter((b) => b.kind === 'output');
          const outputIds = outputs.map((b) => b.id);
          assertTrue(
            outputIds.includes(connector.fromPortId),
            'Connector should start from a valid output port for custom boxes',
          );
        }
        break;
      default:
        assertNever(fromBox);
    }

    switch (toBox.kind) {
      case 'input':
        assertTrue(false, 'connectors should not end at inputs');
        break;
      case 'output':
        assertTrue(connector.toPortId === 0, 'Connector should end at port 0 for outputs');
        break;

      case 'not':
        assertTrue(connector.toPortId === 0, 'Connector should end at port 0 for not gates');
        break;
      case 'and':
        assertTrue(
          [0, 1].includes(connector.toPortId),
          'Connector should end at port 0 or 1 for and gates',
        );
        break;
      case 'split':
        assertTrue(connector.toPortId === 0, 'Connector should end at valid port for split gates');
        break;
      case 'join':
        assertTrue(
          connector.toPortId >= 0 && connector.toPortId < toBox.p.toNumWires + 1,
          'Connector should end at a valid port for join gates',
        );
        break;
      case 'custom':
        {
          const customBoxSketch = otherSketches.find((s) => s.uuid === toBox.p.uuid)!;
          const inputs = customBoxSketch.structure.boxes.filter((b) => b.kind === 'input');
          const inputIds = inputs.map((b) => b.id);
          assertTrue(
            inputIds.includes(connector.toPortId),
            'Connector should end at a valid input port for custom boxes',
          );
        }
        break;
      default:
        assertNever(toBox);
    }
  }

  // TODO: all boxes must have info

  // TODO: connector info

  // TODO: input state (+ correct number of wires)

  // TODO: simulation + simulatino State matches the number of wires of ports and connectors

  // TODO: simulation extra

  return data;
}
