import React from 'react'
import { connect } from 'react-redux'

import Income from './Income'
import IncomeDisplay from './Incomedisplay'


import Expense from './Expense'

export const SideBar = () => {
  
  return (
    <div id='sidebar'>
      <Income />
      <IncomeDisplay />
      <Expense />
    </div>
  )
}

export default connect()(SideBar)
