import React, {useState} from "react"
import Composant2 from "./Composant2"
import { ComponentContext } from "./ComposantContext"

function Composant1 () {
    <ComposantContext.Provider value={"Hello World !"}>
        <Composant2/>
    </ComposantContext.Provider>
}
export default Composant1