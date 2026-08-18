import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const increaseByFive = () => {
    setCount(count + 5);
  };

  return (
    <div>
      <h1>Counter: {count}</h1>

      <button onClick={increment}>Increment</button>

      <button onClick={decrement}>Decrement</button>

      <button onClick={increaseByFive}>Increase by 5</button>
    </div>
  );
}

export default Counter;