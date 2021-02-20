import React, { useContext } from "react"
import { ComposantContext } from "./ComposantContext"
import levelsData from "./levelsData"


function Composant2() {
    const level = useContext(ComposantContext);
        return(
            <p>{levelsData[level].instructions}</p>
        )

}

export default Composant2
