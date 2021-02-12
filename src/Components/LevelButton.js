import React, {useState} from "react"

function LevelButton(){

    const [level, setLevel] = useState(1)

    function decrement() {
        setLevel(prevLevel => prevLevel - 1)
    }

    function increment() {
        setLevel(prevLevel => prevLevel + 1)
    }
        return(
        <div>
            <button className="levelButton"onClick = { decrement } >◢</button>
            <button className="levelButton">Niveau {level} de 24 ▼</button>
            <button className="levelButton"onClick = { increment }>◣</button>
        </div>
        )
    }

export default LevelButton