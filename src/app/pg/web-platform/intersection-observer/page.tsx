'use client';
import React, { type ChangeEvent } from 'react';

export default function PageIntersectionObserver() {
  const [offset, setOffset] = React.useState(0);
  const rootRef = React.useRef<HTMLDivElement | null>(null);
  const targetRef = React.useRef<HTMLDivElement | null>(null);
  React.useEffect(() => {
    const target = targetRef.current;
    const obs = new IntersectionObserver(
      (entries) => {
        console.log('intersection entries', entries);
      },
      {
        root: rootRef.current,
        rootMargin: '0px 0px 0px 0px',
        threshold: Array.from({ length: 1000 }, (_, i) => i / 1000),
      },
    );
    console.log('about to observe', targetRef.current);
    obs.observe(target!);

    return () => {
      obs.unobserve(target!);
    };
  }, []);
  return (
    <>
      <h2>Simple example of using intersection observer</h2>
      offset:{' '}
      <input
        type="range"
        value={offset}
        min={-100}
        max={100}
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          setOffset(parseInt(e.target.value, 10));
        }}
      />
      <div style={{ position: 'relative' }}>
        <div ref={rootRef} style={{ border: '1px solid red', width: 'max-content' }}>
          This is a bigger
          <br />
          parent element:
          <div
            ref={targetRef}
            style={{
              border: '1px solid blue',
              width: 'max-content',
              top: offset,
              left: 20,
              position: 'relative',
            }}
          >
            target
          </div>
        </div>
      </div>
    </>
  );
}
