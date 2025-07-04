'use client';
import type { Item } from '@/types/book';
import type { FunctionComponent } from '@/types/r-ui';
import React from 'react';
import { useFirstMount } from '@/hooks/useFirstMount';
import { useElementLayoutWithRef } from '@/hooks/useElementLayout/useElementLayoutWithRef';
import { isSetTrue } from '@/helpers/basics';

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

const useLayout = () => {
  const [wrapperSize, setWrapperSize] = React.useState({ width: 0, height: 0 });
  const [footerSize, setFooterSize] = React.useState({ width: 0, height: 0 });
  const [headerSize, setHeaderSize] = React.useState({ width: 0, height: 0 });
  const headerRef = useElementLayoutWithRef<HTMLDivElement>((e) => {
    setHeaderSize({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height });
  });
  const footerRef = useElementLayoutWithRef<HTMLDivElement>((e) => {
    setFooterSize({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height });
  });
  const wrapperRef = useElementLayoutWithRef<HTMLDivElement>((e) => {
    setWrapperSize({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height });
  });

  return { headerRef, footerRef, wrapperRef, wrapperSize, headerSize, footerSize };
};

function useNoScroll<TArgs extends unknown[]>(fn: (...args: TArgs) => boolean, ...args: TArgs) {
  React.useEffect(() => {
    document.body.classList.remove('noscroll');
  }, []);

  React.useEffect(() => {
    if (fn(...args)) {
      document.body.classList.add('noscroll');
    } else {
      document.body.classList.remove('noscroll');
    }
  }, args);
}

/**
 * if the contents are missing, then it's the loading state
 */
export const Reader: FunctionComponent<Props> = ({ contents, fullViewport, wrapperClassName }) => {
  // this renders twice
  const firstMount = useFirstMount();
  const isLoading = firstMount || !contents;

  console.log(isLoading);

  const [isPageOnly, setIsPageOnly] = React.useState(true);

  const { wrapperSize, footerSize, headerSize, wrapperRef, headerRef, footerRef } = useLayout();

  useNoScroll(isSetTrue, fullViewport);

  return (
    <div
      ref={wrapperRef}
      className={`${fullViewport ? 'h-dvh inset-0 bottom-[-1px] fixed' : ''} ${wrapperClassName ?? ''} touch-manipulation bg-zinc-200 border border-red-100`}
    >
      <div
        ref={headerRef}
        className={`absolute top-0 transition-transform ${isPageOnly ? '-translate-y-full' : 'translate-y-0'} `}
      >
        TODO: title here ${isPageOnly}
      </div>
      <div
        onMouseDown={(e) => {
          // disable selection on double click
          if (e.detail !== 1) {
            e.preventDefault();
          }
        }}
        onClick={() => {
          // when the click has happened, maybe it was a selection, in which case we don't want to mess with the chrome
          const hasSelection = !document.getSelection()?.getRangeAt(0).collapsed;
          if (!hasSelection) {
            setIsPageOnly(!isPageOnly);
          }
        }}
      >
        <pre>{JSON.stringify({ wrapperSize, headerSize, footerSize }, undefined, 2)}</pre>
      </div>
      <div
        ref={footerRef}
        className={`absolute bottom-0 transition-transform ${isPageOnly ? 'translate-y-full' : 'translate-y-0'} `}
      >
        Footer
      </div>
    </div>
  );
};
