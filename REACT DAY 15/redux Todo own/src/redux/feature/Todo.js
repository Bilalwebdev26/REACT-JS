import {createSlice,nanoid} from "@reduxjs/toolkit"

const initialState = {
    todos:[]
}

export const todoSlice = createSlice({
    name:"todos",
    initialState,
    reducers:{
        addTodo:(state,action)=>{
              const Todo={
                id:nanoid(),
                message:action.payload
              }
             state.todos.push(Todo) 
        },
        removeTodo:(state,action)=>{
           state.todos = state.todos.filter((todo)=>(todo.id !== action.payload))
        },
        updateTodo:(state,action)=>{
            state.todos = state.todos.map((todo)=>(todo.id === action.payload ? {...todo,message}:todo))
        },
        // isCompleteTodo:(state,action)=>{

        // }
    }
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions

export default todoSlice.reducer