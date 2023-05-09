import React, { useReducer } from "react";

let initalState = [{ age: 30 }]; //will come back to it
let reducer = (state, action) => {
  if (action.type === "increment_age") {
    return { age: state.age + 1 };
  }
  throw Error("Unknown action");
};

export default function AgeCounter() {
  let [state, dispatch] = useReducer(reducer, { age: 30 });

  return (
    <div className="effets">
      <h2> this is age incrementer using useReducer hook </h2>
      <button
        type="button"
        onClick={() => {
          dispatch({ type: "increment_age" });
        }}
      >
        Increment{" "}
      </button>
      <p> Hello, You are now {state.age} years of age</p>
    </div>
  );
}
