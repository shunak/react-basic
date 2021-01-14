import React, { useState, useEffect } from "react";

const BasicuseEffect = () => {
  const [count, setCount] = useState(0); // 0 is initial value
  const [item, setItem] = useState(""); // create another state

  useEffect(() => {
    console.log("useEffect nvoked");
  }, [count]);

  return (
    <div>
      <button onClick={() => setCount((precCount) => precCount + 1)}>
        Click {count}
      </button>
      <input
        type="text"
        value={item}
        onChange={(evt) => setItem(evt.target.value)}
      />
    </div>
  );
};

export default BasicuseEffect;
