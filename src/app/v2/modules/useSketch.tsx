import React from 'react';
import type { FunctionComponentWithChildren } from '@/types/r-ui';
import { useLocalStorageCustom } from '@/hooks/useLocalStorage';
import { defaultExampleUUID } from '@/app/v2/data/loadExample.';

const SelectedSketchInfoContext = React.createContext<{
  selectedSketchUUID: string;
  setSelectedSketchUUID: React.Dispatch<React.SetStateAction<string>>;
}>(null as any);

export const SketchProvider: FunctionComponentWithChildren = ({ children }) => {
  const [selectedSketchUUID, setSelectedSketchUUID] = React.useState<string>('');

  const selectedSketchInfo = useLocalStorageCustom(
    'v2selectedSketch',
    'default',
    '',
    defaultExampleUUID,
    selectedSketchUUID ?? defaultExampleUUID,
  );

  const selectedSketchData = React.useMemo(() => {
    return { selectedSketchUUID: selectedSketchUUID || selectedSketchInfo, setSelectedSketchUUID };
  }, [selectedSketchUUID, selectedSketchInfo, setSelectedSketchUUID]);

  return (
    <SelectedSketchInfoContext value={selectedSketchData}>{children}</SelectedSketchInfoContext>
  );
};

export const useSelectedSketchInfo = () => {
  return React.useContext(SelectedSketchInfoContext);
};
