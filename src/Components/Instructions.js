import React, { useContext } from "react"
import {LevelContextConsumer} from "./LevelContext"
import levelsData from "./levelsData"


function Instructions() {
        return(
            <LevelContextConsumer>
                {level => (
                    <h1>{levelsData[level].instructions}</h1>
                )}
            </LevelContextConsumer>
        )

}

export default Instructions

