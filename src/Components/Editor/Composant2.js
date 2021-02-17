import React, { useContext } from "react"
import { ComposantContext } from "./ComposantContext"


function Composant2() {
    const msg = useContext(ComposantContext);
        return(
            <h1>{msg}</h1>
        )

}

export default Composant2
