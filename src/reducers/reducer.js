// const initalState =
//     [
// {
//     finnishName: 'Liekkipuu',
//     scientificName: 'Delonix regia',
//     description: 'Hernekasvien heimoon kuuluva runsaasti kukkiva puu.',
//     id: 1
// },
// {
//     finnishName: 'Vuoripalmu',
//     scientificName: 'Chamaedorea elegans',
//     description: 'Luontaisesti Meksikossa ja Guatemalassa kasvava palmupuu.',
//     id: 2
// }
// ]
import { plantsRef } from "../config/firebase";
import { dispatch } from "redux";

const plantReducer = (state = [], action) => {
    switch (action.type) {
        case 'NEW_PLANT':
            return [...state, action.data]
        case 'INIT_PLANTS':
            console.log("reducer data ", action.data)
            return action.data;
        default:
            return state
    }
}
const generateId = () => Number((Math.random() * 1000000).toFixed(0))

export const plantCreation = (finnishName, scientificName, description) => {
    return {
        type: 'NEW_PLANT',
        data: {
            finnishName: finnishName,
            scientificName: scientificName,
            description: description,
            id: generateId()
        }
    }
}

export const plantInitialization = (data) => {
    console.log("data ", data)
    return {
        type: 'INIT_PLANTS',
        data
    }
}



export default plantReducer
