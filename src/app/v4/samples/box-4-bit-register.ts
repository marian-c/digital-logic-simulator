import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019aac31-6b04-7759-b69c-ef4c3024210c',
  meta: {
    name: '4bit register',
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
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 5,
        kind: 'input',
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
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 10,
        kind: 'custom',
        p: {
          uuid: '019aa855-8e49-71e9-8849-0a546951199e',
        },
      },
      {
        id: 11,
        kind: 'custom',
        p: {
          uuid: '019aa855-8e49-71e9-8849-0a546951199e',
        },
      },
      {
        id: 12,
        kind: 'custom',
        p: {
          uuid: '019aa855-8e49-71e9-8849-0a546951199e',
        },
      },
      {
        id: 13,
        kind: 'custom',
        p: {
          uuid: '019aa855-8e49-71e9-8849-0a546951199e',
        },
      },
    ],
    connectors: [
      {
        id: 14,
        p: {
          numWires: 1,
        },
        fromBoxId: 10,
        fromPortId: 11,
        toBoxId: 6,
        toPortId: 0,
      },
      {
        id: 15,
        p: {
          numWires: 1,
        },
        fromBoxId: 11,
        fromPortId: 11,
        toBoxId: 7,
        toPortId: 0,
      },
      {
        id: 16,
        p: {
          numWires: 1,
        },
        fromBoxId: 12,
        fromPortId: 11,
        toBoxId: 8,
        toPortId: 0,
      },
      {
        id: 17,
        p: {
          numWires: 1,
        },
        fromBoxId: 13,
        fromPortId: 11,
        toBoxId: 9,
        toPortId: 0,
      },
      {
        id: 18,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 10,
        toPortId: 1,
      },
      {
        id: 19,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 11,
        toPortId: 1,
      },
      {
        id: 20,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 0,
        toBoxId: 12,
        toPortId: 1,
      },
      {
        id: 21,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 0,
        toBoxId: 13,
        toPortId: 1,
      },
      {
        id: 22,
        p: {
          numWires: 1,
        },
        fromBoxId: 5,
        fromPortId: 0,
        toBoxId: 13,
        toPortId: 2,
      },
      {
        id: 23,
        p: {
          numWires: 1,
        },
        fromBoxId: 5,
        fromPortId: 0,
        toBoxId: 12,
        toPortId: 2,
      },
      {
        id: 24,
        p: {
          numWires: 1,
        },
        fromBoxId: 5,
        fromPortId: 0,
        toBoxId: 11,
        toPortId: 2,
      },
      {
        id: 25,
        p: {
          numWires: 1,
        },
        fromBoxId: 5,
        fromPortId: 0,
        toBoxId: 10,
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
          x: 280,
          y: 190,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 280,
          y: 260,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 280,
          y: 330,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 280,
          y: 400,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 280,
          y: 470,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 990,
          y: 270,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 990,
          y: 310,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 990,
          y: 350,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 990,
          y: 390,
        },
      },
      {
        boxId: 10,
        pos: {
          x: 690,
          y: 180,
        },
      },
      {
        boxId: 11,
        pos: {
          x: 690,
          y: 250,
        },
      },
      {
        boxId: 12,
        pos: {
          x: 690,
          y: 320,
        },
      },
      {
        boxId: 13,
        pos: {
          x: 690,
          y: 390,
        },
      },
    ],
    connectors: [
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
          mid: 0,
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
    ],
  },
  inputs: [
    {
      boxId: 1,
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 2,
      state: { kind: 1, value: [false] },
    },
    {
      boxId: 3,
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 4,
      state: { kind: 1, value: [false] },
    },
    {
      boxId: 5,
      state: { kind: 1, value: [false] },
    },
  ],
  panAndZoom: {
    zoomFactor: 1,
    panX: -22,
    panY: 27,
  },
};
