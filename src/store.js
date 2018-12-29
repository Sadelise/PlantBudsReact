import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import plantReducer from './reducers/reducer'
import ownerReducer from './reducers/ownerReducer'
import filterReducer from './reducers/filterReducer'

const reducer = combineReducers({
    plants: plantReducer,
    owner: ownerReducer,
    filter: filterReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store