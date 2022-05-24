import { useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState<number>(0);

  return (
    <div>
      <div>{counter}</div>
      <button onClick={() => setCounter(counter + 1)}>+</button>
    </div>
  );
};

export default Counter;
