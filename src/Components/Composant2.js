import React, { useContext } from "react"
import { ComposantContext } from "./ComposantContext"
import levelsData from "./levelsData"


function Composant2() {
    const msg = useContext(ComposantContext);
        return(
            <h1>{levelsData[0].instructions}</h1>
        )

}

export default Composant2
