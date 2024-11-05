import React, { useContext } from "react";
export const todoContext = React.createContext({
  todos: [
    {
      id: 1,
      todo: "Todo msg",
      complete: false,
    },
  ],
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
  deleteTodo: (id) => {},
  toggleComplete: (id) => {},
});

export const useTodo = () => {
  return useContext(todoContext);
};

export const TodoProvider = todoContext.Provider;
