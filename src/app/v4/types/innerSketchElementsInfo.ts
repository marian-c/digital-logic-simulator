import type { StrictMapping } from '@/types/strict-mapping';
import type { ElementType } from '@/app/v4/types/innerSketchStructure';
export interface Position {
  x: number;
  y: number;
}
export interface BoxInfo {
  boxId: number;
  pos: Position;
  label?: string;
  hideLabel?: boolean;
  colorizeConnectors?: boolean;
  colors?: {
    main: string;
    on: string;
    off: string;
  };
}

export interface ConnectorInfo {
  connectorId: number;
  bias: { mid: number; start: number; end: number };
  label?: string;
  hideLabel?: boolean;
}

export type ElementsInfo = StrictMapping<
  ElementType,
  {
    boxes: BoxInfo[];
    connectors: ConnectorInfo[];
  }
>;
