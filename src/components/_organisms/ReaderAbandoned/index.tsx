'use client';
import type { Item } from '@/types/book';
import type { FunctionComponent } from '@/types/r-ui';
import React, { type RefCallback } from 'react';

type Props = {
  contents: Item[];
  shouldUseFullHeight?: boolean;
  wrapperClassName?: string;
  // TODO:
  // initalLocation?: string
};

export const ReaderAbandoned: FunctionComponent<Props> = ({
  contents,
  shouldUseFullHeight,
  wrapperClassName,
}) => {
  const locationRef = React.useRef(0.5);

  const refCb = React.useCallback<RefCallback<HTMLElement>>((element) => {
    if (element) {
      console.log('REF FUNCTION', element);
      if (element) {
        // setLocationOnMount
        element.scrollLeft = element.scrollWidth * locationRef.current;

        element.addEventListener('selectstart', () => {
          console.log('selectionstart');
        });
        element.addEventListener('selectionchange', () => {
          console.log('selectionchange');
        });

        element.addEventListener('contextmenu', () => {
          console.log('contextmenu');
        });
        element.addEventListener('click', () => {
          console.log('click');
        });
        element.addEventListener('pointerdown', () => {
          console.log('pointerdown');
        });
        element.addEventListener('touchend', () => {
          console.log('touchend');
        });
        element.addEventListener('touchstart', () => {
          console.log('touchstart');
        });
        element.addEventListener('touchcancel', () => {
          console.log('touchcancel');
        });
        element.addEventListener('scrollend', () => {
          // TODO: was it a resize that has done this?
          // TODO: was it a preference change (font size) that has done this?
          console.log(
            'scrollend',
            element.scrollLeft / element.scrollWidth +
              1 / Math.ceil(element.scrollWidth / (element.clientWidth / 2)),
          );
          locationRef.current =
            element.scrollLeft / element.scrollWidth +
            1 / Math.ceil(element.scrollWidth / (element.clientWidth / 2));
        });
      }
    }
  }, []);

  return (
    <div
      className={`${shouldUseFullHeight ? 'h-dvh' : ''} ${wrapperClassName} border border-red-100 relative`}
    >
      <div
        className="w-full h-full border border-black overflow-auto snap-x snap-mandatory gap-0 columns-[99999px] scroll-smooth"
        ref={refCb}
      >
        {contents.map((contentElement, contentIndex) => {
          return (
            <div key={contentIndex} className="snap-start bg-gray-400">
              ::{contentIndex} -- {contentElement.kind}
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 right-0 bg-amber-50">
        debug
        <br /> location: {locationRef.current}
      </div>
    </div>
  );
};
