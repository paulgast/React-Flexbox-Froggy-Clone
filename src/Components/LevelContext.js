import React, { Component } from "react"

const LevelContext = React.createContext()

class LevelContextProvider extends Component {
    render() {
        return (
            <LevelContext.Provider value={1}>
                {this.props.children}
            </LevelContext.Provider>
        )

    }
}

export default LevelContex