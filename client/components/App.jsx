import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Words from './Words'
import AddWord from './AddWord'

const App = () => (
  <div className='app-container'>
    <Switch>
      <Route exact path="/">
        <Words />
      </Route>
      <Route exact path="/budget" component={Title} >
      <AddWord />
      </Route>
    </Switch>
  </div>
)

export default App
