import React, {useState} from "react"
import Composant2 from "./Composant2"
import { ComposantContext } from "./ComposantContext"

function Composant1 () {
    return(
    <ComposantContext.Provider value={1}>
        <Composant2/>
    </ComposantContext.Provider>
    )
}
export default Composant1