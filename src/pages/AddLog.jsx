import { useState } from "react";
import Sidebar from "../components/Sidebar";

function AddLog(){

const [date,setDate]=useState("");
const [hours,setHours]=useState("");
const [task,setTask]=useState("");

const addLog=()=>{

const newLog={date,hours,task};

let logs = JSON.parse(localStorage.getItem("logs")) || [];

logs.push(newLog);

localStorage.setItem("logs",JSON.stringify(logs));

alert("Log Added ✅");

};

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{padding:"40px"}}>

<h1>Add Log</h1>

<input type="date" onChange={(e)=>setDate(e.target.value)} />

<br/><br/>

<input type="number" placeholder="Hours"
onChange={(e)=>setHours(e.target.value)} />

<br/><br/>

<input type="text" placeholder="Task"
onChange={(e)=>setTask(e.target.value)} />

<br/><br/>

<button onClick={addLog}>Add Log</button>

</div>

</div>

);

}

export default AddLog;