import React,{useState} from "react";
import "./style.css";

export default function App() {
  let[test,setTest]=useState(0)
  function increment(){
    setTest(test+1)
  }
  function decrement(){
    setTest(test-1)
  }
  return(
<div>
  <button onClick={increment}>+</button>
  <div>{test}this is your state variable</div>
  <button onClick={decrement}>-</button>
  </div>
  );
}
