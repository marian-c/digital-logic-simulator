'use client';

import React from 'react';
import {
  defaultHeight,
  defaultWidth,
  gridSize,
  inputLineWidth,
  inputMainCircleRadius,
  outputLineColor,
  outputLineHeight,
  outputLineWidth,
  outputMainCircleRadius,
  notGateColor,
  notGateHeight,
  notGateWidth,
  plainConnectorExtensionMin,
  connectorCircleRadius,
  outputLinePositionAdjustment,
  inputCircleToCircleDist,
} from '@/app/_page/constants';
import { getSample, type Sketch } from '@/app/_page/types';
import { assertNever } from '@/helpers/basics';
import roundPathCorners from '@/app/_page/rounding';
import { simulate } from '@/app/_page/simulation';

type UIElement = 'scrollbarH' | 'scrollbarV';

type State = {
  activeBoxId: number;
  lastActiveBoxId: number;
  activeConnectorStartBoxId: number; // TODO: index of point
  activeConnectorEndBoxId: number; // TODO: index of point

  focusedElementId: number;

  activePosX: number; // not-snapped coordinates
  activePosY: number; // not-snapped coordinates
  mouseDownX: number; // to calculate mouse move delta
  mouseDownY: number; // to calculate mouse move delta
  zoomFactor: number;

  // To calculate the scroll
  focusedUIElement: UIElement | null;
  previousCenterX: number;
  previousCenterY: number;
  centerX: number;
  centerY: number;
  mouseScrollDownX: number;
  mouseScrollDownY: number;
};

const TOP_LEFT_LIMIT_X = -0.5;
const TOP_LEFT_LIMIT_Y = -0.5;
const BOTTOM_RIGHT_LIMIT_X = -500;
const BOTTOM_RIGHT_LIMIT_Y = -500;

const SCROLLBAR_LENGTH = 40;
const SCROLLBAR_WIDTH = 20;

const limitCenterX = (value: number) =>
  Math.max(Math.min(value, TOP_LEFT_LIMIT_X), BOTTOM_RIGHT_LIMIT_X);

const limitCenterY = (value: number) =>
  Math.max(Math.min(value, TOP_LEFT_LIMIT_Y), BOTTOM_RIGHT_LIMIT_Y);

