import React from "react";

function TodoList({ todos, onRemoveTodo }) {
  return (
    <>
      {todos.map(function (todo, index) {
        return (
          <ul key={index}>
            <li>
              <strong>{todo.title}:</strong>
              {todo.description}{" "}
              <button onClick={() => onRemoveTodo(index)}>
                Mark As Complete
                {/*  so that it not invoke immediately */}
              </button>
            </li>
          </ul>
        );
      })}
    </>
  );
}

export default TodoList;
