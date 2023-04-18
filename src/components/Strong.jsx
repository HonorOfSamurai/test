import React, { useState } from "react";

function Strong(props) {
  const [count, setCount] = useState(props.initialCount);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  const handleReset = () => {
    setCount(0);
  };

  return (
    <div className="bg-gray-100 p-6 rounded-lg shadow-md inline-block m-7">
      <h2 className="text-2xl font-bold mb-4 text-center ">{props.title}</h2>
      <p className="text-gray-700 mb-2 text-center">
        <i>Current count: {count}</i>
      </p>
      <div className="flex space-x-4">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleIncrement}
        >
          Increment
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleDecrement}
        >
          Decrement
        </button>
        <button
          className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Strong;
