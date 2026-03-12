import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

function WeeklySummary() {

const [totalHours,setTotalHours]=useState(0);
const [totalTasks,setTotalTasks]=useState(0);

useEffect(()=>{

const logs = JSON.parse(localStorage.getItem("logs")) || [];

let hours = 0;

logs.forEach((log)=>{
hours += Number(log.hours);
});

setTotalHours(hours);
setTotalTasks(logs.length);

},[]);

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{padding:"40px"}}>

<h1>Weekly Summary</h1>

<h2>Total Coding Hours: {totalHours}</h2>

<h2>Tasks Completed: {totalTasks}</h2>

</div>

</div>

);

}

export default WeeklySummary;