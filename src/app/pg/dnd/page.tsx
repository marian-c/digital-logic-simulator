'use client';

import React from 'react';
import {
  defaultHeight,
  defaultWidth,
  gridSize,
  notGateColor,
  notGateHeight,
  notGateWidth,
  plainConnectorExtensionMin,
} from '@/app/pg/dnd/constants';
import { getSample, type Sketch } from '@/app/pg/dnd/types';
import { assertNever } from '@/helpers/basics';
import roundPathCorners from '@/app/pg/dnd/rouding';

type State = {
  activeElementId: number;
  activeElementPosX: number;
  activeElementPosY: number;
  lastActiveElementId: number;
  mouseDownX: number;
  mouseDownY: number;
  zoomFactor: number;
};

function onElementMouseDown(
  data: Sketch,
  setter: React.Dispatch<React.SetStateAction<State>>,
  elementId: number,
) {
  // XXX: this gets recreated on every render
  return function (event: React.MouseEvent<SVGRectElement, MouseEvent>) {
    if (event.button !== 0) {
      return;
    }
    console.log('onElementMouseDown', event);
    const element = data.theBox.elements.find((e) => e.id === elementId);
    setter((oldState): State => {
      return {
        ...oldState,
        activeElementId: elementId,
        activeElementPosX: element?.pos.x || 0,
        activeElementPosY: element?.pos.y || 0,
        lastActiveElementId: elementId,
        mouseDownX: event.clientX,
        mouseDownY: event.clientY,
      };
    });
  };
}

function onDocumentMouseUp(setter: React.Dispatch<React.SetStateAction<State>>) {
  // XXX: this gets recreated on every render
  return function () {
    console.log('onDocumentMouseUp');
    setter((oldState): State => {
      return { ...oldState, activeElementId: 0 };
    });
  };
}

// function onContainerMouseMove(
//   state: State,
//   setState: React.Dispatch<React.SetStateAction<State>>,
//   setData: React.Dispatch<React.SetStateAction<Sketch>>,
// ) {
//   // XXX: this gets recreated on every render
//   return function (event: React.MouseEvent<SVGSVGElement, MouseEvent>) {
//     if (state.activeElementId) {
//       console.log('move active element', state.activeElementId);
//       setData((oldData): Sketch => {
//         const elFound = oldData.theBox.elements.find((el) => el.id === state.activeElementId);
//         if (elFound) {
//           // XXX: this just mutates
//           elFound.pos.x += event.clientX - state.mouseDownX;
//           elFound.pos.y += event.clientY - state.mouseDownY;
//           console.log('-- new pos', elFound.pos);
//           return { ...oldData };
//         } // XXX: else throw?
//         return oldData;
//       });
//       setState({ ...state, mouseDownX: event.clientX, mouseDownY: event.clientY });
//     }
//   };
// }

export default function PagePgDnd() {
  const [data, setData] = React.useState<Sketch>(() => {
    return getSample();
  });
  const [state, setState] = React.useState<State>({
    activeElementId: 0,
    activeElementPosX: 0,
    activeElementPosY: 0,
    lastActiveElementId: 0,
    mouseDownX: 0,
    mouseDownY: 0,
    zoomFactor: 1,
  });
  React.useEffect(() => {
    const cbMouseUp = onDocumentMouseUp(setState);
    document.addEventListener('mouseup', cbMouseUp);
    return () => {
      document.removeEventListener('mouseup', cbMouseUp);
    };
  }, []);

  const onContainerMouseMove = React.useCallback(
    (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
      if (state.activeElementId) {
        const elFound = data.theBox.elements.find((el) => el.id === state.activeElementId);
        const x = state.activeElementPosX + (event.clientX - state.mouseDownX) / state.zoomFactor;
        const y = state.activeElementPosY + (event.clientY - state.mouseDownY) / state.zoomFactor;
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
          activeElementPosX: x,
          activeElementPosY: y,
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
          {data.theBox.elements.map((element) => {
            switch (element.elementKind) {
              case 'connector':
                switch (element.connectorKind) {
                  case 'plain': {
                    const startElement = data.theBox.elements.find(
                      (e) => e.id === element.startElementId,
                    );
                    const endElement = data.theBox.elements.find(
                      (e) => e.id === element.endElementId,
                    );
                    if (startElement?.elementKind !== 'box' || endElement?.elementKind !== 'box') {
                      // TODO better handling, show an error, this just crashes
                      throw new Error('only connecting boxes');
                    }

                    let actualStartPosition = { x: 0, y: 0 };
                    switch (startElement.boxKind) {
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
                      default:
                        assertNever(startElement);
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
                      default:
                        assertNever(endElement);
                    }
                    console.log(
                      'asd',
                      roundPathCorners(
                        `M ${actualStartPosition.x} ${actualStartPosition.y} ` +
                          `L ${actualStartPosition.x + plainConnectorExtensionMin} ${actualStartPosition.y} ` +
                          `L ${actualEndPosition.x - plainConnectorExtensionMin} ${actualEndPosition.y}  ` +
                          `L ${actualEndPosition.x} ${actualEndPosition.y} `,
                        plainConnectorExtensionMin / 2,
                        false,
                      ),
                    );
                    return (
                      <path
                        key={element.id}
                        fill="none"
                        stroke="black"
                        strokeWidth={3}
                        shapeRendering="geometricPrecision"
                        d={roundPathCorners(
                          `M${actualStartPosition.x} ${actualStartPosition.y} ` +
                            `L${actualStartPosition.x + plainConnectorExtensionMin} ${actualStartPosition.y} ` +
                            `L${actualEndPosition.x - plainConnectorExtensionMin} ${actualEndPosition.y} ` +
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
                    assertNever(element);
                }
                break;
              case 'box':
                switch (element.boxKind) {
                  case 'custom':
                    // TODO
                    throw new Error('Implement this');
                    break;
                  case 'provided':
                    switch (element.providedKind) {
                      case 'not':
                        return (
                          <g
                            key={element.id}
                            transform={`translate(${element.pos.x}, ${element.pos.y})`}
                          >
                            <g onMouseDown={onElementMouseDown(data, setState, element.id)}>
                              <rect
                                key={element.id}
                                fill={notGateColor}
                                width={notGateWidth}
                                height={notGateHeight}
                              />
                              <text x="13" y="20" fill="white" fontWeight="bold">
                                NOT
                              </text>
                            </g>
                            <circle cx="0" cy="15" r="8" />
                            <circle cx={notGateWidth} cy="15" r="8" />
                          </g>
                        );
                      case 'and':
                        // TODO
                        throw new Error('Implement this');
                      default:
                        assertNever(element);
                    }
                    break;
                  default:
                    assertNever(element);
                }
                break;
              default:
                assertNever(element);
            }
          })}
        </svg>
        <rect fill="lightgray" width="100%" height={20} y={defaultHeight - 20} />
      </svg>
      <div>
        active element id: {state.activeElementId}
        <br />
        lastActiveElementId: {state.lastActiveElementId}
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
