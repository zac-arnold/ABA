import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { deleteExpense } from '../actions/index'

class ExpenseList extends React.Component {
  componentDidMount () {

  }

  removeItem (id) {
    this.props.dispatch(deleteExpense(id))
  }

  render () {
    return (
      this.props.expenses.map(expense => {
        return (
          <Modal.Dialog key={expense.id} className='m-20 p-2'>
            <Modal.Header closeButton className='p-4' onClick={() => this.removeItem(expense.id)}>{expense.name + ': $' + expense.amount + ' (' + expense.category + ')'}</Modal.Header>
          </Modal.Dialog>
        )
      })
    )
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expense
  }
}

export default connect(mapStateToProps)(ExpenseList)
