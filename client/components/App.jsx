import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Welcome from './Welcome'

const App = () => (

  <Router>
      <Switch>
      <Route exact path='/' component={Welcome} />
      </Switch>
  </Router>

)

export default App
