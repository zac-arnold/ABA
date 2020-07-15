import React from 'react'
import { Route } from 'react-router-dom'
import Words from './Words'
import AddWord from './AddWord'

const App = () => (
  <div className='app-container'>
    <Route path="/">
      <Words />
      <AddWord />
    </Route>
  </div>
)

export default App
