import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '0199e1c3-3001-74af-8070-c677061648c9',
  meta: {
    name: 'PLAYGROUND',
    description: '',
    isChip: true,
  },
  structure: {
    extra: { nextId: 20 },
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
          uuid: '019aad02-5606-74fb-b2f2-a7314bf4a827',
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
        kind: 'not',
        p: 0,
      },
      {
        id: 8,
        kind: 'and',
        p: 0,
      },
      {
        id: 9,
        kind: 'and',
        p: 0,
      },
      {
        id: 10,
        kind: 'custom',
        p: {
          uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
        },
      },
    ],
    connectors: [
      {
        id: 5,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 0,
        toBoxId: 4,
        toPortId: 2,
      },
      {
        id: 11,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 11,
        toBoxId: 6,
        toPortId: 0,
      },
      {
        id: 12,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 11,
        toBoxId: 8,
        toPortId: 0,
      },
      {
        id: 13,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 9,
        toPortId: 1,
      },
      {
        id: 14,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 9,
        toPortId: 0,
      },
      {
        id: 15,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 7,
        toPortId: 0,
      },
      {
        id: 16,
        p: {
          numWires: 1,
        },
        fromBoxId: 7,
        fromPortId: 1,
        toBoxId: 8,
        toPortId: 1,
      },
      {
        id: 17,
        p: {
          numWires: 1,
        },
        fromBoxId: 9,
        fromPortId: 2,
        toBoxId: 10,
        toPortId: 2,
      },
      {
        id: 18,
        p: {
          numWires: 1,
        },
        fromBoxId: 8,
        fromPortId: 2,
        toBoxId: 10,
        toPortId: 1,
      },
      {
        id: 19,
        p: {
          numWires: 1,
        },
        fromBoxId: 10,
        fromPortId: 4,
        toBoxId: 4,
        toPortId: 1,
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
          x: 460,
          y: 190,
        },
        label: 'Data',
      },
      {
        boxId: 2,
        pos: {
          x: 460,
          y: 290,
        },
        label: 'Store',
      },
      {
        boxId: 3,
        pos: {
          x: 460,
          y: 370,
        },
        label: 'Clock',
      },
      {
        boxId: 4,
        pos: {
          x: 1040,
          y: 260,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 1490,
          y: 280,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 620,
          y: 130,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 770,
          y: 50,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 770,
          y: 160,
        },
      },
      {
        boxId: 10,
        pos: {
          x: 920,
          y: 100,
        },
      },
    ],
    connectors: [
      {
        connectorId: 5,
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
      boxId: 2,
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 3,
      state: { kind: 1, value: [true] },
    },
  ],
  panAndZoom: {
    zoomFactor: 1,
    panX: 11,
    panY: -166,
  },
};
