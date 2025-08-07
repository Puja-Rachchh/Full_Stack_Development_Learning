import React from 'react'
function Signup() {

    const[name, setName]= React.useState("");
    const[mobile,setMobile]=React.useState("");
    const[email,setEmail]= React.useState("");
    const[password, setPassword]= React.useState("");
    const doProcess = () => {
        
            localStorage.setItem("name", name);
            localStorage.setItem("mobile", mobile);
            localStorage.setItem("email", email);
            localStorage.setItem("password", password);
            alert("Signup successful");
        
    }
    return ( <>
    <h1>Signup Page</h1>
    Name: <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setName(e.target.value)}/><br />
    Mobile: <input type="text" placeholder="Enter Mobile No." value={mobile} onChange={(e) => setMobile(e.target.value)}/><br />
    Email: <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)}/><br />
    Password: <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}
    /><br />
    <button onClick={doProcess}>Signup</button>
    </> );
}

export default Signup;