import React from 'react'
import { connect, useState } from 'react-redux'

const ExpenseDisplay = (props) => {


  // const [expenseState, expenseSet] = useState(0)

  const deleteExpense = () => {

  }
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
                    <td>{expenseItem.occurance}</td>
                    {/* <td><button onClick={() => deleteExpense()} >-</button></td>
                    <td><button onClick={() => updateExpense()} >Update</button></td> */}
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
