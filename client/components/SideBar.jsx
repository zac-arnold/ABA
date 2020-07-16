import React from 'react'
import { connect } from 'react-redux'

import Income from './Income'
import IncomeDisplay from './Incomedisplay'

export const SideBar = () => {
  
  return (
    <div id='sidebar'>
      <Income />
      <IncomeDisplay />
    </div>
  )
}

export default connect()(SideBar)
