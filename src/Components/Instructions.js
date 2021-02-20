import React from "react"
import {LevelContextConsumer} from "./LevelContext"
import levelsData from "./levelsData"


function Instructions() {
        return(
            <div className='text'>
                <LevelContextConsumer>
                    {context => (
                        <p>{levelsData[context.level].instructions}</p>
                    )}
                </LevelContextConsumer>
            </div>
        )

}

export default Instructions

