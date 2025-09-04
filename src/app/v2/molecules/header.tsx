import type { FunctionComponentWithChildren } from '@/types/r-ui';
import type { Sketch } from '@/app/v2/types/data';

export const Header: FunctionComponentWithChildren<{ sketch: Sketch }> = function ({ sketch }) {
  return (
    <div>
      {sketch.name} {sketch.isExample && '[example]'} {'>'} component 1 {'>'} component 2
    </div>
  );
};
