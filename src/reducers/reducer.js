// const initalState =
//     [
//         {
//             finnishName: 'Liekkipuu',
//             scientificName: 'Delonix regia',
//             description: 'Hernekasvien heimoon kuuluva runsaasti kukkiva puu.',
//             id: 1
//         },
//         {
//             finnishName: 'Vuoripalmu',
//             scientificName: 'Chamaedorea elegans',
//             description: 'Luontaisesti Meksikossa ja Guatemalassa kasvava palmupuu.',
//             id: 2
//         }
//     ]

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

export const plantCreation = (id, finnishName, scientificName, description) => {
    return {
        type: 'NEW_PLANT',
        data: {
            id: id,
            finnishName: finnishName,
            scientificName: scientificName,
            description: description,
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
