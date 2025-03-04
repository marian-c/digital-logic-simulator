'use client';
import { VList } from 'virtua';

export default function PageEditorVirtuaReactEcoPg() {
  const pages = 1000;

  const width = 400;
  return (
    <div>
      <h2>Example using virtua to build the editor - simple</h2>

      <VList
        className="virtua-editor"
        horizontal
        style={{ height: 400, width: 400, scrollSnapType: 'x mandatory', scrollbarWidth: 'none' }}
        onScrollEnd={() => {
          console.log('onScrollEnd');
        }}
      >
        {Array.from({ length: pages }).map((_, i) => (
          <div
            key={i}
            style={{
              scrollSnapAlign: 'start',
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
  );
}
