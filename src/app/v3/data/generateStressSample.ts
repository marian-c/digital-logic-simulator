// npx tsx ./src/app/v3/data/generateStressSample.ts

import { generateEmptySketch } from './helpers';
import { v7 as uuidv7 } from 'uuid';
import * as fs from 'node:fs';

function getRandomKind() {
  const items = ['and', 'not', 'input', 'output'] as const;
  return items[Math.floor(Math.random() * items.length)];
}

function generate(name: string, maxElements: number, spread: number) {
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
  fs.writeFileSync(
    __dirname + '/samples/' + name + '.json',
    JSON.stringify(sketch, null, 2) + '\n',
    'utf-8',
  );
}

generate('stress_100_close', 100, 60);
generate('stress_500_close', 500, 60);
