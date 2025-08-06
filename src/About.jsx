import React from "react";
class About extends React.Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div>
                <h1>About Page</h1>
                <p>This page contains information about my React application.</p>
            </div>
        );
    }
}
export default About