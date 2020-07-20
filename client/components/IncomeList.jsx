import React from 'react'
import { connect } from 'react-redux'
import { Modal, Button } from 'react-bootstrap'
import { deleteIncome } from '../actions/index'

class IncomeList extends React.Component {
  componentDidMount () {

  }

  removeItem (id) {
    this.props.dispatch(deleteIncome(id))
  }

  render () {
    return (
      this.props.incomes.map(income => {
        return (
          <Modal.Dialog size="xl" key={income.id} className='m-2 p-1'>
            <Modal.Body className='p-2 font-size'>
              {`${income.description}: $${income.amount} frequency ${income.frequency}.`}
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
