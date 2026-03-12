import { BrowserRouter,Routes,Route } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddLog from "./pages/AddLog";
import WeeklySummary from "./pages/WeeklySummary";

function App(){

return(

<BrowserRouter>

<Routes>

<Route path="/" element={<Login/>}/>

<Route path="/dashboard" element={<Dashboard/>}/>

<Route path="/addlog" element={<AddLog/>}/>

<Route path="/weekly" element={<WeeklySummary/>}/>

</Routes>

</BrowserRouter>

);

}

export default App;
