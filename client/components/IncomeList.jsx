import React from 'react'
import { connect } from 'react-redux'
import { Modal } from 'react-bootstrap'
import { deleteIncome } from '../actions/index'

class IncomeList extends React.Component {

    componentDidMount() {

    }

    removeItem (id) {
        this.props.dispatch(deleteIncome(id))
    }

    render() {
        return (
            this.props.incomes.map(income => {
                return (
                    <Modal.Dialog className='m-0 p-1'>
                        <Modal.Header closeButton className='p-2' onClick={() => this.removeItem(income.id)}>{income.name + ': $' + income.amount + ' ('+ income.category + ')'}</Modal.Header>
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