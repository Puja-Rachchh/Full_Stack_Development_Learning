import React from "react"
function HookDemo(){
    const [counter,setCounter] = React.useState(0);
    const [msg,setMsg] = React.useState("");

    const incrementData = () =>{
        if(counter>=5){
            setMsg("Counter cant be >5");
        }
        else{
            setMsg("");
            setCounter(counter+1);
        }
    }
    const decrementData = () =>{
        if(counter<=0){
            setMsg("Counter cant be negative");
        }
        else{
            setMsg("");
            setCounter(counter-1);
        }
    }
    return(
        <>
        <h1>Hook Demo</h1>
        <h2>Counter value is {counter}</h2>
        <input type="button" value={"+"} onClick={(incrementData)}/>
        <input type="button" value={"-"} onClick={(decrementData)}/>
        <input type="button" value={"X"} onClick={()=>setCounter(0)}/>
        {msg}
        </>
    )
}
export default HookDemo;