export type LayoutValue = {
  x: number;
  y: number;
  width: number;
  height: number;
  left: number;
  top: number;
};

export type LayoutEvent<T extends HTMLElement = HTMLElement> = {
  nativeEvent: {
    layout: LayoutValue;
    target: T;
  };
  timeStamp: number;
};

export type ReactLayoutHandler<T extends HTMLElement = HTMLElement> = (
  layoutEvent: LayoutEvent<T>,
) => void;
