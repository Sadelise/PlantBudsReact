import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import plantReducer from './reducers/reducer'
import ownerReducer from './reducers/ownerReducer'

const reducer = combineReducers({
    plants: plantReducer,
    owner: ownerReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

console.log(store.getState())

export default store