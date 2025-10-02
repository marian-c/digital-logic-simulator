import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { useSketchStorageData } from '@/app/v3/providers/dataStorageProvider';
import { getActiveSketch } from '@/app/v3/data/utils/selectors';

export const Breadcrumbs: FunctionComponentWithChildren = function () {
  const { meta } = getActiveSketch(useSketchStorageData());
  return (
    <div>
      {meta.name} {meta.isExample && '[example]'} {'>'} component 1 {'>'} component 2
    </div>
  );
};
