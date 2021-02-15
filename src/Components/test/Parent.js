import React from "react"
import Child1 from "./Child"

class Parent extends React.Component {

    state = { message: "" }

    callbackFunction = (childData) => {
          this.setState({message: childData})
    }
    
    render() {
            return (
                <div>
                     <Child1 parentCallback = {this.callbackFunction}/>
                     <p> {this.state.message} </p>
                </div>
            );
    }
}

export default Parent