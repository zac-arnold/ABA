import React from 'react'
import { connect } from 'react-redux'

import ExpenseInput from './ExpenseInput'
import IncomeInput from './IncomeInput'
import ExpenseList from './ExpenseList'
import IncomeList from './IncomeList'
import PopupAdvice from './PopupAdvice'

class SideBar extends React.Component {
  render () {
    return (
      <>
        <IncomeInput />
        <IncomeList />
        {this.props.incomes[0] ? <><ExpenseInput /><ExpenseList /></> : <PopupAdvice />}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    incomes: state.income
  }
}

export default connect(mapStateToProps)(SideBar)
