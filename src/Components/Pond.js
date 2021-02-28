import React from "react"
import levelsData from "./levelsData"
import test from '../images/test.jpg';


function Pond() {

    const frogs = levelsData.map(function(frog){
        return (
            frog.instructions[0]
        )
    })


    return(
        <div className="Pound">
            <h3>{frogs}</h3>
        </div>
    )
}

export default Pond