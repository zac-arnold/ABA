import React from 'react'
import { connect } from 'react-redux'

import ExpenseInput from './ExpenseInput'
import IncomeInput from './IncomeInput'
import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList'
import PopupAdvice from './PopupAdvice'
import WaitIndicator from './WaitIndicator'

class SideBar extends React.Component {
  render () {
    return (
      <>
        <IncomeInput />
        <WaitIndicator />
        <IncomeList />
        <ExpenseInput />
        <WaitIndicator />
        <ExpenseList />
        {(this.props.incomes[0] || this.props.expenses[0]) ? <PopupAdvice /> : <PopupAdvice />}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    incomes: state.income,
    expenses: state.expense
  }
}

export default connect(mapStateToProps)(SideBar)
