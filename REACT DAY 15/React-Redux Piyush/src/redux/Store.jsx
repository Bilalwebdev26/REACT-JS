import { configureStore } from '@reduxjs/toolkit'
import { counterSlice } from './Slice/counter'

export const store = configureStore({
  reducer: {
    counter:counterSlice.reducer,
  },
})