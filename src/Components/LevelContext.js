import React from "react"
const {Provider, Consumer} = React.createContext()

class LevelContextProvider extends React.Component {

    state = {
        level: 0
    }

    decrementLevel = () => {
        this.setState(prevState => {
            return {
                level: prevState.level - 1
            }
        })
    }

    incrementLevel = () => {
        this.setState(prevState => {
            return {
                level: prevState.level + 1
            }
        })
    }

    render() {
        return (
            <Provider value={{level: this.state.level, decrementLevel: this.decrementLevel, incrementLevel: this.incrementLevel}}>
                {this.props.children}
            </Provider>
        )

    }
}

export {LevelContextProvider, Consumer as LevelContextConsumer}