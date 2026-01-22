import type { NumWires } from '@/app/v4/types/other';
import memoizeOne from 'memoize-one';
import memoize from 'memoize';
import type { SketchForStorage } from '@/app/v4/types/data';
import { getOrderedInputsAndOutputs } from '@/app/v4/data/getters/aggregate';

export type NumsNumWiresHack = 0 | 1 | 2 | 3;

export const coordsSplit = (() => {
  const width = 70;
  const padding = 20;
  const height4 = 4 * padding;
  const height8 = 8 * padding;
  return {
    width,
    '4': {
      height: height4,
      ports: {
        '0': { x: 0, y: height4 / 2 },
        '1': { x: width, y: 10 + 0 * padding },
        '2': { x: width, y: 10 + 1 * padding },
        '3': { x: width, y: 10 + 2 * padding },
        '4': { x: width, y: 10 + 3 * padding },
      },
    },
    '8': {
      height: height8,
      ports: {
        '0': { x: 0, y: height8 / 2 },
        '1': { x: width, y: 10 + 0 * padding },
        '2': { x: width, y: 10 + 1 * padding },
        '3': { x: width, y: 10 + 2 * padding },
        '4': { x: width, y: 10 + 3 * padding },
        '5': { x: width, y: 10 + 4 * padding },
        '6': { x: width, y: 10 + 5 * padding },
        '7': { x: width, y: 10 + 6 * padding },
        '8': { x: width, y: 10 + 7 * padding },
      },
    },
  };
})();
export const coordsJoin = (() => {
  const width = 70;
  const padding = 20;
  const height4 = 4 * padding;
  const height8 = 8 * padding;
  return {
    width,
    '4': {
      height: height4,
      ports: {
        '0': { x: 0, y: 10 + 0 * padding },
        '1': { x: 0, y: 10 + 1 * padding },
        '2': { x: 0, y: 10 + 2 * padding },
        '3': { x: 0, y: 10 + 3 * padding },
        '4': { x: width, y: height4 / 2 },
      },
    },
    '8': {
      height: height8,
      ports: {
        '0': { x: 0, y: 10 + 0 * padding },
        '1': { x: 0, y: 10 + 1 * padding },
        '2': { x: 0, y: 10 + 2 * padding },
        '3': { x: 0, y: 10 + 3 * padding },
        '4': { x: 0, y: 10 + 4 * padding },
        '5': { x: 0, y: 10 + 5 * padding },
        '6': { x: 0, y: 10 + 6 * padding },
        '7': { x: 0, y: 10 + 7 * padding },
        '8': { x: width, y: height8 / 2 },
      },
    },
  };
})();

export const coordsInput = (() => {
  const circleToCircleDist = 40;
  return { circleToCircleDist, ports: { '0': { x: circleToCircleDist, y: 0 } } };
})();
export const coordsOutput = (() => {
  const circleToCircleDist = 40;
  return { circleToCircleDist, ports: { '0': { x: 0, y: 0 } } };
})();

export const coordsAnd = (() => {
  const width = 60;
  const height = 40;
  return {
    width,
    height,
    ports: {
      '0': { x: 0, y: height / 4 },
      '1': { x: 0, y: (3 * height) / 4 },
      '2': { x: width, y: height / 2 },
    },
  };
})();

export const coordsNot = (() => {
  const width = 60;
  const height = 20;
  return {
    width,
    height,
    ports: {
      '0': { x: 0, y: height / 2 },
      '1': { x: width, y: height / 2 },
    },
  };
})();

export const getCustomCoords = memoizeOne((_currentUuid: string) => {
  return memoize((referencedSketch: SketchForStorage) => {
    const { inputs, outputs } = getOrderedInputsAndOutputs(referencedSketch);
    const width = referencedSketch.meta.name.length * 15;
    const height = Math.max(inputs.length, outputs.length, 1) * 20;

    const stepInputs = (height - 20) / (inputs.length - 1);
    const stepOutputs = (height - 20) / (outputs.length - 1);
    const ports: Record<number, { x: number; y: number }> = {};
    if (inputs.length === 1) {
      ports[inputs[0]!.id] = { x: 0, y: height / 2 };
    } else {
      for (let i = 0, len = inputs.length; i < len; i++) {
        const input = inputs[i]!;
        ports[input.id] = { x: 0, y: stepInputs * i + 10 };
      }
    }
    if (outputs.length === 1) {
      ports[outputs[0]!.id] = { x: width, y: height / 2 };
    } else {
      for (let i = 0, len = outputs.length; i < len; i++) {
        const output = outputs[i]!;
        ports[output.id] = { x: width, y: stepOutputs * i + 10 };
      }
    }
    return {
      width,
      height,
      ports,
    };
  });
});

export const connectorWidthMap: Record<NumWires, number> = {
  '1': 4,
  '4': 8,
  '8': 16,
};
export const connectorWireWidthMap: Record<NumWires, number> = {
  '1': 4,
  '4': 2,
  '8': 2,
};
