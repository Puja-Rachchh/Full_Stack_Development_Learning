import React from "react";

class Counter extends React.Component{
    constructor(props){
        super(props);
        this.state = { counter: 0};
    }
    incrementData = () => {
        this.setState({counter: this.state.counter+1})
    }


render() {
    return(
            <>
            <h1 style={{color: "blue"}}> This is counter app</h1>
            </>
        );
    }
}
export default Counter;