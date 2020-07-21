import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { deleteIncome } from '../actions/index'

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

class IncomeList extends React.Component {
  removeItem = (id) => {
    this.props.dispatch(deleteIncome(id))
  }

  render () {
    return (
      this.props.incomes.map(income => {
        const newFrequency = switchFrequency(income.frequency)
        return (
          <Modal.Dialog size="xl" key={income.id} className='m-2 p-1'>
            <Modal.Body className='p-2 font-size'>
              {`${income.description}: $${income.amount.toFixed(2)} ${newFrequency}.`}
              <Button onClick={() => this.removeItem(income.id)} className='float-right'>X</Button>
            </Modal.Body>
          </Modal.Dialog>
        )
      })
    )
  }
}

const mapStateToProps = (state) => {
  return {
    incomes: state.income
  }
}

export default connect(mapStateToProps)(IncomeList)
