import React from "react";

function Sum2() {
    const [no1, setNo1] = React.useState(0);
    const [no2,setNo2] = React.useState(0);
    const [choice, setChoice] = React.useState("");
    const [ans, setAns] = React.useState("");

    const doProcess = () => {
        if (choice === "add") {
        var c = parseInt(no1) + parseInt(no2);
        setAns("Sum is: " + c);
        } else if (choice === "sub") {
        var c = parseInt(no1) - parseInt(no2);
        setAns("Sub is: " + c);
        } else {
        setAns("Select Choice");
        }
    };

    return(<>
    <h1>Sum Demo with hooks</h1>
    No1 : <input type="text" onChange={(e)=> setNo1(e.target.value)}/>
    <br />
    No2 : <input type="text" onChange={(e)=> setNo2(e.target.value)}/>
    <br/>
    <input type="radio" value="add" name="choice" onChange={(e)=> setChoice(e.target.value)}/> Add<br/>
    <input type="radio" value="sub" name="choice" onChange={(e)=> setChoice(e.target.value)}/> Sub<br/>
    <br/>
    <button onClick={doProcess}>Calculate</button>
    <h2>{ans}</h2>
    </>)
}

export default Sum2;