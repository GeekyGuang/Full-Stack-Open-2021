import React from 'react'
import ReactDOM from 'react-dom'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import noteReducer from './reducers/noteReducer'
import filterReducer from './reducers/filterReducer'
import App from './App'
import { filterChange } from './reducers/filterReducer'
import { createNote } from './reducers/noteReducer'

const reducer = combineReducers({
  notes: noteReducer,
  filter: filterReducer,
})

const store = createStore(reducer)

console.log(store.getState())

const renderApp = () => {
  ReactDOM.render(
    // <Provider store={store}>
    //   <App />
    // </Provider>,
    <div />,
    document.getElementById('root')
  )
}

renderApp()
// store.subscribe(renderApp)

store.subscribe(() => console.log(store.getState()))
store.dispatch(filterChange('IMPORTANT'))
store.dispatch(
  createNote('combineReducers forms one reducer from many simple reducers')
)
