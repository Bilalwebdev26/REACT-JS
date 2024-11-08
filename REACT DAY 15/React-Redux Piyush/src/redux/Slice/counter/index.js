import { createSlice } from "@reduxjs/toolkit";

export const counterSlice= createSlice({
    initialState:0,
    name:"counter",
    reducers:{
        increment:(state,action)=>{
             return state+1
        },
        decrement:(state,action)=>{
            return state-1
        }
    }
})

export const {increment,decrement}=counterSlice.actions
export default counterSlice.reducer