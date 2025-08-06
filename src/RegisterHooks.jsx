import React from "react";
function RegisterHooks() {
    const [name, setname] = React.useState("");
    const [email, setemail] = React.useState("");
    const [number, setnumber] = React.useState(0);
    const [semester, setsemester] = React.useState("");
    const [choice, setChoice] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [password, setPassword] =React.useState("");
    const [confirmPassword, setConfirmPassword] = React.useState("");
    const [agreement, setagreement] = React.useState(false);
    const [errmsg, setErrmsg] = React.useState({});

    const doValidation = () => {
        let errors = {};
        let isvalid = true;
        if (name =="") {
            isvalid = false;
            errors.name = "Please enter your name";
        }
        if (email == "") {
            isvalid = false;
            errors.email = "Please enter your email";
        }
        if (number.length !== 10) {
            isvalid = false;
            errors.number = "Please enter mobile number of 10 digits";
        }
        if (semester === "Select") {
            isvalid = false;
            errors.semester = "Please select your semester";
        }
        if (choice === "") {
            isvalid = false;
            errors.choice = "Please select your gender";
        }
        if (message === "") {
            isvalid = false;
            errors.message = "Please enter your message";
        }
        if (password === "") {
            isvalid = false;
            errors.password = "Please enter your password";
        }
        if (confirmPassword === "") {
            isvalid = false;
            errors.confirmPassword = "Please confirm your password";
        }
        if (password !== confirmPassword) {
            isvalid = false;
            errors.password = "Passwords do not match";
        }
        if (!agreement) {
            isvalid = false;
            errors.agreement = "You must agree to the terms and conditions";
        }
        setErrmsg(errors);
        return isvalid;
    }
    return(
        <>
        <h1>Welcome to Registeration Page Using Hooks</h1>
        Name: <input type="text" placeholder="Enter Name" value={name} onChange={(e) => setname(e.target.value)}/><br/>
        {errmsg.name && <span style={{color: "red"}}>{errmsg.name}</span>}<br/>
        Email: <input type="text" placeholder="Enter Email" value={email} onChange={(e) => setemail(e.target.value)}/><br/>
        {errmsg.email && <span style={{color: "red"}}>{errmsg.email}</span>}<br/>


        Mobile: <input type="text" placeholder="Enter Mobile No." value={number} onChange={(e) => setnumber(e.target.value)}/><br/>
        {errmsg.number && <span style={{color: "red"}}>{errmsg.number}</span>}<br/>

        <label htmlFor="my-dropdown">Semester:</label>
        <select onChange={(e) => setsemester(e.target.value )}>
                <option value="Select">Select</option>
                <option value="1st">1</option>
                <option value="2nd">2</option>
                <option value="3rd">3</option>
                <option value="4th">4</option>
            </select> <br />
        {errmsg.semester && <span style={{color: "red"}}>{errmsg.semester}</span>}<br/>

        Gender: <input type="radio" value="Male" name="choice" onChange={(e)=> setChoice(e.target.value)}/> Male
                <input type="radio" value="Female" name="choice" onChange={(e)=> setChoice(e.target.value)}/> Female<br/>
                <br/>
        {errmsg.choice && <span style={{color: "red"}}>{errmsg.choice}</span>}<br/>

        Message: <textarea placeholder="Enter your message" value={message} onChange={(e) => setMessage(e.target.value)}></textarea><br/>
        {errmsg.message && <span style={{color: "red"}}>{errmsg.message}</span>}<br/>

        Password:<input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)}/><br/>
        {errmsg.password && <span style={{color: "red"}}>{errmsg.password}</span>}<br/>

        Confirm Password:<input type="password" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}/><br/>
        {errmsg.confirmPassword && <span style={{color: "red"}}>{errmsg.confirmPassword}</span>}<br/>

        I agree to terms and conditions: <input type="checkbox" checked={agreement} onChange={(e) => setagreement(e.target.checked)}/><br/>
        {errmsg.agreement && <span style={{color: "red"}}>{errmsg.agreement}</span>}<br/>

        <button onClick={() => {
                if (doValidation()) {
                    alert("Registration successful!");
                }
            }}>Register</button>
        </>
    )
}
export default RegisterHooks;