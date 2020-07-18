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
            {props.expenses.map((expenseItem, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{expenseItem.name}</td>
                    <td>{expenseItem.amount}</td>
                    <td>{expenseItem.category}</td>
                    <td>{expenseItem.occurrance}</td>
                    <td><button>-</button></td>
                    <td><button>Update</button></td>
                  </tr>
                </>
              )
            })}
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
