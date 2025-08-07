import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
function Dasboard() {
    const mynav= useNavigate();
    useEffect(() => {
        if (!localStorage.getItem("isLoggedIn")) {
            alert("Please login first");
            mynav("/login");
        }
    }, []);
    return ( <>
    <h1>Dashboard</h1>
    <h2>Hello, {localStorage.getItem("name")}</h2>
    <button onClick={() => {
        localStorage.setItem("isLoggedIn", false);
        alert("Logged out successfully");
        mynav("/login");
    }}>Logout</button>
    </> );
}

export default Dasboard;