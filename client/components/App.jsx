import React from 'react'
import { Route, BrowserRouter as Router } from 'react-router-dom'

import Title from './Title'
import Footer from './Footer'
import Budget from './Budget'

const App = () => (
  <>
    <Title />
    <Router>
      <Route exact path='/' component={Budget} />
    </Router>
    <Footer />
  </>
)

export default App
