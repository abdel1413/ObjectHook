import React, { useEffect, useRef, useState } from "react";

function UseRef() {
  const [inputValue, setInputValue] = useState("");
  let count = useRef(0); //initialize with current= 0;

  let inputElement = useRef(); // accessing direclty to DOM elt

  let [inputCurrentValue, setInputCurrentValue] = useState(""); //current state value
  let previousValue = useRef(""); // to acess previous state value

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  //update the count to current value
  useEffect(() => {
    count.current = count.current + 1;
  });

  //change input element to focus state whenever the button is clicked
  const handleFocus = () => {
    inputElement.current.focus();
  };

  // use useEffect to get the previous state
  useEffect(() => {
    previousValue.current = inputCurrentValue;
  }, [inputCurrentValue]);

  return (
    <div className="effets">
      <h2>
        {" "}
        useRef is used to store mutable values that do not need to re-rendering
      </h2>
      <h2> Can be used when accessing directly to DOM </h2>
      <h2> It returns only "ONE ITEM" which is an object called "current"</h2>
      <input type="text" value={inputValue} onChange={handleChange} />
      <h2>
        {" "}
        we use let ref = useRef(0) ~= `const ref= "{"ref.current = 0"}
        "`
      </h2>
      <p> here is the current value:{count.current}</p>
      <hr />
      <h2>
        {" "}
        Access directly DOM elt passing "ref" attribute with value "useRef" to
        the elt
      </h2>
      <input type="text" ref={inputElement} />
      <button onClick={handleFocus}> Focus input </button>
      <hr />
      <h2> we can track the previous state value using useRef </h2>
      <h2>
        {" "}
        This is possible because we can persist useRef value btw renders{" "}
      </h2>
      <input
        type="text"
        value={inputCurrentValue}
        onChange={(e) => setInputCurrentValue(e.target.value)}
      />
      <p> current input value is : {inputCurrentValue}</p>
      <p> Previous stat value is : {previousValue.current}</p>
    </div>
  );
}

export default UseRef;
