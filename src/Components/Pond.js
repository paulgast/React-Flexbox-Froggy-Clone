import React from "react"
import levelsData from "./levelsData"


function Pond() {

    const frogs = levelsData.map(function(frog){
        return (
            frog.id
        )
    })

    const imageName = require('./images/frog-green-color-assist.svg')

    return(
        <div className="Pound">
            <h3>{frogs}</h3>
            <img src={imageName}/>
        </div>
    )
}

export default Pond