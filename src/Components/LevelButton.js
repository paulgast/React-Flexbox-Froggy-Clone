import React from "react"
import {LevelContextConsumer} from "./LevelContext"

function LevelButton(props) {
    return (
        <LevelContextConsumer>
            {context => (
                <div>
                    {context.level <= 1 ? 
                        <button className="levelButton" disabled style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>◢</button> :
                        <button className="levelButton" onClick = {context.decrementLevel}>◢</button>
                        } 

                    <button className="levelButton" >Niveau {context.level} de 24 ▼</button>

                    {context.level  >= 24 ?
                        <button className="levelButton" disabled style={{backgroundColor: 'rgba(255,255,255,0.5)'}}>◣</button> :
                        <button className="levelButton" onClick = {context.incrementLevel}>◣</button>
                    }
                </div>
            )}
        </LevelContextConsumer>
    )
}


export default LevelButton