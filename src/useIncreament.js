import { useState } from "react";

export const useIncrement = () => {
  const [counter, setCount] = useState(0);

  const increment = () => {
    setCount(counter + 1);
  };
  return [counter, increment];
};
