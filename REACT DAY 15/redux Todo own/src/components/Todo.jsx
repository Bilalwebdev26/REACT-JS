import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo } from "../redux/feature/Todo";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  return (
    <div>
      {todos.map((todo) => {
        return (
          <li key={todo.id}>
            {todo.message}
            <button
              onClick={() => {
                dispatch(removeTodo(todo.id));
              }}
            >
              Delete
            </button>
            <button onClick={()=>{dispatch(updateTodo(todo.id))}}>Update</button>
          </li>
        );
      })}
    </div>
  );
};

export default Todo;
