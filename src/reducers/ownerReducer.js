const ownerReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_OWNER':
            return action.data
        default:
            return state
    }
}

export const setOwner = (email) => {
    return {
        type: 'SET_OWNER',
        data: {
            user: email
        }
    }
}

export default ownerReducer
