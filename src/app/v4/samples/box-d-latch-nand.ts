import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019aa85d-66ca-702e-987d-fe61455f4c48',
  meta: {
    name: 'D Latch (nand)',
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
        kind: 'output',
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
          uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
        },
      },
      {
        id: 5,
        kind: 'custom',
        p: {
          uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
        },
      },
      {
        id: 6,
        kind: 'custom',
        p: {
          uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
        },
      },
      {
        id: 7,
        kind: 'custom',
        p: {
          uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
        },
      },
      {
        id: 8,
        kind: 'custom',
        p: {
          uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
        },
      },
    ],
    connectors: [
      {
        id: 9,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 8,
        toPortId: 4,
      },
      {
        id: 10,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 8,
        toPortId: 6,
      },
      {
        id: 11,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 6,
        toPortId: 4,
      },
      {
        id: 12,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 9,
        toBoxId: 2,
        toPortId: 0,
      },
      {
        id: 13,
        p: {
          numWires: 1,
        },
        fromBoxId: 5,
        fromPortId: 9,
        toBoxId: 4,
        toPortId: 6,
      },
      {
        id: 14,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 9,
        toBoxId: 5,
        toPortId: 4,
      },
      {
        id: 15,
        p: {
          numWires: 1,
        },
        fromBoxId: 7,
        fromPortId: 9,
        toBoxId: 5,
        toPortId: 6,
      },
      {
        id: 16,
        p: {
          numWires: 1,
        },
        fromBoxId: 8,
        fromPortId: 9,
        toBoxId: 7,
        toPortId: 6,
      },
      {
        id: 17,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 0,
        toBoxId: 6,
        toPortId: 6,
      },
      {
        id: 18,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 0,
        toBoxId: 7,
        toPortId: 4,
      },
      {
        id: 19,
        p: {
          numWires: 1,
        },
        fromBoxId: 6,
        fromPortId: 9,
        toBoxId: 4,
        toPortId: 4,
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
          x: 520,
          y: 210,
        },
        label: 'Data',
      },
      {
        boxId: 2,
        pos: {
          x: 1270,
          y: 310,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 550,
          y: 340,
        },
        label: 'Store',
      },
      {
        boxId: 4,
        pos: {
          x: 1000,
          y: 200,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 1100,
          y: 390,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 810,
          y: 160,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 850,
          y: 370,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 700,
          y: 420,
        },
      },
    ],
    connectors: [
      {
        connectorId: 9,
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
        connectorId: 11,
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
      {
        connectorId: 15,
        bias: {
          mid: 0,
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
          mid: 0,
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
    ],
  },
  inputs: [
    {
      boxId: 1,
      state: { kind: 1, value: [false] },
    },
    {
      boxId: 3,
      state: { kind: 1, value: [false] },
    },
  ],
  panAndZoom: {
    zoomFactor: 1,
    panX: 0,
    panY: 0,
  },
};
