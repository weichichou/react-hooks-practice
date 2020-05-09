import React, { useState, useEffect } from "react";

const Count = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Clicked ${count} times`;
  }, [count]);

  const increment = () => {
    setCount(count + 1);
  };
  return (
    <div>
      <button onClick={increment}>Clicked {count} times!</button>
    </div>
  );
};

export default Count;
