import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {

const [email,setEmail] = useState("");
const [password,setPassword] = useState("");

const navigate = useNavigate();

const handleLogin = () => {

if(email === "admin@gmail.com" && password === "1234"){

navigate("/dashboard");

}
else{

alert("Invalid Login ❌");

}

};

return(

<div className="login-container">

<div className="login-left">

<h1>DevTrack</h1>

<p>
Track your daily coding productivity,
analyze weekly progress and maintain
your coding streak.
</p>

<ul>
<li>📊 Coding Analytics</li>
<li>🔥 Streak System</li>
<li>📅 Weekly Summary</li>
</ul>

</div>

<div className="login-right">

<div className="login-card">

<h2>Login</h2>

<input
type="email"
placeholder="Email"
onChange={(e)=>setEmail(e.target.value)}
/>

<input
type="password"
placeholder="Password"
onChange={(e)=>setPassword(e.target.value)}
/>

<button onClick={handleLogin}>
Login
</button>

</div>

</div>

</div>

);

}

export default Login;