import { useEffect, useState } from "react";
import Sidebar from "../components/Sidebar";

import { Bar } from "react-chartjs-2";

import {
Chart as ChartJS,
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
} from "chart.js";

ChartJS.register(
CategoryScale,
LinearScale,
BarElement,
Title,
Tooltip,
Legend
);

function Dashboard(){

const [logs,setLogs]=useState([]);

useEffect(()=>{

const savedLogs = JSON.parse(localStorage.getItem("logs")) || [];

setLogs(savedLogs);

},[]);

const data = {
labels: logs.map((log)=>log.date),
datasets:[
{
label:"Coding Hours",
data: logs.map((log)=>log.hours),
backgroundColor:"#3b82f6"
}
]
};

return(

<div style={{display:"flex"}}>

<Sidebar/>

<div style={{padding:"40px",width:"600px"}}>

<h1>Developer Dashboard</h1>

<Bar data={data} />

</div>

</div>

);

}

export default Dashboard;