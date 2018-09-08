import React from 'react'
import ReactDOM from 'react-dom'
import { createStore } from 'redux'
import plantReducer from './reducers/reducer'
import { Provider } from 'react-redux'
import App from './components/App'

const store = createStore(plantReducer)

console.log(store.getState())

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
)
