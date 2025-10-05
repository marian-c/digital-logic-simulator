// npx tsx ./src/app/v3/data/generateStressSample.ts

import { generateEmptySketch } from './helpers';
import { v7 as uuidv7 } from 'uuid';
import * as fs from 'node:fs';
import { assertNever } from '@/helpers/basics';
import type { BoxElement } from '@/app/v3/types/innerSketchStructure';

function getRandomKind() {
  const items = ['and', 'not', 'input', 'output'] as const;
  return items[Math.floor(Math.random() * items.length)];
}

function generate(name: string, maxElements: number, maxConnectors: number, spread: number) {
  const sketch = generateEmptySketch({ name, uuid: uuidv7() });
  sketch.meta.isExample = true;
  for (let i = 0; i < maxElements; i++) {
    sketch.structure.main.boxElements.push({
      id: sketch.meta.nextId++,
      boxElementKind: getRandomKind(),
    });
    const limitX = Math.sqrt(maxElements);

    sketch.structure.main.boxElements.forEach((boxElement, index) => {
      const x = Math.floor(index / limitX) * spread;
      const y = Math.floor(index % limitX) * spread;
      sketch.positions.boxPositions.push({ boxId: boxElement.id, pos: { x, y } });
    });
  }

  const startBoxes = sketch.structure.main.boxElements.filter((b) => {
    switch (b.boxElementKind) {
      case 'and':
      case 'input':
      case 'not':
        return true;
      case 'output':
        return false;
      default:
        assertNever(b);
    }
  });
  let endBoxes = sketch.structure.main.boxElements.filter((b) => {
    switch (b.boxElementKind) {
      case 'and':
      case 'output':
      case 'not':
        return true;
      case 'input':
        return false;
      default:
        assertNever(b);
    }
  });

  function getRandomOutPortId(box: BoxElement) {
    switch (box.boxElementKind) {
      case 'and':
        return 2;
      case 'not':
        return 1;
      case 'input':
        return 0;
      case 'output':
        throw new Error('Output boxes have no output ports');
      default:
        assertNever(box);
    }
  }
  function getRandomInputPortId(box: BoxElement) {
    switch (box.boxElementKind) {
      case 'and':
        return Math.floor(Math.random() * 2);
      case 'not':
        return 0;
      case 'input':
        throw new Error('Input boxes have no input ports');
      case 'output':
        return 0;
      default:
        assertNever(box);
    }
  }
  for (let i = 0; i < maxConnectors; i++) {
    const startBox = startBoxes[Math.floor(Math.random() * startBoxes.length)];
    const endBox = endBoxes[Math.floor(Math.random() * endBoxes.length)];
    endBoxes = endBoxes.filter((b) => b !== endBox);
    sketch.structure.main.connectorElements.push({
      id: sketch.meta.nextId++,
      fromBoxId: startBox.id,
      fromPortId: getRandomOutPortId(startBox),
      toBoxId: endBox.id,
      toPortId: getRandomInputPortId(endBox),
    });
  }
  fs.writeFileSync(
    __dirname + '/samples/' + name + '.json',
    JSON.stringify(sketch, null, 2) + '\n',
    'utf-8',
  );
}

generate('stress_100_close', 100, 20, 60);
generate('stress_500_close', 400, 100, 60);
