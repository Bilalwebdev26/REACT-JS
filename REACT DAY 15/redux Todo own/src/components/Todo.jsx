// import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { removeTodo, updateTodo } from "../redux/feature/Todo";
// import { useState } from "react";

// const Todo = () => {
//   const dispatch = useDispatch();
//   const todos = useSelector((state) => state.todos);
//   const [todoMsg, setTodoMsg] = useState(todos.todos);
//   const [istodoEditable, setIstodoEditable] = useState(false);
//   return (
//     <div>
//       {todos.map((todo) => {
//         return (
//           <li key={todo.id}>
//             {todo.message}
//             <button
//               onClick={() => {
//                 dispatch(removeTodo(todo.id));
//               }}
//             >
//               Delete
//             </button>
//             <button onClick={()=>{dispatch(updateTodo(todo.id))}}>Update</button>
//           </li>
//         );
//       })}
    
//     </div>
//   );
// };

// export default Todo;
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeTodo, updateTodo, toggleComplete } from "../redux/feature/Todo";

const Todo = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todos);
  const [editableTodoId, setEditableTodoId] = useState(null);
  const [todoMsg, setTodoMsg] = useState("");

  return (
    <div>
      {todos.map((todo) => {
        const isEditable = editableTodoId === todo.id;
        const handleSave = () => {
          dispatch(updateTodo({ id: todo.id, message: todoMsg, complete: todo.complete }));
          setEditableTodoId(null); // Make it read-only again
        };

        return (
          <li key={todo.id} className="flex items-center space-x-4">
            <input
              type="checkbox"
              checked={todo.complete}
              onChange={() => dispatch(toggleComplete(todo.id))}
              className="cursor-pointer"
            />

            {isEditable ? (
              <input
                type="text"
                value={todoMsg}
                onChange={(e) => setTodoMsg(e.target.value)}
                className="border px-2 py-1 rounded outline-none"
              />
            ) : (
              <span className={todo.complete ? "line-through text-gray-500" : ""}>
                {todo.message}
              </span>
            )}

            <button
              onClick={() => {
                if (isEditable) {
                  handleSave();
                } else {
                  setEditableTodoId(todo.id);
                  setTodoMsg(todo.message); // Pre-fill with current message
                }
              }}
              className="bg-blue-500 text-white px-2 py-1 rounded"
            >
              {isEditable ? "Save" : "Edit"}
            </button>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="bg-red-500 text-white px-2 py-1 rounded"
            >
              Delete
            </button>
          </li>
        );
      })}
    </div>
  );
};

export default Todo;
