import React from 'react'
import { connect } from 'react-redux'

const IncomeDisplay = (props) => {
  if (props.incomes) {

    return (
      <>
        <table>
          <thead>
            <tr>
              <td>Name:</td>
              <td>Amount:</td>
              <td>Frequency:</td>
              <td></td>
              <td></td>
            </tr>
          </thead>
          <tbody>
            {props.incomes.map((incomeItem, index) => {
              return (
                <>
                  <tr key={index}>
                    <td>{incomeItem.name}</td>
                    <td>{incomeItem.amount}</td>
                    <td>{incomeItem.frequency}</td>
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
    return null
  }
}

const mapStateToProps = (state) => ({
  incomes: state.income
})

export default connect(mapStateToProps)(IncomeDisplay)