export default function Home() {
  // TODO: (!!!) everything should use the second form of setState (!!!)

  const [data, _setData] = React.useState<Sketch>(() => {
    const sample = getSample();
    const simulated = simulate(sample.theBox);
    // XXX: mutates
    sample.theBox = simulated;
    // XXX: what about pre-rendering
    window.__sketch__ = sample;
    return sample;
  });

  const setData = React.useCallback(
    (newData: Sketch) => {
      // XXX: mutates
      newData.theBox = simulate(newData.theBox);
      window.__sketch__ = newData;
      _setData(newData);
    },
    [_setData],
  );

  const [state, setState] = React.useState<State>({
    activeBoxId: 0,
    lastActiveBoxId: 0,
    activeConnectorStartBoxId: 0,
    activeConnectorEndBoxId: 0,
    focusedElementId: 0,
    activePosX: 0,
    activePosY: 0,
    mouseDownX: 0,
    mouseDownY: 0,
    zoomFactor: 1,
    focusedUIElement: null,
    previousCenterX: TOP_LEFT_LIMIT_X,
    previousCenterY: TOP_LEFT_LIMIT_Y,
    centerX: TOP_LEFT_LIMIT_X,
    centerY: TOP_LEFT_LIMIT_Y,
    mouseScrollDownX: 0,
    mouseScrollDownY: 0,
  });

  const refHasDragged = React.useRef(false);
  const refIsDraggingContainer = React.useRef(false);

  const {
    activeConnectorStartBoxId,
    activeConnectorEndBoxId,
    centerX: backgroundPositionX,
    centerY: backgroundPositionY,
  } = state;

  const getMousePosition = React.useCallback(
    (event: React.MouseEvent) => {
      return [
        state.activePosX + (event.clientX - state.mouseDownX) / state.zoomFactor,
        state.activePosY + (event.clientY - state.mouseDownY) / state.zoomFactor,
      ];
    },
    [state.activePosX, state.activePosY, state.mouseDownX, state.mouseDownY, state.zoomFactor],
  );

  const onDocumentMouseUp = React.useCallback(() => {
    setTimeout(() => {
      // dragging out activate things like inputs without the setTimeout
      refHasDragged.current = false;
    });

    if (activeConnectorEndBoxId) {
      data.theBox.connectorElements.push({
        id: data.nextId++,
        elementKind: 'connector',
        connectorKind: 'plain',
        state: false,
        startElementId: activeConnectorStartBoxId,
        endElementId: activeConnectorEndBoxId,
        startElementOutputId: 0,
        endElementInputId: 0,
      });
      setData({ ...data });
    }

    setState((oldState): State => {
      return {
        ...oldState,
        activeBoxId: 0,
        activeConnectorStartBoxId: 0,
        activeConnectorEndBoxId: 0,
        focusedUIElement: null,
      };
    });

    refIsDraggingContainer.current = false;
  }, [activeConnectorStartBoxId, activeConnectorEndBoxId, data, setData]);

  React.useEffect(() => {
    document.addEventListener('mouseup', onDocumentMouseUp);
    return () => {
      document.removeEventListener('mouseup', onDocumentMouseUp);
    };
  }, [onDocumentMouseUp]);

  const onReceivingPointMouseOver = (
    _event: React.MouseEvent<SVGElement, MouseEvent>,
    elementId: number,
  ) => {
    if (state.activeConnectorStartBoxId === 0) {
      // do nothing if we're not dragging
      return;
    }
    // is this port free?
    const connector = data.theBox.connectorElements.find((c) => c.endElementId === elementId);
    if (connector) {
      // port is not free
      return;
    }
    setState({ ...state, activeConnectorEndBoxId: elementId });
  };

  const onReceivingPointMouseOut = () => {
    setState({ ...state, activeConnectorEndBoxId: 0 });
  };

  const onElementMouseDown = (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    elementId: number,
  ) => {
    if (event.button !== 0) {
      return;
    }

    // Prevent the container to get the event
    event.stopPropagation();

    const element = data.theBox.boxElements.find((e) => e.id === elementId);
    setState((oldState): State => {
      return {
        ...oldState,
        activeBoxId: elementId,
        lastActiveBoxId: elementId,
        activePosX: element?.pos.x || 0,
        activePosY: element?.pos.y || 0,
        mouseDownX: event.clientX,
        mouseDownY: event.clientY,
      };
    });
  };

  const onConnectorStartMouseDown = (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    elementId: number,
  ) => {
    if (event.button !== 0) {
      return;
    }
    // if there's a connector here already do nothing
    if (data.theBox.connectorElements.find((c) => c.startElementId === elementId)) {
      return;
    }
    const box = data.theBox.boxElements.find((c) => c.id === elementId);
    if (!box) {
      // should not happen
      throw new Error('No element with id ' + elementId);
    }
    const connectionPoint = {
      x: 0,
      y: 0,
    };
    // where do we start from
    switch (box.boxKind) {
      case 'input':
        connectionPoint.x = box.pos.x + inputCircleToCircleDist;
        connectionPoint.y = box.pos.y;
        break;
      case 'output':
        throw new Error('Implement this');
        break;
      case 'custom':
        throw new Error('Implement this');
        break;
      case 'provided':
        switch (box.providedKind) {
          case 'and':
            throw new Error('Implement this');
          case 'not':
            connectionPoint.x = box.pos.x + notGateWidth;
            connectionPoint.y = box.pos.y + notGateHeight / 2;
            break;
          default:
            assertNever(box);
        }
        break;
      default:
        assertNever(box);
    }
    setState({
      ...state,
      activeConnectorStartBoxId: elementId,
      activePosX: connectionPoint.x,
      activePosY: connectionPoint.y,
      mouseDownX: event.clientX,
      mouseDownY: event.clientY,
    });
  };

  const onContainerMouseDown = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    if (event.button !== 1) {
      return;
    }

    const [x, y] = getMousePosition(event);

    setState({
      ...state,
      previousCenterX: state.centerX,
      previousCenterY: state.centerY,
      mouseScrollDownX: x,
      mouseScrollDownY: y,
    });

    setTimeout(() => {
      refIsDraggingContainer.current = true;
    });
  };

  const getCenterXFromScrollbarMoveEvent = (event: React.MouseEvent) =>
    limitCenterX(
      BOTTOM_RIGHT_LIMIT_X *
        // % of screen width scrolled with the mouse
        (event.clientX / (defaultWidth - SCROLLBAR_WIDTH)),
    );

  const getCenterYFromScrollbarMoveEvent = (event: React.MouseEvent) =>
    limitCenterY(
      BOTTOM_RIGHT_LIMIT_Y *
        // % of screen height scrolled with the mouse
        (event.clientY / (defaultHeight - SCROLLBAR_WIDTH)),
    );

  const onContainerMouseMove = React.useCallback(
    (event: React.MouseEvent) => {
      const [x, y] = getMousePosition(event);

      if (state.activeConnectorStartBoxId) {
        setState((oldState) => {
          return {
            ...oldState,
            mouseDownX: event.clientX,
            mouseDownY: event.clientY,
            activePosX: x,
            activePosY: y,
          };
        });
      }

      if (state.activeBoxId) {
        refHasDragged.current = true;
        const elFound = data.theBox.boxElements.find((el) => el.id === state.activeBoxId);

        if (elFound) {
          // XXX: this just mutates
          elFound.pos.x = Math.round(x / 10) * 10;
          elFound.pos.y = Math.round(y / 10) * 10;
          setData({ ...data });
        } // XXX: else throw?

        setState({
          ...state,
          mouseDownX: event.clientX,
          mouseDownY: event.clientY,
          activePosX: x,
          activePosY: y,
        });
      } else if (refIsDraggingContainer.current) {
        const dx = x - state.mouseScrollDownX;
        const dy = y - state.mouseScrollDownY;

        setState({
          ...state,
          centerX: limitCenterX(state.previousCenterX + dx),
          centerY: limitCenterY(state.previousCenterY + dy),
        });
      } else if (state.focusedUIElement) {
        switch (state.focusedUIElement) {
          // TODO: This can be a bit cleaner, as the scrollbar 'jumps' when it's moved
          // slightly, as the position the scrollbar was clicked is not taken into account
          case 'scrollbarH':
            setState((updatedState) => ({
              ...updatedState,
              centerX: getCenterXFromScrollbarMoveEvent(event),
            }));
            break;

          case 'scrollbarV':
            setState((updatedState) => ({
              ...updatedState,
              centerY: getCenterYFromScrollbarMoveEvent(event),
            }));
            break;
        }
      }
    },
    [getMousePosition, state, data, setData],
  );

  const focusElement = (elementId: number) => {
    setState({ ...state, focusedElementId: elementId });
  };

  const deleteFocusedElement = () => {
    const focused = state.focusedElementId;
    if (!focused) {
      return;
    }

    data.theBox.boxElements = data.theBox.boxElements.filter((e) => e.id !== focused);
    data.theBox.connectorElements = data.theBox.connectorElements.filter(
      (e) => e.id !== focused && e.startElementId !== focused && e.endElementId !== focused,
    );
    setData({ ...data });
  };

  const onUIElementMouseDown = (event: React.MouseEvent, uiElement: UIElement) => {
    if (event.button !== 0) {
      return;
    }

    event.stopPropagation();

    setState((updatedState) => ({
      ...updatedState,
      focusedUIElement: uiElement,
    }));
  };

  return (
    <div className="flex flex-row gap-x-3">
      <svg
        width={defaultWidth}
        height={defaultHeight}
        style={{
          backgroundSize: `${gridSize * state.zoomFactor}px ${gridSize * state.zoomFactor}px`, // TODO: use vars, might be faster
          backgroundPositionX: `${backgroundPositionX}px`,
          backgroundPositionY: `${backgroundPositionY}px`,
        }}
        className="border border-amber-500 select-none bg-white bg-grid"
        // onMouseMove={onContainerMouseMove(state, setState, setData)}
        onMouseMove={onContainerMouseMove}
        onMouseDown={onContainerMouseDown}
      >
        <defs>
          <filter id="f1" width="" height="">
            <feOffset in="SourceAlpha" dx="0" dy="0" />
            <feGaussianBlur stdDeviation="2" />
            <feBlend in="SourceGraphic" in2="blurOut" />
          </filter>
          <filter id="f2" width="" height="">
            <feDropShadow dx="0" dy="0" stdDeviation="1" floodColor="orange" />
          </filter>
        </defs>
        <svg
          width={defaultWidth}
          height={defaultHeight}
          viewBox={`0 0 ${defaultWidth / state.zoomFactor} ${defaultHeight / state.zoomFactor}`}
          x={backgroundPositionX}
          y={backgroundPositionY}
        >
          {/*render connectors first because they would go over connection points, and we make use of mouseOver events
               for those points
          */}
          {(() => {
            if (!state.activeConnectorStartBoxId) {
              return null;
            }
            const startBox = data.theBox.boxElements.find(
              (b) => b.id === state.activeConnectorStartBoxId,
            );
            if (!startBox) {
              // should not happen
              throw new Error('Box not found');
            }
            const startPoint = { x: 0, y: 0 };
            const endPoint = {
              x: Math.round(state.activePosX / 10) * 10,
              y: Math.round(state.activePosY / 10) * 10,
            };
            switch (startBox.boxKind) {
              case 'input':
                startPoint.x = startBox.pos.x + inputCircleToCircleDist;
                startPoint.y = startBox.pos.y;
                break;
              case 'custom':
              case 'output':
                throw new Error('Not implemented');
              case 'provided':
                switch (startBox.providedKind) {
                  case 'not':
                    startPoint.x = startBox.pos.x + notGateWidth;
                    startPoint.y = startBox.pos.y + notGateHeight / 2;
                    break;
                  case 'and':
                    // TODO:
                    throw new Error('Implement this');
                    break;
                  default:
                    assertNever(startBox);
                }
                break;
              default:
                assertNever(startBox);
            }
            return (
              <path
                fill="none"
                stroke={state.activeConnectorEndBoxId ? 'green' : 'blue'}
                strokeWidth={3}
                shapeRendering="geometricPrecision"
                d={roundPathCorners(
                  `M${startPoint.x} ${startPoint.y} ` +
                    `L${startPoint.x + plainConnectorExtensionMin} ${startPoint.y} ` +
                    `L${endPoint.x - plainConnectorExtensionMin} ${endPoint.y} ` +
                    `L${endPoint.x} ${endPoint.y} `,
                  plainConnectorExtensionMin / 2,
                  false,
                )}
              />
            );
          })()}
          {data.theBox.connectorElements.map((connectorElement) => {
            switch (connectorElement.connectorKind) {
              case 'plain': {
                const startElement = data.theBox.boxElements.find(
                  (e) => e.id === connectorElement.startElementId,
                );
                const endElement = data.theBox.boxElements.find(
                  (e) => e.id === connectorElement.endElementId,
                );
                if (startElement?.elementKind !== 'box' || endElement?.elementKind !== 'box') {
                  // TODO better handling, show an error, this just crashes
                  throw new Error(
                    `only connecting boxes start: ${startElement?.elementKind}, end: ${endElement?.elementKind}`,
                  );
                }

                let actualStartPosition = { x: 0, y: 0 };
                switch (startElement.boxKind) {
                  case 'output':
                    throw new Error('Validation output can not be a start element');
                    break;
                  case 'provided':
                    switch (startElement.providedKind) {
                      case 'not':
                        actualStartPosition = {
                          x: startElement.pos.x + notGateWidth,
                          y: startElement.pos.y + notGateHeight / 2,
                        };
                        break;
                      case 'and':
                        // TODO:
                        throw new Error('Implement this');
                        break;
                      default:
                        assertNever(startElement);
                    }
                    break;
                  case 'custom':
                    // TODO:
                    throw new Error('Implement this');
                    break;

                  case 'input':
                    actualStartPosition = {
                      x: startElement.pos.x + inputLineWidth + inputMainCircleRadius,
                      y: startElement.pos.y,
                    };
                    break;

                  default:
                    assertNever(startElement, undefined, `Start element not implemented`);
                }

                let actualEndPosition = { x: 0, y: 0 };
                switch (endElement.boxKind) {
                  case 'provided':
                    switch (endElement.providedKind) {
                      case 'not':
                        actualEndPosition = {
                          x: endElement.pos.x,
                          y: endElement.pos.y + notGateHeight / 2,
                        };
                        break;
                      case 'and':
                        // TODO:
                        throw new Error('Implement this');
                        break;
                      default:
                        assertNever(endElement);
                    }
                    break;
                  case 'custom':
                    // TODO:
                    throw new Error('Implement this');
                    break;

                  case 'output':
                    actualEndPosition = {
                      x: endElement.pos.x - outputLineWidth - outputMainCircleRadius,
                      y: endElement.pos.y,
                    };
                    break;
                  case 'input':
                    throw new Error('Inputs can not be an end element');
                  default:
                    assertNever(endElement, undefined, `End element not implemented`);
                }
                return (
                  <path
                    data-desc={`connector-id-${connectorElement.id}`}
                    key={connectorElement.id}
                    fill="none"
                    filter={state.focusedElementId === connectorElement.id ? 'url(#f1)' : 'none'}
                    stroke={connectorElement.state ? 'crimson' : 'dimgray'}
                    strokeWidth={3}
                    shapeRendering="geometricPrecision"
                    onClick={() => {
                      focusElement(connectorElement.id);
                    }}
                    d={roundPathCorners(
                      `M${actualStartPosition.x} ${actualStartPosition.y} ` +
                        `L${actualStartPosition.x + plainConnectorExtensionMin} ${
                          actualStartPosition.y
                        } ` +
                        `L${actualEndPosition.x - plainConnectorExtensionMin} ${
                          actualEndPosition.y
                        } ` +
                        `L${actualEndPosition.x} ${actualEndPosition.y} `,
                      plainConnectorExtensionMin / 2,
                      false,
                    )}
                  />
                );
              }
              case 'smart':
                return <></>;
              default:
                assertNever(connectorElement);
            }
          })}
          {data.theBox.boxElements.map((box) => {
            switch (box.boxKind) {
              case 'custom':
                // TODO
                throw new Error('Implement this');
                break;

              case 'input':
                return (
                  <g
                    key={box.id}
                    data-desc="input"
                    transform={`translate(${box.pos.x}, ${box.pos.y})`}
                    onClick={() => {
                      focusElement(box.id);
                    }}
                    filter={state.focusedElementId === box.id ? 'url(#f1)' : 'none'}
                  >
                    <g
                      onMouseDown={(e) => {
                        onElementMouseDown(e, box.id);
                      }}
                    >
                      <rect
                        fill="black"
                        stroke="black"
                        width={inputCircleToCircleDist}
                        height={6}
                        x={0}
                        y={-3}
                      />
                      <circle
                        cursor={'pointer'}
                        onClick={() => {
                          if (!refHasDragged.current) {
                            box.state = !box.state;
                            setData({ ...data });
                          }
                        }}
                        fill={box.state ? 'crimson' : 'dimgray'}
                        stroke="black"
                        r={inputMainCircleRadius}
                      />
                    </g>
                    <circle
                      data-desc="connectorAnchorPoint kind-output for-input"
                      onMouseDown={(e) => {
                        onConnectorStartMouseDown(e, box.id);
                      }}
                      fill={box.state ? 'crimson' : 'dimgray'}
                      r={6}
                      cx={inputCircleToCircleDist}
                    />
                  </g>
                );

              case 'output':
                return (
                  <g
                    key={box.id}
                    transform={`translate(${box.pos.x}, ${box.pos.y})`}
                    onClick={() => {
                      focusElement(box.id);
                    }}
                    filter={state.focusedElementId === box.id ? 'url(#f1)' : 'none'}
                  >
                    <g
                      onMouseDown={(e) => {
                        onElementMouseDown(e, box.id);
                      }}
                    >
                      <circle
                        fill={box.state ? 'crimson' : 'dimgray'}
                        r={connectorCircleRadius}
                        cx={
                          -outputMainCircleRadius -
                          connectorCircleRadius -
                          outputLineWidth +
                          outputLinePositionAdjustment * 2
                        }
                      />
                      <rect
                        fill={outputLineColor}
                        width={outputLineWidth}
                        height={outputLineHeight}
                        x={-outputMainCircleRadius - outputLineWidth + outputLinePositionAdjustment}
                        y={-outputLineHeight / 2}
                      />
                      <circle
                        fill={box.state ? 'crimson' : 'dimgray'}
                        stroke="black"
                        r={outputMainCircleRadius}
                      />
                    </g>
                  </g>
                );
              case 'provided':
                switch (box.providedKind) {
                  case 'not':
                    return (
                      <g
                        data-desc="the-not-box"
                        key={box.id}
                        transform={`translate(${box.pos.x}, ${box.pos.y})`}
                        filter={state.focusedElementId === box.id ? 'url(#f1)' : 'none'}
                        onClick={() => {
                          focusElement(box.id);
                        }}
                      >
                        <g
                          onMouseDown={(e) => {
                            onElementMouseDown(e, box.id);
                          }}
                        >
                          <rect fill={notGateColor} width={notGateWidth} height={notGateHeight} />
                          <text x="14" y="15" fill="white" fontWeight="bold" fontSize={14}>
                            NOT
                          </text>
                        </g>
                        <circle
                          onMouseOver={(e) => {
                            onReceivingPointMouseOver(e, box.id);
                          }}
                          onMouseOut={onReceivingPointMouseOut}
                          data-desc="connectorAnchorPoint kind-input"
                          cx="0"
                          cy={notGateHeight / 2}
                          r={connectorCircleRadius}
                          fill={
                            data.theBox.connectorElements.find((c) => c.endElementId === box.id)
                              ?.state
                              ? 'crimson'
                              : 'dimgray'
                          }
                        />
                        <circle
                          data-desc="connectorAnchorPoint kind-output for-not"
                          onMouseDown={(e) => {
                            onConnectorStartMouseDown(e, box.id);
                          }}
                          cx={notGateWidth}
                          cy={notGateHeight / 2}
                          r={connectorCircleRadius}
                          fill={box.state ? 'crimson' : 'dimgray'}
                        />
                      </g>
                    );
                  case 'and':
                    // TODO
                    throw new Error('Implement this');
                  default:
                    assertNever(box);
                }
                break;
              default:
                assertNever(box);
            }
          })}
        </svg>
        {/* Vertical scrollbar */}
        <rect
          fill="lightgray"
          width={SCROLLBAR_WIDTH}
          height="100%"
          x={defaultWidth - SCROLLBAR_WIDTH}
          y={0}
          onMouseDown={(event) => {
            onUIElementMouseDown(event, 'scrollbarV');
            setState((updatedState) => ({
              ...updatedState,
              centerY: getCenterYFromScrollbarMoveEvent(event),
            }));
          }}
        />
        <rect
          fill="red"
          width={SCROLLBAR_WIDTH}
          height={SCROLLBAR_LENGTH}
          x={defaultWidth - SCROLLBAR_WIDTH}
          y={
            ((TOP_LEFT_LIMIT_Y - state.centerY) /
              Math.abs(BOTTOM_RIGHT_LIMIT_Y - TOP_LEFT_LIMIT_Y)) *
            (defaultHeight - SCROLLBAR_LENGTH - SCROLLBAR_WIDTH)
          }
          onMouseDown={(event) => {
            onUIElementMouseDown(event, 'scrollbarV');
          }}
        ></rect>
        {/* Horizontal scrollbar */}
        <rect
          fill="lightgray"
          width="100%"
          height={SCROLLBAR_WIDTH}
          x={0}
          y={defaultHeight - SCROLLBAR_WIDTH}
          onMouseDown={(event) => {
            onUIElementMouseDown(event, 'scrollbarH');
            setState((updatedState) => ({
              ...updatedState,
              centerX: getCenterXFromScrollbarMoveEvent(event),
            }));
          }}
        />
        <rect
          fill="red"
          width={SCROLLBAR_LENGTH}
          height={SCROLLBAR_WIDTH}
          x={
            ((TOP_LEFT_LIMIT_X - state.centerX) /
              Math.abs(BOTTOM_RIGHT_LIMIT_X - TOP_LEFT_LIMIT_X)) *
            (defaultWidth - SCROLLBAR_LENGTH - SCROLLBAR_WIDTH)
          }
          y={defaultHeight - SCROLLBAR_WIDTH}
          onMouseDown={(event) => {
            onUIElementMouseDown(event, 'scrollbarH');
          }}
        ></rect>
        {/* Scrollbar intersection */}
        <rect
          fill="black"
          width={SCROLLBAR_WIDTH}
          height={SCROLLBAR_WIDTH}
          x={defaultWidth - SCROLLBAR_WIDTH}
          y={defaultHeight - SCROLLBAR_WIDTH}
        ></rect>
      </svg>

      <div>
        Focused element id: {state.focusedElementId}
        <button
          className="border border-amber-500"
          disabled={!state.focusedElementId}
          onClick={() => {
            deleteFocusedElement();
          }}
        >
          Delete
        </button>
        <br />
        active element id: {state.activeBoxId}
        <br />
        lastActiveElementId: {state.lastActiveBoxId}
        <br />
        Active connector start: {state.activeConnectorStartBoxId}, end:{' '}
        {state.activeConnectorEndBoxId}
        Zoom factor: {state.zoomFactor}
        <br />
        <button
          onClick={() => {
            setState({ ...state, zoomFactor: state.zoomFactor + 0.1 });
          }}
        >
          Zoom in
        </button>
        <br />
        <button
          onClick={() => {
            setState({ ...state, zoomFactor: state.zoomFactor - 0.1 });
          }}
        >
          Zoom out
        </button>
      </div>
    </div>
  );
}
