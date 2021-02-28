import test from '../images/test.jpg';

const levelsData = [

    {
        id: 0,
        instructions: {test},
        properties: [
            {text: "flex-start : Les éléments s'alignent au côté gauche du conteneur."},
            {text: "flex-end : Les éléments s'alignent au côté droit du conteneur."}, 
            {text: "center : Les éléments s'alignent au centre du conteneur."}, 
            {text: "space-between : Les éléments s'affichent avec un espace égal entre eux."},
            {text: "space-around : Les éléments s'affichent avec un espacement égal à l'entour d'eux."}
        ], 
        styles: {
            "#textContainer": {
              "border": "blue solid 2px;",
              "background-color": "#ff0;"
            },
    },

        id: 1,
        instructions: "Utilisez encore justify-content pour aider ces grenouilles à se rendre à leurs nénuphars. Souvenez-vous que cette propriété CSS aligne les éléments horizontalement et accepte les valeurs suivantes :",
        properties: [
            {text: "flex-start : Les éléments s'alignent au côté gauche du conteneur."},
            {text: "flex-end : Les éléments s'alignent au côté droit du conteneur."},
            {text: "center : Les éléments s'alignent au centre du conteneur."},
            {text: "space-between : Les éléments s'affichent avec un espace égal entre eux."},
            {text: "space-around : Les éléments s'affichent avec un espacement égal à l'entour d'eux."}]
    },
    {
        id: 2,
        instructions: "Aidez les trois grenouilles à trouver leurs nénuphars en utilisant seulement justify-content. Cette fois-ci, les nénuphars ont beaucoup d'espace tout autour d'eux. Si vous oubliez les valeurs possibles pour une propriété, vous pouvez survoler le nom de cette propriété pour les voir. Essayez de survoler justify-content.",
        properties: [
            {text: "flex-start : Les éléments s'alignent au côté gauche du conteneur."},
            {text: "flex-end : Les éléments s'alignent au côté droit du conteneur."},
            {text: "center : Les éléments s'alignent au centre du conteneur."},
            {text: "space-between : Les éléments s'affichent avec un espace égal entre eux."},
            {text: "space-around : Les éléments s'affichent avec un espacement égal à l'entour d'eux."}]
    },
    {
        id: 3,
        text: "Clean gecko tank",
        completed: false
    },
    {
        id: 4,
        text: "Mow lawn",
        completed: true
    },
    {
        id: 5,
        text: "Catch up on Arrested Development",
        completed: false
    }
]

export default levelsData