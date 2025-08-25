'use client';

import React from 'react';

export default function PagePgDnd() {
  const [state, setState] = React.useState({
    activeElementId: '',
    lastActiveElementId: '',
  });
  const [data, setData] = React.useState({
    elements: [
      {
        id: '1',
        type: 'box',
        noInputs: 2,
        noOutputs: 1,
        fill: 'red',
        pos: {
          x: 0.2,
          y: 0.3,
        },
      },
      {
        id: '2',
        type: 'box',
        noInputs: 2,
        noOutputs: 2,
        fill: 'green',
        pos: {
          x: 0.6,
          y: 0.7,
        },
      },
    ],
  });
  return (
    <svg
      width="400"
      height="400"
      className="border border-amber-500"
      onMouseUp={() => {
        // TODO: document on mouse up should clear the active element
        console.log('ROot, onMouseUp');
      }}
      onMouseMove={(e) => {
        const el = data.elements.find((e) => e.id === state.activeElementId);
        if (el) {
          el.pos.x += e.movementX / 400;
          el.pos.y += e.movementY / 400;
          setData({ ...data });
        }
      }}
    >
      {data.elements.map((element) => {
        return (
          <rect
            onMouseDown={() => {
              console.log('down');
              setState({ ...state, activeElementId: element.id, lastActiveElementId: element.id });
            }}
            key={element.id}
            id={element.id}
            x={element.pos.x * 400}
            y={element.pos.y * 400}
            width="50"
            height="50"
            fill={element.fill}
            onClick={() => {
              console.log('click');
            }}
          />
        );
      })}
      <use
        xlinkHref={`#${state.lastActiveElementId}`}
        onMouseDown={() => {
          setState({ ...state, activeElementId: state.lastActiveElementId });
        }}
        onMouseUp={() => {
          console.log('up');
          setState({ ...state, activeElementId: '' });
        }}
      />
    </svg>
  );
}
