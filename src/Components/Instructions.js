import React from "react"
import Text from "./Text"

function Instructions() {
    return(
        <Text>
            <div className="text">
                <p>
                    {"Bienvenue à Flexbox Froggy, un jeu où vous aidez Froggy la grenouille et ses amis en écrivant du code CSS! Guidez cette grenouille au nénuphar à la droite de l'étang en utilisant la propriété justify-content, qui aligne les éléments horizontalement et accepte les valeurs suivantes:"}
                    <ul>
                        <li>{"flex-start : Les éléments s'alignent au côté gauche du conteneur."}</li>
                        <li>{"flex-end : Les éléments s'alignent au côté droit du conteneur."}</li>
                        <li>{"center : Les éléments s'alignent au centre du conteneur."}</li>
                        <li>{"space-between : Les éléments s'affichent avec un espace égal entre eux."}</li>
                        <li>{"space-around : Les éléments s'affichent avec un espacement égal à l'entour d'eux."}</li>
                    </ul>
                    <p>{"Par exemple, justify-content: flex-end; bougera la grenouille vers la droite."}</p>
                </p>
            </div>
        </Text>
    )
}

export default Instructions

