import React from 'react'
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'

import Welcome from './Welcome'
import Title from './Title'

const App = () => (
  <div className='app-container'>
    <Router>
      <Switch>
        <Route exact path='/' component={Welcome} />
        {/* <Route exact path='/' component={FoodList} />
        <Route exact path='/foods/:id' component={FoodDetails}/> */}
      </Switch>
    </Router>

  </div>
)

export default App
