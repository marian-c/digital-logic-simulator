import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { useSketchMeta } from '@/app/v2/modules/useSketchData';

export const Breadcrumbs: FunctionComponentWithChildren = function () {
  const sketchMeta = useSketchMeta();
  return (
    <div>
      {sketchMeta.name} {sketchMeta.isExample && '[example]'} {'>'} component 1 {'>'} component 2
    </div>
  );
};
