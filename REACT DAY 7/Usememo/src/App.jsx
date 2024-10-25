import { useState } from "react";
import "./App.css";
import { useMemo } from "react";

function App() {
  const [add, setAdd] = useState(0);
  const [sub, setSub] = useState(0);
  const addCount = () => {
    setAdd(add + 1);
  };
  const subCount = () => {
    setSub(sub - 1);
  };
  const multmemo = useMemo(  function multiply() {
    console.log("--Multiply--")
    return add * 100;
  },[add])

  return (
    <>
      <h1>Learning Usememo</h1>
      {multmemo}
      <br />
      <button onClick={addCount}>Addition</button>
      <span>Add : {add}</span>
      <br />
      <button onClick={subCount}>Subtraction</button>
      <span>Subtract : {sub}</span>
    </>
  );
}

export default App;
