'use client';
import type { FunctionComponent } from '@/types/r-ui';
import { singuratate } from '@/data/books/samples/samples';
import { Reader } from '@/components/_organisms/Reader';
import { useLocalStorageItemInCollectionInitialNoFirstMount } from '@/hooks/useLocalStorage';
import { getBooksIdentifier } from '@/data/books';
import React, { type RefCallback } from 'react';

/**
 * This will handle the reader initialization
 * - fetch the data
 * - manage localstorage access
 *    - only fetch on mount
 * - show the actual reader
 */
export const Eminescu: FunctionComponent = () => {
  const userStateForThisBook = useLocalStorageItemInCollectionInitialNoFirstMount(
    'reader_books',
    getBooksIdentifier('eminescu'),
    { currentPage: 0 },
  );

  const ref1 = React.useRef<HTMLDivElement>(null);
  const ref2 = React.useCallback<RefCallback<HTMLElement>>((el) => {
    console.log('ref2', el);
  }, []);

  return (
    <div ref={ref1}>
      <div ref={ref2}>
        <Reader
          contents={singuratate}
          contentsMeta={{
            title: 'Poezii',
            author: 'Mihai Eminescu',
          }}
          fullViewport
          initialPageNumber={userStateForThisBook.currentPage}
        />
      </div>
    </div>
  );
};
