import React, { useEffect, useState } from "react";

function Timer() {
  let [count, setCount] = useState(0);
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);
    }, 2000);

    // return function to cleanup the event listen or timer
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="effets">
      <h2>
        Need to clean an effect after it's happened so avoind memory leaking{" "}
      </h2>
      <h2>
        {" "}
        for that purpose we use return function after the settimeout function
      </h2>
      <p> We run {count} times</p>
    </div>
  );
}
export default Timer;
