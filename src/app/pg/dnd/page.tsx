'use client';

import React from 'react';
import {
  defaultHeight,
  defaultWidth,
  notGateColor,
  notGateHeight,
  notGateWidth,
} from '@/app/pg/dnd/constants';
import { getSample, type Sketch } from '@/app/pg/dnd/types';
import { assertNever } from '@/helpers/basics';

type State = {
  activeElementId: number;
  lastActiveElementId: number;
  mouseDownX: number;
  mouseDownY: number;
};

function onElementMouseDown(
  setter: React.Dispatch<React.SetStateAction<State>>,
  elementId: number,
) {
  // XXX: this gets recreated on every render
  return function (event: React.MouseEvent<SVGRectElement, MouseEvent>) {
    if (event.button !== 0) {
      return;
    }
    console.log('onElementMouseDown', event);
    setter((oldState): State => {
      return {
        ...oldState,
        activeElementId: elementId,
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
    lastActiveElementId: 0,
    mouseDownX: 0,
    mouseDownY: 0,
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
        if (elFound) {
          // XXX: this just mutates
          elFound.pos.x += event.clientX - state.mouseDownX;
          elFound.pos.y += event.clientY - state.mouseDownY;
          setData({ ...data });
        } // XXX: else throw?

        setState({ ...state, mouseDownX: event.clientX, mouseDownY: event.clientY });
      }
    },
    [state, data],
  );

  return (
    <div className="flex flex-row gap-x-3">
      <svg
        width={defaultWidth}
        height={defaultHeight}
        viewBox={`0 0 ${defaultWidth} ${defaultHeight}`}
        overflow="scroll"
        className="border border-amber-500"
        // onMouseMove={onContainerMouseMove(state, setState, setData)}
        onMouseMove={onContainerMouseMove}
      >
        {data.theBox.elements.map((element) => {
          switch (element.elementKind) {
            case 'connector':
              // TODO
              return <></>;
              break;
            case 'box':
              switch (element.boxKind) {
                case 'custom':
                  // TODO
                  return <></>;
                  break;
                case 'provided':
                  switch (element.providedKind) {
                    case 'not':
                      return (
                        <g
                          key={element.id}
                          transform={`translate(${element.pos.x}, ${element.pos.y})`}
                        >
                          <g onMouseDown={onElementMouseDown(setState, element.id)}>
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
                      return;
                      <></>;
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
      <div>
        active element id: {state.activeElementId}
        <br />
        lastActiveElementId: {state.lastActiveElementId}
      </div>
    </div>
  );
}
