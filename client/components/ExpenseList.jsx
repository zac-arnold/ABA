import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
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
          <Modal.Dialog size="xl" key={expense.id} className='m-2 p-1'>
            <Modal.Body className='p-2 font-size'>
              {`${expense.description}: $${expense.amount} frequency ${expense.frequency}.`}
              <Button onClick={() => this.removeItem(expense.id)} className='float-right'>X</Button>
            </Modal.Body>
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
