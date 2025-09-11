import React from 'react';
import type { FunctionComponentWithChildren } from '@/types/r-ui';

const SelectedSketchContext = React.createContext<{
  selectedSketchUUID: string | undefined;
  setSelectedSketchUUID: React.Dispatch<React.SetStateAction<string | undefined>>;
}>(null as any);

export const SketchProvider: FunctionComponentWithChildren = ({ children }) => {
  // TODO: mix in localstorage lookup
  const [selectedSketchUUID, setSelectedSketchUUID] = React.useState<string | undefined>();
  const selectedSketchData = React.useMemo(() => {
    return { selectedSketchUUID, setSelectedSketchUUID };
  }, [selectedSketchUUID, setSelectedSketchUUID]);
  return <SelectedSketchContext value={selectedSketchData}>{children}</SelectedSketchContext>;
};

export const useSketch = () => {
  const { selectedSketchUUID, setSelectedSketchUUID } = React.useContext(SelectedSketchContext);

  return { selectedSketchUUID, setSelectedSketchUUID };
};
