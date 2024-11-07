import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../feature/Todo/TodoSlice.js";

export const store = configureStore({
  reducer: todoReducer,
});
