import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019aad02-5606-74fb-b2f2-a7314bf4a827',
  meta: {
    name: 'D Flip-flop',
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
        kind: 'custom',
        p: {
          uuid: '019aa855-8e49-71e9-8849-0a546951199e',
        },
      },
      {
        id: 4,
        kind: 'custom',
        p: {
          uuid: '019aa855-8e49-71e9-8849-0a546951199e',
        },
      },
      {
        id: 5,
        kind: 'not',
        p: 0,
      },
      {
        id: 11,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
    ],
    connectors: [
      {
        id: 6,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 3,
        toPortId: 1,
      },
      {
        id: 7,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 5,
        toPortId: 0,
      },
      {
        id: 8,
        p: {
          numWires: 1,
        },
        fromBoxId: 5,
        fromPortId: 1,
        toBoxId: 3,
        toPortId: 2,
      },
      {
        id: 9,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 4,
        toPortId: 2,
      },
      {
        id: 10,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 11,
        toBoxId: 4,
        toPortId: 1,
      },
      {
        id: 12,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 11,
        toBoxId: 11,
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
          x: 550,
          y: 260,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 550,
          y: 370,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 780,
          y: 220,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 1060,
          y: 340,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 680,
          y: 280,
        },
      },
      {
        boxId: 11,
        pos: {
          x: 1360,
          y: 360,
        },
      },
    ],
    connectors: [
      {
        connectorId: 6,
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
        connectorId: 8,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
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
        connectorId: 12,
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
      state: { kind: 1, value: [false] },
    },
  ],
  panAndZoom: {
    zoomFactor: 1,
    panX: 0,
    panY: 0,
  },
};
