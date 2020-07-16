import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import Welcome from './Welcome'

const App = () => (

  <Router>
    <Switch>
      <Route exact path='/' component={Welcome} />
      {/* <Route exact path='/' component={FoodList} />
        <Route exact path='/foods/:id' component={FoodDetails}/> */}
    </Switch>
  </Router>

)

export default App
