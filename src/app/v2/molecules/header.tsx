import type { FunctionComponentWithChildren } from '@/types/r-ui';
import type { SketchStructure } from '@/app/v2/types/data';

export const Header: FunctionComponentWithChildren<{ structure: SketchStructure }> = function ({
  structure,
}) {
  return (
    <div>
      {structure.name} {structure.isExample && '[example]'} {'>'} component 1 {'>'} component 2
    </div>
  );
};
