import React from "react"
import Text from "./Text"

function Instructions(props) {
    return(
        <div>
            <p>
            <p>Par exemple, justify-content: flex-end; bougera la grenouille vers la droite.</p>
                <ul>
                    <li>flex-start : Les éléments s'alignent au côté gauche du conteneur.</li>
                    <li>flex-end : Les éléments s'alignent au côté droit du conteneur.</li>
                    <li>center : Les éléments s'alignent au centre du conteneur.</li>
                    <li>space-between : Les éléments s'affichent avec un espace égal entre eux.</li>
                    <li>space-around : Les éléments s'affichent avec un espacement égal à l'entour d'eux.</li>
                </ul>
            </p>
        </div>
    )
}

export default Instructions