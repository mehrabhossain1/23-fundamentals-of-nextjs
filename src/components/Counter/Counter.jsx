"use client";
import { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <h1>This is Counter component</h1>
      <p>Count: {count}</p>
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
        onClick={incrementCount}
      >
        Increment
      </button>
      <button
        className="px-4 py-2 font-bold text-white bg-red-500 rounded hover:bg-red-700"
        onClick={decrementCount}
      >
        Decrement
      </button>
    </div>
  );
};

export default Counter;
