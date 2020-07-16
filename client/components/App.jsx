import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Welcome from './Welcome'
import Budget from './Budget'

const App = () => (

  <>
    <Router>

      <Route exact path='/' component={Welcome} />
      <Route exact path='/budget' component={Budget} />

    </Router>
  </>
)

export default App
