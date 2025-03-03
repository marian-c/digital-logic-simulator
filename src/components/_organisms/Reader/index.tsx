import type { FunctionComponent } from '@/types/r-ui';

type ItemSeparator = {
  kind: 'separator';
};
type ItemTitle = {
  kind: 'title';
  data: string;
};

type ItemEntry = {
  kind: 'entry';
  data: string;
};

export type Item = ItemEntry | ItemTitle | ItemSeparator;

type Props = {
  contents: Item[];
  shouldUseFullHeight?: boolean;
  wrapperClassName?: string;
};

export const Reader: FunctionComponent<Props> = ({
  contents,
  shouldUseFullHeight,
  wrapperClassName,
}) => {
  return (
    <div
      className={`${shouldUseFullHeight ? 'h-dvh' : ''} ${wrapperClassName} border border-red-100 relative`}
    >
      <div className="w-full h-full border border-black overflow-auto snap-x snap-mandatory columns-[99999px]">
        {contents.map((contentElement, contentIndex) => {
          return (
            <div key={contentIndex} className="snap-start">
              ::{contentIndex} -- {contentElement.kind}
            </div>
          );
        })}
      </div>
      <div className="absolute bottom-0 bg-amber-50">debug</div>
    </div>
  );
};
