import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019a14c8-e0bb-775a-b2d8-632d15517a0b',
  meta: {
    name: 'ALU',
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
        kind: 'input',
        p: {
          numWires: 1,
        },
      },
      {
        id: 7,
        kind: 'input',
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
      {
        id: 10,
        kind: 'custom',
        p: {
          uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
        },
      },
      {
        id: 11,
        kind: 'custom',
        p: {
          uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
        },
      },
      {
        id: 12,
        kind: 'custom',
        p: {
          uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
        },
      },
      {
        id: 13,
        kind: 'custom',
        p: {
          uuid: '019a14ab-d0a8-77ef-bf6a-75dc38a57653',
        },
      },
      {
        id: 14,
        kind: 'custom',
        p: {
          uuid: '019a1285-2ce5-724b-a41c-f344c23cc8be',
        },
      },
      {
        id: 32,
        kind: 'not',
        p: 0,
      },
      {
        id: 33,
        kind: 'not',
        p: 0,
      },
      {
        id: 34,
        kind: 'not',
        p: 0,
      },
      {
        id: 35,
        kind: 'not',
        p: 0,
      },
      {
        id: 36,
        kind: 'and',
        p: 0,
      },
      {
        id: 37,
        kind: 'and',
        p: 0,
      },
      {
        id: 38,
        kind: 'and',
        p: 0,
      },
      {
        id: 63,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 64,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 65,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 66,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 67,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 68,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
      {
        id: 69,
        kind: 'output',
        p: {
          numWires: 1,
        },
      },
    ],
    connectors: [
      {
        id: 15,
        p: {
          numWires: 1,
        },
        fromBoxId: 5,
        fromPortId: 0,
        toBoxId: 10,
        toPortId: 8,
      },
      {
        id: 16,
        p: {
          numWires: 1,
        },
        fromBoxId: 6,
        fromPortId: 0,
        toBoxId: 11,
        toPortId: 8,
      },
      {
        id: 17,
        p: {
          numWires: 1,
        },
        fromBoxId: 7,
        fromPortId: 0,
        toBoxId: 12,
        toPortId: 8,
      },
      {
        id: 18,
        p: {
          numWires: 1,
        },
        fromBoxId: 8,
        fromPortId: 0,
        toBoxId: 14,
        toPortId: 8,
      },
      {
        id: 19,
        p: {
          numWires: 1,
        },
        fromBoxId: 9,
        fromPortId: 0,
        toBoxId: 10,
        toPortId: 9,
      },
      {
        id: 20,
        p: {
          numWires: 1,
        },
        fromBoxId: 9,
        fromPortId: 0,
        toBoxId: 11,
        toPortId: 9,
      },
      {
        id: 21,
        p: {
          numWires: 1,
        },
        fromBoxId: 9,
        fromPortId: 0,
        toBoxId: 12,
        toPortId: 9,
      },
      {
        id: 22,
        p: {
          numWires: 1,
        },
        fromBoxId: 9,
        fromPortId: 0,
        toBoxId: 14,
        toPortId: 9,
      },
      {
        id: 23,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 13,
        toPortId: 14,
      },
      {
        id: 24,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 13,
        toPortId: 15,
      },
      {
        id: 25,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 0,
        toBoxId: 13,
        toPortId: 16,
      },
      {
        id: 26,
        p: {
          numWires: 1,
        },
        fromBoxId: 4,
        fromPortId: 0,
        toBoxId: 13,
        toPortId: 17,
      },
      {
        id: 27,
        p: {
          numWires: 1,
        },
        fromBoxId: 10,
        fromPortId: 6,
        toBoxId: 13,
        toPortId: 18,
      },
      {
        id: 28,
        p: {
          numWires: 1,
        },
        fromBoxId: 11,
        fromPortId: 6,
        toBoxId: 13,
        toPortId: 19,
      },
      {
        id: 29,
        p: {
          numWires: 1,
        },
        fromBoxId: 12,
        fromPortId: 6,
        toBoxId: 13,
        toPortId: 20,
      },
      {
        id: 30,
        p: {
          numWires: 1,
        },
        fromBoxId: 14,
        fromPortId: 6,
        toBoxId: 13,
        toPortId: 21,
      },
      {
        id: 31,
        p: {
          numWires: 1,
        },
        fromBoxId: 9,
        fromPortId: 0,
        toBoxId: 13,
        toPortId: 22,
      },
      {
        id: 39,
        p: {
          numWires: 1,
        },
        fromBoxId: 13,
        fromPortId: 4,
        toBoxId: 32,
        toPortId: 0,
      },
      {
        id: 40,
        p: {
          numWires: 1,
        },
        fromBoxId: 13,
        fromPortId: 5,
        toBoxId: 33,
        toPortId: 0,
      },
      {
        id: 41,
        p: {
          numWires: 1,
        },
        fromBoxId: 13,
        fromPortId: 6,
        toBoxId: 34,
        toPortId: 0,
      },
      {
        id: 42,
        p: {
          numWires: 1,
        },
        fromBoxId: 13,
        fromPortId: 7,
        toBoxId: 35,
        toPortId: 0,
      },
      {
        id: 43,
        p: {
          numWires: 1,
        },
        fromBoxId: 32,
        fromPortId: 1,
        toBoxId: 36,
        toPortId: 0,
      },
      {
        id: 44,
        p: {
          numWires: 1,
        },
        fromBoxId: 33,
        fromPortId: 1,
        toBoxId: 36,
        toPortId: 1,
      },
      {
        id: 45,
        p: {
          numWires: 1,
        },
        fromBoxId: 34,
        fromPortId: 1,
        toBoxId: 37,
        toPortId: 1,
      },
      {
        id: 46,
        p: {
          numWires: 1,
        },
        fromBoxId: 36,
        fromPortId: 2,
        toBoxId: 37,
        toPortId: 0,
      },
      {
        id: 47,
        p: {
          numWires: 1,
        },
        fromBoxId: 35,
        fromPortId: 1,
        toBoxId: 38,
        toPortId: 1,
      },
      {
        id: 48,
        p: {
          numWires: 1,
        },
        fromBoxId: 37,
        fromPortId: 2,
        toBoxId: 38,
        toPortId: 0,
      },
      {
        id: 70,
        p: {
          numWires: 1,
        },
        fromBoxId: 38,
        fromPortId: 2,
        toBoxId: 69,
        toPortId: 0,
      },
      {
        id: 71,
        p: {
          numWires: 1,
        },
        fromBoxId: 13,
        fromPortId: 4,
        toBoxId: 68,
        toPortId: 0,
      },
      {
        id: 72,
        p: {
          numWires: 1,
        },
        fromBoxId: 13,
        fromPortId: 8,
        toBoxId: 67,
        toPortId: 0,
      },
      {
        id: 73,
        p: {
          numWires: 1,
        },
        fromBoxId: 13,
        fromPortId: 7,
        toBoxId: 66,
        toPortId: 0,
      },
      {
        id: 74,
        p: {
          numWires: 1,
        },
        fromBoxId: 13,
        fromPortId: 6,
        toBoxId: 65,
        toPortId: 0,
      },
      {
        id: 75,
        p: {
          numWires: 1,
        },
        fromBoxId: 13,
        fromPortId: 5,
        toBoxId: 64,
        toPortId: 0,
      },
      {
        id: 76,
        p: {
          numWires: 1,
        },
        fromBoxId: 13,
        fromPortId: 4,
        toBoxId: 63,
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
          x: 250,
          y: 30,
        },
      },
      {
        boxId: 2,
        pos: {
          x: 250,
          y: 60,
        },
      },
      {
        boxId: 3,
        pos: {
          x: 250,
          y: 90,
        },
      },
      {
        boxId: 4,
        pos: {
          x: 250,
          y: 120,
        },
      },
      {
        boxId: 5,
        pos: {
          x: 250,
          y: 170,
        },
      },
      {
        boxId: 6,
        pos: {
          x: 250,
          y: 220,
        },
      },
      {
        boxId: 7,
        pos: {
          x: 250,
          y: 270,
        },
      },
      {
        boxId: 8,
        pos: {
          x: 250,
          y: 330,
        },
      },
      {
        boxId: 9,
        pos: {
          x: 250,
          y: 380,
        },
      },
      {
        boxId: 10,
        pos: {
          x: 440,
          y: 160,
        },
      },
      {
        boxId: 11,
        pos: {
          x: 440,
          y: 210,
        },
      },
      {
        boxId: 12,
        pos: {
          x: 440,
          y: 260,
        },
      },
      {
        boxId: 13,
        pos: {
          x: 680,
          y: 70,
        },
      },
      {
        boxId: 14,
        pos: {
          x: 440,
          y: 320,
        },
      },
      {
        boxId: 32,
        pos: {
          x: 970,
          y: 280,
        },
      },
      {
        boxId: 33,
        pos: {
          x: 970,
          y: 310,
        },
      },
      {
        boxId: 34,
        pos: {
          x: 970,
          y: 340,
        },
      },
      {
        boxId: 35,
        pos: {
          x: 970,
          y: 370,
        },
      },
      {
        boxId: 36,
        pos: {
          x: 1100,
          y: 260,
        },
      },
      {
        boxId: 37,
        pos: {
          x: 1200,
          y: 300,
        },
      },
      {
        boxId: 38,
        pos: {
          x: 1270,
          y: 350,
        },
      },
      {
        boxId: 63,
        pos: {
          x: 1530,
          y: 80,
        },
      },
      {
        boxId: 64,
        pos: {
          x: 1530,
          y: 120,
        },
      },
      {
        boxId: 65,
        pos: {
          x: 1530,
          y: 160,
        },
      },
      {
        boxId: 66,
        pos: {
          x: 1530,
          y: 200,
        },
      },
      {
        boxId: 67,
        pos: {
          x: 1530,
          y: 240,
        },
      },
      {
        boxId: 68,
        pos: {
          x: 1530,
          y: 270,
        },
      },
      {
        boxId: 69,
        pos: {
          x: 1530,
          y: 300,
        },
      },
    ],
    connectors: [
      {
        connectorId: 15,
        bias: {
          mid: 40,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 16,
        bias: {
          mid: 26,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 17,
        bias: {
          mid: 20,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 18,
        bias: {
          mid: 20,
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
          mid: -20,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 28,
        bias: {
          mid: -30,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 29,
        bias: {
          mid: -40,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 30,
        bias: {
          mid: -50,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 31,
        bias: {
          mid: -160,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 39,
        bias: {
          mid: -15,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 40,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 41,
        bias: {
          mid: 15,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 42,
        bias: {
          mid: 31,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 43,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 44,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 45,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 46,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 47,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 48,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 70,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 71,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 72,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 73,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 74,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 75,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
      },
      {
        connectorId: 76,
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
      state: { kind: 1, value: [true] },
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
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 6,
      state: { kind: 1, value: [true] },
    },
    {
      boxId: 7,
      state: { kind: 1, value: [false] },
    },
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
    zoomFactor: 0.8430634527156756,
    panX: 284.6832317948054,
    panY: -179.69577891178005,
  },
};
