import React, { useState } from "react";
function ObjectArray() {
  let [car, setCar] = useState({
    brand: "Ford",
    model: "Musting",
    year: 2020,
    color: "green",
  });

  const changeColor = () => {
    setCar((prevState) => {
      return { ...prevState, color: "blue" };
    });
  };

  return (
    <div className="effets">
      <h2>
        {" "}
        Updating a single property color {car.color} without overwritting the
        entire state
      </h2>
      <p>
        We'll do it by destructing the previous state and then just update the
        color
      </p>
      <button type="button" onClick={changeColor}>
        {" "}
        blue
      </button>
    </div>
  );
}
export default ObjectArray;
