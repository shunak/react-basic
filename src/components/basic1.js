import React, { useState } from "react";

const Basic1 = (props) => {
  const clickHandler = () => {
    console.log("cilcked");
  };
  const [count, setCount] = useState(0);
  return (
    <>
      <button onClick={() => setCount(count + 1)}>count {count}</button>
      <h1>Hello {props.name}</h1>
      <h1>Hello React2</h1>
    </>
  );
};

export default Basic1;
