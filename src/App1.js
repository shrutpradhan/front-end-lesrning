import React,{useState} from "react";
import "./style.css";

export default function App1() {
  let [name,setName]=useState('monday')
  let [state,setState]=useState(true)
  function changeName(){
    setName("tuesday")
    setState(false)
  }
  return(
    <div>
      <button onClick={changeName}>Change name</button>
      {                                                     }
      <button onClick={()=>{setName('monday')}}>reset</button>
      <div>name</div>
      {
        state
        ?<div style={{backgroundColor:"red"}}>when there is monday</div>
        :<div style={{backgroundColor:"blue"}}>when there is tuesday</div>
        
      }
      
</div>
  );
    }