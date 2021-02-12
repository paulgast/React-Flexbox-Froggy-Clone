import React, {Component, useState} from "react"

class LevelButton extends Component {

    constructor(props) {
        super(props)
        this.state = {
            level: 1
        }
        this.decrement = this.decrement.bind(this);
        this.increment = this.increment.bind(this);
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

        return(
        <div>
            {this.state.level <= 1 ? 
            <button className="levelButton" disabled style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>◢</button> :
            <button className="levelButton" onClick = { this.decrement }>◢</button>
            } 

            <button className="levelButton" >Niveau {this.state.level} de 24 ▼</button>

            {this.state.level >= 24 ?
            <button className="levelButton" disabled style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>◣</button> :
            <button className="levelButton" onClick = { this.increment }>◣</button>
            }
        </div>
        )}
    }

export default LevelButton