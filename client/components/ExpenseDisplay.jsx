import React from 'react'
import { connect } from 'react-redux'

const ExpenseDisplay = (props) => {
  if (props.expenses[0]) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <td>Name:</td>
              <td>Amount:</td>
              <td>Category:</td>
              <td>Occurrace:</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{props.expenses[0].name}</td>
              <td>{props.expenses[0].amount}</td>
              <td>{props.expenses[0].category}</td>
              <td>{props.expenses[0].occurrance}</td>
              <td><button>-</button></td>
              <td><button>Update</button></td>
            </tr>
          </tbody>
        </table>
      </>
    )
  } else {
    return <h1>hi</h1>
  }
}

const mapStateToProps = (state) => ({
  expenses: state.expense
})

export default connect(mapStateToProps)(ExpenseDisplay)
