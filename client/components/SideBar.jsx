import React from 'react'

import Income from './Income'
import IncomeDisplay from './IncomeDisplay'

import Expense from './Expense'
import ExpenseDisplay from './ExpenseDisplay'

const SideBar = () => {
  return (
    <div id='sidebar'>
      <Income />
      <IncomeDisplay />
      <Expense />
      <ExpenseDisplay />
    </div>
  )
}

export default SideBar
