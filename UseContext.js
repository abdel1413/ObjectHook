import React, { useContext, useState } from "react";
import { createContext } from "react";

let userContext = createContext();

function UseContext() {
  let [user, setUser] = useState("John doe");

  return (
    <userContext.Provider value={user}>
      <h2>useContext allows to access nested components </h2>
      <h2>without passing the state as "props". </h2>
      <h2>
        {" "}
        But to be able to achieve this, we first need to "import createContext"
      </h2>
      <h2>
        {" "}
        And then use context provider to wrap the components that need the state
        context
      </h2>
      <p>
        {" "}
        this is the user:<b> {user} </b>from first component
      </p>
      <Component2 />
    </userContext.Provider>
  );
}
export default UseContext;

function Component2() {
  return (
    <div>
      <h2>component2</h2>
      <Component3 />
    </div>
  );
}

function Component3() {
  return (
    <div>
      <h2>Component3</h2>
      <Component4 />
    </div>
  );
}

function Component4() {
  return (
    <div>
      <h2>Component4</h2>
      <Component5 />
    </div>
  );
}

function Component5() {
  //call the createContext and pass it in useContext function
  let user = useContext(userContext);
  return (
    <div className="effects">
      <h2>
        {" "}
        this is the last component we want to access the prop (user):
        <b> {user}</b> from the first component
      </h2>
      <h2>
        {" "}
        To achieve this, we passed the variable that is holding the
        createContext into useContext function;
      </h2>
      <p>
        Hello <b>{user}</b> again{" "}
      </p>
    </div>
  );
}
