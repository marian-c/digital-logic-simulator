'use client';
import { useInView } from 'react-intersection-observer';
import React, { type ChangeEvent } from 'react';

export default function PageReactIntersectionObserverPage() {
  const [marginTop, setMarginTop] = React.useState(200);
  const { ref, inView, entry } = useInView({
    onChange(_, entry) {
      console.log('changed', entry);
    },
  });

  return (
    <>
      <h2>Example using react-intersection-observer</h2>
      <div>is it in view: {inView ? 'yes' : 'no'}</div>
      <pre>{JSON.stringify(entry)}</pre>
      <input
        type="range"
        min={0}
        max={1000}
        value={marginTop}
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          setMarginTop(parseInt(e.target.value, 10));
        }}
      />
      <div style={{ marginTop }} ref={ref}>
        {' '}
        element with a big margin
      </div>
    </>
  );
}
