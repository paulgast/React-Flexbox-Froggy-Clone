import React from "react"
import Text from "./Text"

function Instructions() {
    return(
        <Text>
            <div className="text">
                <p>
                    {"Bienvenue à Flexbox Froggy, un jeu où vous aidez Froggy la grenouille et ses amis en écrivant du code CSS! Guidez cette grenouille au nénuphar à la droite de l'étang en utilisant la propriété justify-content, qui aligne les éléments horizontalement et accepte les valeurs suivantes:"}
                    <ul>
                        <li><span className="bold">{"flex-start"}</span>{" : Les éléments s'alignent au côté gauche du conteneur."}</li>
                        <li><span className="bold">{"flex-end"}</span>{" : Les éléments s'alignent au côté droit du conteneur."}</li>
                        <li><span className="bold">{"center"}</span>{" : Les éléments s'alignent au centre du conteneur."}</li>
                        <li><span className="bold">{"space-between"}</span>{" : Les éléments s'affichent avec un espace égal entre eux."}</li>
                        <li><span className="bold">{"space-around"}</span>{" : Les éléments s'affichent avec un espacement égal à l'entour d'eux."}</li>
                    </ul>
                    <p>{"Par exemple, "}<span className="bold">{"justify-content: flex-end;"}</span> {"bougera la grenouille vers la droite."}</p>
                </p>
            </div>
        </Text>
    )
}

export default Instructions

