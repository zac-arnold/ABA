import React from 'react'
import { connect } from 'react-redux'

export const ExpenseDisplay = ({ expenses }) => {
  
  if (expenses[0]) {
    console.log(expenses[0])
  return (
      <div>
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
              <td>{expenses[0].name}</td>
              <td>{expenses[0].amount}</td>
              <td>{expenses[0].category}</td>
              <td>{expenses[0].occurrance}</td>
              <td><button>-</button></td>
              <td><button>Update</button></td>
            </tr>
          </tbody>
        </table>  
      </div>
  )
  } else {
    return null
  }
}

const mapStateToProps = (state) => ({
  expenses: state.expenses
})


export default connect(mapStateToProps)(ExpenseDisplay)