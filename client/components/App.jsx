import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Words from './Words'
import AddWord from './AddWord'

const App = () => (
  <div className='app-container'>
    <Switch>
      <Route path="/">
        <Words />
        <AddWord />
      </Route>
      <Route path="/budget">

      </Route>
    </Switch>
  </div>
)

export default App
