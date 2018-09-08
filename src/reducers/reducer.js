

const initalState = {
    plants: [
        {
            finnishName: 'Liekkipuu',
            scientificName: 'Delonix regia',
            description: 'Hernekasvien heimoon kuuluva runsaasti kukkiva puu.',
            id: 1
        },
        {
            finnishName: 'Vuoripalmu',
            scientificName: 'Chamaedorea elegans',
            description: 'Luontaisesti Meksikossa ja Guatemalassa kasvava palmupuu.',
            id: 2
        }
    ]
}

const plantReducer = (state = initalState, action) => {
    switch (action.type) {
        case 'NEW_PLANT':
            return {
                ...state,
                plants: state.plants.concat(action.data)
            }
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

export default plantReducer
