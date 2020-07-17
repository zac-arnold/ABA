import React from 'react'
import { connect } from 'react-redux'

import Income from './Income'
import IncomeDisplay from './Incomedisplay'


import Expense from './Expense'
import ExpenseDisplay from './ExpenseDisplay'

export const SideBar = () => {
  
  return (
    <div id='sidebar'>
      <Income />
      <IncomeDisplay />
      <Expense />
      <ExpenseDisplay />
    </div>
  )
}

export default connect()(SideBar)
