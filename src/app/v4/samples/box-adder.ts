import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019a1295-bf4b-708e-a244-d666353ff74f',
  meta: {
    name: 'Adder',
    description: '',
    isExample: true,
    isChip: true,
  },
  structure: {
    extra: { nextId: 100 },
    boxes: [
      {
        id: 1,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 2,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 3,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 4,
        kind: 'custom',
        p: {
          uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
        },
      },
      {
        id: 5,
        kind: 'and',
        p: 0,
      },
      {
        id: 6,
        kind: 'custom',
        p: {
          uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
        },
      },
      {
        id: 7,
        kind: 'and',
        p: 0,
      },
      {
        id: 8,
        kind: 'custom',
        p: {
          uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
        },
      },
      {
        id: 9,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 10,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
    ],
    connectors: [
      {
        id: 11,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 4,
        toPortId: 8,
      },
      {
        id: 13,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 4,
        toPortId: 9,
      },
      {
        id: 15,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 5,
        toPortId: 1,
      },
      {
        id: 16,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 5,
        toPortId: 0,
      },
      {
        id: 17,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 6,
        toBoxId: 6,
        toPortId: 8,
      },
      {
        id: 18,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 0,
        toBoxId: 6,
        toPortId: 9,
      },
      {
        id: 19,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 6,
        toBoxId: 7,
        toPortId: 0,
      },
      {
        id: 20,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 0,
        toBoxId: 7,
        toPortId: 1,
      },
      {
        id: 21,
        p: {
          numWires: 1,
        },
        fromBoxId: 5,
        fromPortId: 2,
        toBoxId: 8,
        toPortId: 2,
      },
      {
        id: 22,
        p: {
          numWires: 1,
        },
        fromBoxId: 7,
        fromPortId: 2,
        toBoxId: 8,
        toPortId: 1,
      },
      {
        id: 23,
        p: {
          numWires: 1,
        },
        fromBoxId: 6,
        fromPortId: 6,
        toBoxId: 9,
        toPortId: 0,
      },
      {
        id: 24,
        p: {
          numWires: 1,
        },
        fromBoxId: 8,
        fromPortId: 4,
        toBoxId: 10,
        toPortId: 0,
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
          x: 380,
          y: 90,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 380,
          y: 130,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 380,
          y: 170,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 530,
          y: 20,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 530,
          y: 200,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 840,
          y: 30,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 720,
          y: 140,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 940,
          y: 150,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 1160,
          y: 120,
        },
      },
      {
        boxId: 10,
        pos: {
          x: 1160,
          y: 170,
        },
      },
    ],
    connectors: [
      {
        connectorId: 11,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 13,
        bias: {
          mid: -21,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 15,
        bias: {
          mid: -19,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 16,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 17,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 18,
        bias: {
          mid: 25,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 19,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 20,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 21,
        bias: {
          mid: -61,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 22,
        bias: {
          mid: 0,
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
          mid: -5,
          start: 0,
          end: 0,
        },
      },
    ],
  },
  inputs: [
    {
      boxId: 1,
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 2,
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 3,
      state: { kind: 1, value: [false] },
    },
  ],
  panAndZoom: {
    zoomFactor: 1,
    panX: -133,
    panY: -125,
  },
};
