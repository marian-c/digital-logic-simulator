'use client';
import { VList } from 'virtua';
import React from 'react';

function Demo() {
  const pages = 1000;

  const width = 800;
  return (
    <div>
      <h2>Example using virtua to build the editor - simple</h2>

      <div>
        <VList
          className="virtua-editor"
          horizontal
          style={{
            height: 400,
            width: width,
            scrollSnapType: 'x mandatory',
            scrollbarWidth: 'none',
          }}
          onScrollEnd={() => {
            console.log('onScrollEnd');
          }}
        >
          {Array.from({ length: pages }).map((_, i) => (
            <div
              key={i}
              style={{
                scrollSnapAlign: 'center',
                width: width,
                borderRight: 'solid 1px red',
                background: 'gray',
              }}
            >
              {i}
            </div>
          ))}
        </VList>
      </div>
    </div>
  );
}

export default function PageEditorVirtuaReactEcoPg() {
  const [flag, setFlag] = React.useState<boolean>(false);
  return (
    <div>
      <button
        onClick={() => {
          setFlag(!flag);
        }}
      >
        TOGGLE
      </button>
      {flag && <Demo />}
    </div>
  );
}
