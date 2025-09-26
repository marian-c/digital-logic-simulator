import { useState } from 'react';

export function useCounter() {
  const [counter, setCounter] = useState(1);
  const increment = () => {
    setCounter(counter + 1);
  };
  return {
    counter,
    buttonEl: <button onClick={increment}>Increment ({counter})</button>,
    increment,
  };
}
