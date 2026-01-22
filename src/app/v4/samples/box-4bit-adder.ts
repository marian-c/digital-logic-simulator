import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019a14ab-d0a8-77ef-bf6a-75dc38a57653',
  meta: {
    name: '4bit adder',
    description: '',
    isExample: true,
    isChip: true,
  },
  structure: {
    extra: { nextId: 100 },
    boxes: [
      {
        id: 1,
        kind: 'custom',
        p: {
          uuid: '019a1295-bf4b-708e-a244-d666353ff74f',
        },
      },
      {
        id: 2,
        kind: 'custom',
        p: {
          uuid: '019a1295-bf4b-708e-a244-d666353ff74f',
        },
      },
      {
        id: 3,
        kind: 'custom',
        p: {
          uuid: '019a1295-bf4b-708e-a244-d666353ff74f',
        },
      },
      {
        id: 4,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 5,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 6,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 7,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 8,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 9,
        kind: 'custom',
        p: {
          uuid: '019a1295-bf4b-708e-a244-d666353ff74f',
        },
      },
      {
        id: 14,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 15,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 16,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 17,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 18,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 19,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 20,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 21,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 22,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
    ],
    connectors: [
      {
        id: 10,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 9,
        toBoxId: 4,
        toPortId: 0,
      },
      {
        id: 11,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 9,
        toBoxId: 5,
        toPortId: 0,
      },
      {
        id: 12,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 9,
        toBoxId: 6,
        toPortId: 0,
      },
      {
        id: 13,
        p: {
          numWires: 1,
        },
        fromBoxId: 9,
        fromPortId: 9,
        toBoxId: 7,
        toPortId: 0,
      },
      {
        id: 23,
        p: {
          numWires: 1,
        },
        fromBoxId: 22,
        fromPortId: 0,
        toBoxId: 9,
        toPortId: 3,
      },
      {
        id: 24,
        p: {
          numWires: 1,
        },
        fromBoxId: 9,
        fromPortId: 10,
        toBoxId: 1,
        toPortId: 3,
      },
      {
        id: 25,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 10,
        toBoxId: 2,
        toPortId: 3,
      },
      {
        id: 26,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 10,
        toBoxId: 3,
        toPortId: 3,
      },
      {
        id: 27,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 10,
        toBoxId: 8,
        toPortId: 0,
      },
      {
        id: 28,
        p: {
          numWires: 1,
        },
        fromBoxId: 14,
        fromPortId: 0,
        toBoxId: 3,
        toPortId: 1,
      },
      {
        id: 29,
        p: {
          numWires: 1,
        },
        fromBoxId: 15,
        fromPortId: 0,
        toBoxId: 2,
        toPortId: 1,
      },
      {
        id: 30,
        p: {
          numWires: 1,
        },
        fromBoxId: 16,
        fromPortId: 0,
        toBoxId: 1,
        toPortId: 1,
      },
      {
        id: 31,
        p: {
          numWires: 1,
        },
        fromBoxId: 17,
        fromPortId: 0,
        toBoxId: 9,
        toPortId: 1,
      },
      {
        id: 32,
        p: {
          numWires: 1,
        },
        fromBoxId: 18,
        fromPortId: 0,
        toBoxId: 3,
        toPortId: 2,
      },
      {
        id: 33,
        p: {
          numWires: 1,
        },
        fromBoxId: 19,
        fromPortId: 0,
        toBoxId: 2,
        toPortId: 2,
      },
      {
        id: 34,
        p: {
          numWires: 1,
        },
        fromBoxId: 20,
        fromPortId: 0,
        toBoxId: 1,
        toPortId: 2,
      },
      {
        id: 35,
        p: {
          numWires: 1,
        },
        fromBoxId: 21,
        fromPortId: 0,
        toBoxId: 9,
        toPortId: 2,
      },
    ],
  },
  elementsInfo: {
    boxes: [
      {
        boxId: 0,
        pos: {
          x: 0,
          y: 0,
        },
      },
      {
        boxId: 1,
        pos: {
          x: 440,
          y: 190,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 570,
          y: 110,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 690,
          y: 40,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 920,
          y: 50,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 920,
          y: 90,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 920,
          y: 130,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 920,
          y: 170,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 920,
          y: 240,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 340,
          y: 270,
        },
      },
      {
        boxId: 14,
        pos: {
          x: 150,
          y: 30,
        },
      },
      {
        boxId: 15,
        pos: {
          x: 150,
          y: 60,
        },
      },
      {
        boxId: 16,
        pos: {
          x: 150,
          y: 90,
        },
      },
      {
        boxId: 17,
        pos: {
          x: 150,
          y: 120,
        },
      },
      {
        boxId: 18,
        pos: {
          x: 150,
          y: 160,
        },
      },
      {
        boxId: 19,
        pos: {
          x: 150,
          y: 190,
        },
      },
      {
        boxId: 20,
        pos: {
          x: 150,
          y: 220,
        },
      },
      {
        boxId: 21,
        pos: {
          x: 150,
          y: 250,
        },
      },
      {
        boxId: 22,
        pos: {
          x: 150,
          y: 300,
        },
      },
    ],
    connectors: [
      {
        connectorId: 10,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 11,
        bias: {
          mid: -44,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 12,
        bias: {
          mid: -116,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 13,
        bias: {
          mid: -190,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 23,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 24,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 25,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 26,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 27,
        bias: {
          mid: 49,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 28,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 29,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 30,
        bias: {
          mid: -36,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 31,
        bias: {
          mid: -54,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 32,
        bias: {
          mid: -10,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 33,
        bias: {
          mid: -90,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 34,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 35,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
    ],
  },
  inputs: [
    {
      boxId: 14,
      state: { kind: 1, value: [false] },
    },
    {
      boxId: 15,
      state: { kind: 1, value: [false] },
    },
    {
      boxId: 16,
      state: { kind: 1, value: [false] },
    },
    {
      boxId: 17,
      state: { kind: 1, value: [false] },
    },
    {
      boxId: 18,
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 19,
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 20,
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 21,
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 22,
      state: { kind: 1, value: [true] },
    },
  ],
  panAndZoom: {
    zoomFactor: 1,
    panX: -107,
    panY: -54,
  },
};
