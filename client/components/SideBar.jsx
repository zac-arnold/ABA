import React from 'react'

import Income from './Income'
import IncomeDisplay from './IncomeDisplay'

import Expense from './Expense'
import ExpenseDisplay from './ExpenseDisplay'
import ExpenseInput from './ExpenseInput'
import IncomeInput from './IncomeInput'
import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList'

const SideBar = () => {
  return (
    <>
    <IncomeInput />
    <IncomeList />
    <ExpenseInput />
    <ExpenseList />
    {/* <Income />
    <IncomeDisplay />
    <Expense />
    <ExpenseDisplay /> */}
    </>
  )
}

export default SideBar
