import React, { useEffect, useState } from "react";

function UseEffects() {
  let [count, setCount] = useState(10);
  let [count2, setCount2] = useState(0);
  let [calculation, setCaculation] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCount((count) => count + 2);
    }, 2000);
  }, []); //add empty array as second param allowing the render to happend once

  useEffect(() => {
    setCaculation(() => count2 * 2);
  }, [count2]); //add count2 as dependency variable into the array so the render
  // is happened anytime there's a change/update

  return (
    <div className="effets">
      <h2> Use useEffect for side effect such as fetching data or for timer</h2>
      <p> the is time {count} is rendered once when using empty array.</p>
      <hr />
      <h2> The useEffect hook that's dependant on Variable count2: {count2}</h2>
      <h2>
        {" "}
        The effect will happen again anytime the count is updated using click
        btn
      </h2>
      <button onClick={() => setCount2((c) => c + 1)}>+</button>
      <p>
        passing count2 {count2} as dependency into[]: [{count2}]
      </p>
      <p>calculation: {calculation} </p>
    </div>
  );
}
export default UseEffects;
