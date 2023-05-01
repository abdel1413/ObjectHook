import React, { useEffect, useState } from "react";

function UseEffects() {
  let [count, setCount] = useState(10);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 2);
    }, 2000);
  }, []); //add empty array as second param allowing the render to happend once
  return (
    <div>
      <h2> Use useEffect for side effect such as fetching data or for timer</h2>
      <p>the rendered time is {count}</p>
    </div>
  );
}
export default UseEffects;
