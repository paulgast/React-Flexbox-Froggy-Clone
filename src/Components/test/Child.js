import React from "react"

class Child1 extends React.Component {
    sendData = () => {
        this.props.parentCallback("Hey Popsie, How’s it going?");
    }

    render(props) { 
        return(
            <h1>{this.props.callbackFunction}</h1>
        )
    }
};

export default Child1