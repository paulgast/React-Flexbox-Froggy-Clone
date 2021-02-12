import React, {useState} from "react"

function LevelButton(props){

    const [level, setLevel] = useState(1)

        return(
        <div>
            <button>Précédent</button>
            <button>Niveau {level} de 24</button>
            <button>Suivant</button>
        </div>
        )
    }

export default LevelButton