'use client';

import React from 'react';
import {
  defaultHeight,
  defaultWidth,
  gridSize,
  inputLineColor,
  inputLineHeight,
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
  inputLinePositionAdjustment,
  outputLinePositionAdjustment,
} from '@/app/_page/constants';
import { getSample, type Sketch } from '@/app/_page/types';
import { assertNever } from '@/helpers/basics';
import roundPathCorners from '@/app/_page/rounding';
import { simulate } from '@/app/_page/simulation';

type State = {
  activeBoxId: number;
  activeBoxPosX: number;
  activeBoxPosY: number;
  lastActiveBoxId: number;
  mouseDownX: number;
  mouseDownY: number;
  zoomFactor: number;
};

export default function Home() {
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
    activeBoxPosX: 0,
    activeBoxPosY: 0,
    lastActiveBoxId: 0,
    mouseDownX: 0,
    mouseDownY: 0,
    zoomFactor: 1,
  });

  const onDocumentMouseUp = React.useCallback(() => {
    setState((oldState): State => {
      return { ...oldState, activeBoxId: 0 };
    });
  }, []);

  React.useEffect(() => {
    document.addEventListener('mouseup', onDocumentMouseUp);
    return () => {
      document.removeEventListener('mouseup', onDocumentMouseUp);
    };
  }, [onDocumentMouseUp]);

  const onElementMouseDown = (
    event: React.MouseEvent<SVGElement, MouseEvent>,
    elementId: number,
  ) => {
    if (event.button !== 0) {
      return;
    }
    console.log('OnMouseDown');
    const element = data.theBox.boxElements.find((e) => e.id === elementId);
    setState((oldState): State => {
      return {
        ...oldState,
        activeBoxId: elementId,
        activeBoxPosX: element?.pos.x || 0,
        activeBoxPosY: element?.pos.y || 0,
        lastActiveBoxId: elementId,
        mouseDownX: event.clientX,
        mouseDownY: event.clientY,
      };
    });
  };

  const onContainerMouseMove = React.useCallback(
    (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      if (state.activeBoxId) {
        console.log('onContainerMouseMove');
        const elFound = data.theBox.boxElements.find((el) => el.id === state.activeBoxId);
        const x = state.activeBoxPosX + (event.clientX - state.mouseDownX) / state.zoomFactor;
        const y = state.activeBoxPosY + (event.clientY - state.mouseDownY) / state.zoomFactor;
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
          activeBoxPosX: x,
          activeBoxPosY: y,
        });
      }
    },
    [state, data],
  );

  return (
    <div className="flex flex-row gap-x-3">
      <svg
        width={defaultWidth}
        height={defaultHeight}
        style={{
          backgroundSize: `${gridSize * state.zoomFactor}px ${gridSize * state.zoomFactor}px`, // TODO: use vars, might be faster
          backgroundPositionX: '-0.5px',
          backgroundPositionY: '-0.5px',
        }}
        className="border border-amber-500 select-none bg-white bg-grid"
        // onMouseMove={onContainerMouseMove(state, setState, setData)}
        onMouseMove={onContainerMouseMove}
      >
        <svg
          width={defaultWidth}
          height={defaultHeight}
          viewBox={`0 0 ${defaultWidth / state.zoomFactor} ${defaultHeight / state.zoomFactor}`}
        >
          {data.theBox.boxElements.map((box) => {
            switch (box.boxKind) {
              case 'custom':
                // TODO
                throw new Error('Implement this');
                break;

              case 'input':
                return (
                  <g key={box.id} transform={`translate(${box.pos.x}, ${box.pos.y})`}>
                    <g
                      onMouseDown={(e) => {
                        onElementMouseDown(e, box.id);
                      }}
                    >
                      <circle
                        fill={box.state ? 'crimson' : 'dimgray'}
                        r={connectorCircleRadius}
                        cx={
                          inputMainCircleRadius +
                          connectorCircleRadius +
                          inputLineWidth -
                          inputLinePositionAdjustment * 2
                        }
                      />
                      <rect
                        fill={inputLineColor}
                        width={inputLineWidth}
                        height={inputLineHeight}
                        x={inputMainCircleRadius - inputLinePositionAdjustment}
                        y={-inputLineHeight / 2}
                      />
                      <circle
                        onClick={() => {
                          console.log('click');
                        }}
                        fill={box.state ? 'crimson' : 'dimgray'}
                        stroke="black"
                        r={inputMainCircleRadius}
                      />
                    </g>
                  </g>
                );

              case 'output':
                return (
                  <g key={box.id} transform={`translate(${box.pos.x}, ${box.pos.y})`}>
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
                      <g key={box.id} transform={`translate(${box.pos.x}, ${box.pos.y})`}>
                        <g
                          onMouseDown={(e) => {
                            onElementMouseDown(e, box.id);
                          }}
                        >
                          <rect fill={notGateColor} width={notGateWidth} height={notGateHeight} />
                          <text x="13" y="20" fill="white" fontWeight="bold">
                            NOT
                          </text>
                        </g>
                        <circle
                          cx="0"
                          cy="15"
                          r={connectorCircleRadius}
                          fill={
                            data.theBox.connectorElements.find((c) => c.endElementId === box.id)
                              ?.state
                              ? 'crimson'
                              : 'dimgray'
                          }
                        />
                        <circle
                          cx={notGateWidth}
                          cy="15"
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
                  throw new Error('only connecting boxes');
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
                    key={connectorElement.id}
                    fill="none"
                    stroke={connectorElement.state ? 'crimson' : 'dimgray'}
                    strokeWidth={3}
                    shapeRendering="geometricPrecision"
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
        </svg>
        <rect fill="lightgray" width="100%" height={20} y={defaultHeight - 20} />
      </svg>
      <div>
        active element id: {state.activeBoxId}
        <br />
        lastActiveElementId: {state.lastActiveBoxId}
        <br />
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
