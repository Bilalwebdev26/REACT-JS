import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateTodo, removeTodo } from "../feature/Todo/TodoSlice";

const Todos = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  return (
    <>
      <div className="">
        <h1>Todos</h1>
        {todos.length > 0 ?  (      
        todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <button
                onClick={() => {
                  dispatch(removeTodo(todo.id));
                }}
              >
                Delete
              </button>
            </li>
          );
        }))
:(<p>No Todo Add</p>)
    }
      </div>
    </>
  );
};

export default Todos;
