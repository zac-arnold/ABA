import React, { Component } from 'react'
import { connect } from 'react-redux'

import { sendIncome } from '../actions'

class Income extends React.Component {
  state = {
    incomes: [{ name: '', amount: '', occurrance: 'weekly' }]
  }

  changeHandler = (evt, index) => {
    const { value, name } = evt.target
    const newIncomes = this.state.incomes
    newIncomes[index] = { ...newIncomes[index], [name]: value }
    this.setState({
      incomes: newIncomes
    })
  }

  submitHandler = (dispatch, income) => {
    dispatch(sendIncome(income))
  }

  render () {
    const { incomes } = this.state
    // console.log(incomes)

    return (
      <div>
        <form onSubmit={this.submitHandler(this.props.dispatch, this.state.value)}>
          {
            incomes.map((incomeSource, index) => {
              return (
                <div key={index}>
                  <label htmlFor="name">Name </label>
                  <input type="text"
                    value={incomeSource.name}
                    placeholder="Income Type"
                    name="name"
                    onChange={evt => this.changeHandler(evt, index)} />

                  <label htmlFor="amount">Amount </label>
                  <input type="text"
                    value={incomeSource.amount}
                    placeholder="Amount"
                    name="amount"
                    onChange={evt => this.changeHandler(evt, index)}/>
                  <button type="submit" value="submit">Submit</button>
                </div>
              )
            })
          }
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Income)
