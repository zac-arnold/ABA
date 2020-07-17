import React from 'react'

import Income from './Income'
import IncomeDisplay from './IncomeDisplay'

import Expense from './Expense'

const SideBar = () => {
  return (
    <div id='sidebar'>
      <Income />
      <IncomeDisplay />
      <Expense />
    </div>
  )
}

export default SideBar
