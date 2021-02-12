import React from "react"
import Text from "./Text"
import levelsData from "./levelsData"


function Instructions() {
    return(
        <Text>
            {levelsData[0].instructions}
        </Text>
    )
}

export default Instructions

