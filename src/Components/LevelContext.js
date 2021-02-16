import React from "react"
const {Provider, Consumer} = React.createContext()

class LevelContextProvider extends Component {
    state = {
        level: 1
    }

    decrement() {
        this.setState(state => ({
            level: state.level - 1
        })
        )
    }

    increment() {
        this.setState(state => ({
            level: state.level + 1
        })
        )
    }
    
    render() {
        return (
            <Provider value={{theme: this.state.theme, toggleTheme: this.toggleTheme}}>
                {this.props.children}
            </Provider>
        )
    }
}

export {LevelContextProvider, Consumer as LevelContextConsumer}