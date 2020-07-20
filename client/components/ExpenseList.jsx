import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { deleteExpense } from '../actions/index'

function ExpenseList (props) {
  const removeItem = (id) => {
    props.dispatch(deleteExpense(id))
  }

  function switchFrequency (frequency) {
    switch (frequency) {
      case 1:
        frequency = 'one off payment'
        return frequency

      case 7:
        frequency = 'per week'
        return frequency

      case 14:
        frequency = 'per fortnight'
        return frequency

      case 30.4375:
        frequency = 'per month'
        return frequency

      case 365.25:
        frequency = 'annually'
        return frequency

      default:
        return frequency
    }
  }

  if (props.expenses) {
    return (
      props.expenses.map(expense => {
        expense.frequency = switchFrequency(expense.frequency)
        return (
          <Modal.Dialog size="xl" key={expense.id} className='m-2 p-1'>
            <Modal.Body className='p-2 font-size'>
              {`${expense.description}: $${expense.amount.toFixed(2)} ${expense.frequency}.`}
              <Button onClick={() => removeItem(expense.id)} className='float-right'>X</Button>
            </Modal.Body>
          </Modal.Dialog>
        )
      })
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => {
  return {
    expenses: state.expense
  }
}

export default connect(mapStateToProps)(ExpenseList)
