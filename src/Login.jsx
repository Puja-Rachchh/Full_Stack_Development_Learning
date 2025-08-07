import React from "react";
function Login() {
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [isloggedIn, setIsLoggedIn] = React.useState(false);
    const login = () => {
        const storedUsername = localStorage.getItem("name");
        const storedPassword = localStorage.getItem("password");
        if (username === storedUsername && password === storedPassword) {
            alert("Login successful");
            localStorage.setItem("isLoggedIn", true);
            setIsLoggedIn(true);
        } else {
            alert("Invalid credentials");
            setIsLoggedIn(false);
        }
    }
    return(<>
        <h1>Login Page</h1>
        Username: <input type="text" placeholder="Enter Username" onChange={(e) => setUsername(e.target.value)}/><br />
        Password: <input type="password" placeholder="Enter Password" onChange={(e) => setPassword(e.target.value)}/><br />
        <button onClick={login}>Login</button>  
        </>)
    
}
export default Login;