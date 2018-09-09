import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import plantReducer from './reducers/reducer'

const reducer = combineReducers({
    plants: plantReducer
})

const store = createStore(
    reducer,
    applyMiddleware(thunk)
)

export default store