import type { SketchForStorageWithPanAndZoom } from '@/app/v4/types/data';

export const sketch: SketchForStorageWithPanAndZoom = {
  uuid: '019a1267-ef5e-7321-8341-578d3a0d66be',
  meta: {
    name: 'OR',
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
          uuid: '0199e1c4-ff16-710b-869b-88485a93a83e',
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
        id: 6,
        kind: 'not',
        p: 0,
      },
      {
        id: 7,
        kind: 'not',
        p: 0,
      },
    ],
    connectors: [
      {
        id: 5,
        p: {
          numWires: 1,
        },
        fromBoxId: 3,
        fromPortId: 9,
        toBoxId: 4,
        toPortId: 0,
      },
      {
        id: 8,
        p: {
          numWires: 1,
        },
        fromBoxId: 7,
        fromPortId: 1,
        toBoxId: 3,
        toPortId: 6,
      },
      {
        id: 9,
        p: {
          numWires: 1,
        },
        fromBoxId: 6,
        fromPortId: 1,
        toBoxId: 3,
        toPortId: 4,
      },
      {
        id: 10,
        p: {
          numWires: 1,
        },
        fromBoxId: 1,
        fromPortId: 0,
        toBoxId: 6,
        toPortId: 0,
      },
      {
        id: 11,
        p: {
          numWires: 1,
        },
        fromBoxId: 2,
        fromPortId: 0,
        toBoxId: 7,
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
          x: 330,
          y: 110,
        },
        label: 'InputA',
      },
      {
        boxId: 2,
        pos: {
          x: 330,
          y: 170,
        },
        label: 'InputB',
      },
      {
        boxId: 3,
        pos: {
          x: 620,
          y: 120,
        },
        label: 'NAND',
      },
      {
        boxId: 4,
        pos: {
          x: 880,
          y: 140,
        },
        label: 'Output',
      },
      {
        boxId: 6,
        pos: {
          x: 460,
          y: 60,
        },
        label: 'NotA',
      },
      {
        boxId: 7,
        pos: {
          x: 460,
          y: 180,
        },
        label: 'NotB',
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
        label: 'Nand->Output',
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
        label: 'InputA->NotA',
      },
      {
        connectorId: 11,
        bias: {
          mid: 0,
          start: 0,
          end: 0,
        },
        label: 'InputB->NotB',
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
    panX: -208,
    panY: -93,
  },
};
