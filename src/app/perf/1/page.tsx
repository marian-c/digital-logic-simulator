'use client';
// strange context render child combination
// abandoned
import React, { useState } from 'react';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { Rotate } from '@/app/v3/modules/sidebar';

const Ctx = React.createContext({ x: 0, y: 0 });

const Provider: FunctionComponentWithChildren = ({ children }) => {
  const [value, setValue] = useState({ x: 0, y: 0 });
  React.useEffect(() => {
    function fn(e: MouseEvent) {
      setValue({ x: e.pageX, y: e.pageY });
    }
    document.addEventListener('mousemove', fn);
    return () => {
      document.removeEventListener('mousemove', fn);
    };
  });

  return <Ctx value={value}>{children}</Ctx>;
};

function Inner() {
  const data = Array.from({ length: 500 });
  return (
    <div>
      Inner
      {data.map((_, i) => {
        return <div key={i}>{i}</div>;
      })}
    </div>
  );
}

export default function PagePerf1() {
  return (
    <div>
      <Rotate />
      <Provider>
        <Inner />
      </Provider>
    </div>
  );
}
