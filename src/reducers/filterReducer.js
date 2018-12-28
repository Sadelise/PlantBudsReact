const filterReducer = (state = [], action) => {
    switch (action.type) {
        case 'SET_FILTERED_LIST':
            return action.list
        default:
            return state
    }
}
export const filterChange = (list) => {
    return {
        type: 'SET_FILTERED_LIST',
        list
    }
}

export default filterReducer