import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
  meta: {
    name: 'XOR',
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
          uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
        },
      },
      {
        id: 2,
        kind: 'custom',
        p: {
          uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
        },
      },
      {
        id: 3,
        kind: 'and',
        p: 0,
      },
      {
        id: 6,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 8,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 9,
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
    ],
    connectors: [
      {
        id: 4,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 4,
        toBoxId: 3,
        toPortId: 0,
      },
      {
        id: 5,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 9,
        toBoxId: 3,
        toPortId: 1,
      },
      {
        id: 7,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 2,
        toBoxId: 6,
        toPortId: 0,
      },
      {
        id: 10,
        p: {
          numWires: 1,
        },
        fromBoxId: 8,
        fromPortId: 0,
        toBoxId: 1,
        toPortId: 1,
      },
      {
        id: 12,
        p: {
          numWires: 1,
        },
        fromBoxId: 8,
        fromPortId: 0,
        toBoxId: 2,
        toPortId: 4,
      },
      {
        id: 13,
        p: {
          numWires: 1,
        },
        fromBoxId: 9,
        fromPortId: 0,
        toBoxId: 1,
        toPortId: 2,
      },
      {
        id: 14,
        p: {
          numWires: 1,
        },
        fromBoxId: 9,
        fromPortId: 0,
        toBoxId: 2,
        toPortId: 6,
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
          x: 620,
          y: 130,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 620,
          y: 240,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 890,
          y: 190,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 1050,
          y: 210,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 400,
          y: 140,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 400,
          y: 270,
        },
      },
    ],
    connectors: [
      {
        connectorId: 4,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 5,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 7,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 10,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 12,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 13,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 14,
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
      boxId: 8,
      state: { kind: 1, value: [false] },
    },
    {
      boxId: 9,
      state: { kind: 1, value: [false] },
    },
  ],
  panAndZoom: {
    zoomFactor: 1,
    panX: 0,
    panY: 0,
  },
};
