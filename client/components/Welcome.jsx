import React from 'react'
import { Link } from 'react-router-dom'
import Title from './Title'
import SideBar from './SideBar'

const Welcome = () => {
  return (
    <div id='welcome-page'>
      <Title />
      <SideBar />
      <div id='welcome-create-budget-button'><Link to='/budget'>Create a budget</Link></div>
    </div>
  )
}

export default Welcome
