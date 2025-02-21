'use client';

import type { FunctionComponentWithChildren } from '@/r-ui/types';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';

export default (function PgLayoutToc() {
  React.useEffect(() => {
    console.log('TOC mounted');
  }, []);
  const pn = usePathname();
  console.log('TOC RENDER', pn);
  return (
    <div>
      <ul>
        <li>
          <Link href="/pg/sample-for-test">Sample for test</Link>
        </li>
        <li>
          <Link href="/pg/web-platform/intersection-observer">Intersection observer</Link>
        </li>
      </ul>
    </div>
  );
} satisfies FunctionComponentWithChildren as FunctionComponentWithChildren);
