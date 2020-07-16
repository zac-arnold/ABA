import React from 'react'
import { connect } from 'react-redux'

export const Incomedisplay = ({ incomes }) => {
  console.log(incomes)
  if (incomes[0]) {
    console.log(incomes[0])
  return (
      <div>
        <p>{incomes[0].name}</p>
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
