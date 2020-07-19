import React from 'react'

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
    </>
  )
}

export default SideBar
