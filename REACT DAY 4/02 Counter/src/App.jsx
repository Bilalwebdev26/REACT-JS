import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let[counter,setCounter]=useState(0)//use to change/propogate in ui updation
  const addvalue = () => {
    console.log("Start");
    if(counter>=20){
      return ;
    }
    counter = counter+1;
    setCounter(counter)
    console.log("Counter val is :", counter);
  };
  const remvalue = () => {
    console.log("Start");
    if(counter<=0){
      return
    }
    counter = counter-1;
    setCounter(counter)
    console.log("Counter val is :", counter);
  };
  return (
    <>
      <h1>Counter using hook</h1>
      <h2>counter value : {counter}</h2>
      <br />
      <button onClick={addvalue}>Add value</button>
      <button onClick={remvalue}>Remove Value</button>
    </>
  );
}

export default App;
