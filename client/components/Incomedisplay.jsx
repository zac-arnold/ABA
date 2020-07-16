import React from 'react'
import { connect } from 'react-redux'

export const Incomedisplay = ({ incomes }) => {
  console.log(incomes)
  if (incomes[0]) {
    console.log(incomes[0])
  return (
      <div>
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
      </div>

  )
  } else {
    return null
  }
}

const mapStateToProps = (state) => ({
  incomes: state.income
})


export default connect(mapStateToProps)(Incomedisplay)
