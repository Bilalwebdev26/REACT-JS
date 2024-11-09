// import {createSlice,nanoid} from "@reduxjs/toolkit"

// const initialState = {
//     todos:[]
// }

// export const todoSlice = createSlice({
//     name:"todos",
//     initialState,
//     reducers:{
//         addTodo:(state,action)=>{
//               const Todo={
//                 id:nanoid(),
//                 message:action.payload
//               }
//              state.todos.push(Todo) 
//         },
//         removeTodo:(state,action)=>{
//            state.todos = state.todos.filter((todo)=>(todo.id !== action.payload))
//         },
//         updateTodo:(state,action)=>{
//             state.todos = state.todos.map((todo)=>(todo.id === action.payload ? {...todo,message}:todo))
//         },
//         // isCompleteTodo:(state,action)=>{

//         // }
//     }
// })

// export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

// export default todoSlice.reducer
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: []
};

export const todoSlice = createSlice({
    name: "todos",
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                message: action.payload,
                complete: false // Default to incomplete when added
            };
            state.todos.push(todo);
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload);
        },
        updateTodo: (state, action) => {
            const { id, message } = action.payload;
            state.todos = state.todos.map((todo) =>
                todo.id === id ? { ...todo, message } : todo
            );
        },
        toggleComplete: (state, action) => {
            const todoId = action.payload;
            state.todos = state.todos.map((todo) =>
                todo.id === todoId ? { ...todo, complete: !todo.complete } : todo
            );
        }
    }
});

export const { addTodo, removeTodo, updateTodo, toggleComplete } = todoSlice.actions;

export default todoSlice.reducer;
