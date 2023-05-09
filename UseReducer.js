import React, { useReducer } from "react";

// //this is our initial state;
const initialTodos = [
  { id: 1, title: "todo 1", completed: false },
  { id: 2, title: "todo 2", completed: false },
  { id: 3, title: "todo 3", completed: false },
];

// build a reducer state logic function
const reducer = (state, action) => {
  switch (action.type) {
    case "COMPLETE":
      return state.map((todo) => {
        if (todo.id === action.id) {
          return { ...todo, completed: !todo.completed };
        } else {
          return todo;
        }
      });
    default:
      return state;
  }
};

// //a function to use useReducer hook
function Todos() {
  let [todos, dispatch] = useReducer(reducer, initialTodos);
  //todos here is method to initial state during the first render.
  //dispatch is method to update the state and trigger a re-render

  const handleChanges = (todo) => {
    //update the state of different
    //value and trigger a re-render to happen
    //You need to pass the action as the only argument to the dispatch function:
    dispatch({ type: "COMPLETE", id: todo.id });
  };
  return (
    <div className="effets">
      <h2>
        {" "}
        The reducer has two params: the 1st is custom logic state and the 2nd is
        initial state which is an array of object
      </h2>
      {todos.map((todo) => {
        return (
          <div>
            <label>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleChanges(todo)}
              />
              {todo.title}
            </label>
          </div>
        );
      })}
    </div>
  );
}

export default Todos;
