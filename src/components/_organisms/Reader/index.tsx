'use client';
import type { Item } from '@/types/book';
import type { FunctionComponent } from '@/types/r-ui';
import React from 'react';
import { useFirstMount } from '@/hooks/useFirstMount';

type Props = {
  contents?: Item[];
  contentsMeta?: {
    title?: string;
    author?: string;
  };
  fullViewport?: boolean;
  wrapperClassName?: string;
  initialPageNumber?: number;
};

/**
 * if the contents are missing, then it's the loading state
 */
export const Reader: FunctionComponent<Props> = ({
  contents,
  fullViewport,
  wrapperClassName,
  initialPageNumber,
}) => {
  // this renders twice
  const firstMount = useFirstMount();
  const isLoading = firstMount || !contents;

  console.log('isLoading', isLoading);

  return (
    <div
      className={`${fullViewport ? 'h-dvh inset-0 bottom-[-1px]' : ''} ${wrapperClassName ?? ''} bg-zinc-200 border border-red-100`}
    >
      <div className="h-screen">Reader {initialPageNumber}</div>
    </div>
  );
};
