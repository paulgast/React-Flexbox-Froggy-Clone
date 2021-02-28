import React from "react"
import {LevelContextConsumer} from "./LevelContext"
import levelsData from "./levelsData"


function Pond() {

    const frogs = levelsData.map(function(frog){
        return (
            frog.instructions
        )
    })
    return(
        <div className="Pound">
            <h3>{frogs}</h3>
        </div>
    )
}

export default Pond