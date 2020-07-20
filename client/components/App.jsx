import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Title from './Title'
import Footer from './Footer'
import Welcome from './Welcome'
import Budget from './Budget'

const App = () => (
  <>
    <Title />
    <Router>
      <Route exact path='/' component={Welcome} />
      <Route exact path='/budget' component={Budget} />
    </Router>
    <Footer />
  </>
)

export default App
