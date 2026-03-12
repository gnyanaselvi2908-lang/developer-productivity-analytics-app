import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div style={{width:"200px",background:"#1e3a8a",color:"white",height:"100vh",padding:"20px"}}>
      <h2>DevTrack</h2>

      <nav>
        <p><Link to="/dashboard" style={{color:"white"}}>Dashboard</Link></p>
        <p><Link to="/addlog" style={{color:"white"}}>Add Log</Link></p>
        <p><Link to="/weekly" style={{color:"white"}}>Weekly Summary</Link></p>
      </nav>
    </div>
  );
}

export default Sidebar;