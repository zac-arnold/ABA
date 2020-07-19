import React from 'react'

import ExpenseInput from './ExpenseInput'
import IncomeInput from './IncomeInput'
import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList'
import SaveBudget from './SaveBudget'

const SideBar = () => {
  return (
    <>
      <IncomeInput />
      <IncomeList />
      <ExpenseInput />
      <ExpenseList />
      <SaveBudget />
    </>
  )
}

export default SideBar
