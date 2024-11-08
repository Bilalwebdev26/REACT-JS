import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { increment,decrement } from "./redux/Slice/counter/index";

const App = () => {
  const dispatch = useDispatch()
  const count = useSelector((state)=>state.counter)
  return (
    <div>
      <button onClick={()=>{dispatch(increment())}}>Incement</button>
      <h1>Count is {count}</h1>
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>
      
    </div>
  )
}

export default App
