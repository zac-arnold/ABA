import React from 'react'
import { connect } from 'react-redux'

const IncomeDisplay = ({ incomes }) => {
  if (incomes[0]) {
    return (
      <>
        <table>
          <thead>
            <tr>
              <td>Name:</td>
              <td>Amount:</td>
              <td>Occurrace:</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{incomes[0].name}</td>
              <td>{incomes[0].amount}</td>
              <td>{incomes[0].occurrance}</td>
              <td><button>-</button></td>
              <td><button>Update</button></td>
            </tr>
          </tbody>
        </table>
      </>
    )
  } else {
    return null
  }
}

const mapStateToProps = (state) => ({
  incomes: state.income
})

export default connect(mapStateToProps)(IncomeDisplay)
