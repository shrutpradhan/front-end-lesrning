import React,{useState} from "react";
//useState is a hook which is used to manage states of React
//hooks are predefined functions of React
import "./style.css";

export default function App1() {
  //conditional statement under react we will use ?:
  //? true=> do something
  //? false=> do something
  let [name,setName]=useState('monday')
  let [state,setState]=useState(true)
  function changeName(){
    setName("tuesday")
    setState(false)
  }
  return(
    <div>
      <button onClick={changeName}>Change name</button>
                                                  {/*to write inline event and manage state we have to write in arrow functions   */}
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
