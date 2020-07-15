import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import { Route } from 'react-router-dom'

import reducers from './reducers'
import App from './components/App'

const store = createStore(reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

document.addEventListener('DOMContentLoaded', () => {
  render(
    <Provider store={store}>
      <Route path="/" >
        Hello World
        <App />
      </Route>
    </Provider>,
    document.getElementById('app')
  )
})
