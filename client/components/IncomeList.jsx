import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { deleteIncome } from '../actions/index'

function IncomeList (props) {
  const removeItem = (id) => {
    props.dispatch(deleteIncome(id))
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

  if (props.incomes) {
    return (
      props.incomes.map(income => {
        income.frequency = switchFrequency(income.frequency)
        return (
          <Modal.Dialog size="xl" key={income.id} className='m-2 p-1'>
            <Modal.Body className='p-2 font-size'>
              {`${income.description}: $${income.amount.toFixed(2)} ${income.frequency}.`}
              <Button onClick={() => removeItem(income.id)} className='float-right'>X</Button>
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
    incomes: state.income
  }
}

export default connect(mapStateToProps)(IncomeList)
