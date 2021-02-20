import React from "react"
const {Provider, Consumer} = React.createContext()

class LevelContextProvider extends React.Component {
    render() {
        return (
            <Provider value={2}>
                {this.props.children}
            </Provider>
        )

    }
}

export {LevelContextProvider, Consumer as LevelContextConsumer}