// because of the usePathname hook
'use client';

import { usePathname, useSelectedLayoutSegments } from 'next/navigation';

import React from 'react';
import type { FunctionComponent } from '@/types/r-ui';
import { PgToc } from '@/components/_organisms/PgToc';

export const PgLayoutToc: FunctionComponent<{ pages: string[] }> = ({ pages }) => {
  const selectedLayoutSegments = useSelectedLayoutSegments();
  const pathname = usePathname();
  const rootPathname = React.useMemo(() => {
    let innerPathname = '/';
    if (selectedLayoutSegments.length) {
      innerPathname += `${selectedLayoutSegments.join('/')}/`;
    }
    return pathname.substring(0, pathname.length - innerPathname.length + 1);
  }, [selectedLayoutSegments, pathname]);
  return <PgToc pages={pages} rootPathname={rootPathname} />;
};
