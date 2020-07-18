import React from 'react'
import { connect } from 'react-redux'

import { sendIncomeToStore } from '../actions'

class Income extends React.Component {
  state = {
    id: 0,
    name: '',
    amount: 0,
    frequency: 'weekly'
  }

  changeHandler = (evt) => {
    evt.preventDefault()
    const { value, name } = evt.target
    this.setState({
      [name]: value
    })
  }

  submitHandler = () => {
    const data = this.state
    data.id = data.id + 1
    this.props.dispatch(sendIncomeToStore(data))
  }

  render () {
    return (
      <>
        <form onSubmit={this.changeHandler}>
          <label>Name </label>
          <input type="text"
            value={this.state.name}
            placeholder="Income Type"
            name="name"
            onChange={this.changeHandler} />

          <label>Amount </label>
          <input type="text"
            value={this.state.amount}
            placeholder="Amount"
            name="amount"
            onChange={this.changeHandler} />
          <button type="submit" value="submit" onClick={() => this.submitHandler()}>Submit</button>
        </form>
      </>
    )
  }
}

export default connect()(Income)
