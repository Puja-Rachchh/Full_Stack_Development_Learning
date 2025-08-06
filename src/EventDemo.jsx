function EventDemo(){
    var mystyle = {
        width: "100px", height:"50px",margin: '10px'
    }
    const demo =() =>{
        alert("You clicked the button")
    }
    const printData = () =>{
        console.log("Type is")
    }
    return(
        <>
        <h1>Event Demo</h1>
        <input type="button" style={mystyle} onClick={demo} value={"Click Me"}/>
        <input type = "button" style={mystyle} onClick={()=>{alert("This is inline clicking")}} value = {"Inline"}/>
        <input type="button" style={mystyle} name="btn" value={"Button1"} onClick={printData}/>
        </>
    )
}

export default EventDemo;