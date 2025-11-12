import React from 'react';

export const useFirstMount = (): boolean => {
  const [firstMount, setFirstMount] = React.useState(true);
  React.useEffect(() => {
    setFirstMount(false);
  }, []);
  return firstMount;
};
