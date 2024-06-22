import React, { useState } from "react";

const ComponentWithFunction = () => {
  const [count, setCount] = useState(0);
  console.log(count);
  return (
    <div>
      <button onClick={() => setCount((previous) => previous + 1)}>
        {count}
      </button>
    </div>
  );
};

export default ComponentWithFunction;
