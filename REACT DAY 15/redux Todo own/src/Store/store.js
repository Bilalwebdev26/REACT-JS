import {configureStore} from "@reduxjs/toolkit"
import TodoReducer from "../redux/feature/Todo"
export const store = configureStore({
    reducer:TodoReducer
})