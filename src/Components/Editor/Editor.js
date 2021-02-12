import React from "react"
import LineNumber from "./LineNumber"
import Css from "./Css"

function Editor() {
    return (
        <div className='editor'>
            <LineNumber/>
            <Css/>
        </div>
    )
}

export default Editor