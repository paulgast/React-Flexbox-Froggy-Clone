import React from "react"
import {LevelContextConsumer} from "./LevelContext"
import levelsData from "./levelsData"


function Instructions() {
        return(
            <LevelContextConsumer>
                {context => (
                    <p>{levelsData[context.level].instructions}</p>
                )}
            </LevelContextConsumer>
        )

}

export default Instructions

