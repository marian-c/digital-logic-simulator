import type { FunctionComponentWithChildren } from '@/types/r-ui';
import type { SketchMeta } from '@/app/v2/types/data';

export const Breadcrumbs: FunctionComponentWithChildren<{ meta: SketchMeta }> = function ({
  meta,
}) {
  return (
    <div>
      {meta.name} {meta.isExample && '[example]'} {'>'} component 1 {'>'} component 2
    </div>
  );
};
