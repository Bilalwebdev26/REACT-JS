import React from "react";
import { addTodo } from "../redux/feature/Todo";
import { useState } from "react";
import { useDispatch } from "react-redux";

const AddTodo = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();

  const addTodoHandler = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    dispatch(addTodo(input.trim()));
    setInput("");
  };
  return (
    <div>
      <form onSubmit={addTodoHandler} action="">
        <input
          type="text"
          value={input}
          placeholder="Enter Todo"
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddTodo;
