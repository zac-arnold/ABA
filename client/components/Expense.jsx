import React from 'react'

import { connect } from 'react-redux'

import { sendExpenseToStore } from '../actions/index'

class ExpenseEntry extends React.Component {
  state = {
    id: 0,
    name: '',
    amount: 0,
    category: '',
    frequency: ''
  }

  changeHandler = (evt) => {
    evt.preventDefault()
    const { value, name } = evt.target

    this.setState({
      [name]: value
    })
    console.log(this.state)
  }

  sendToStore = () => {
    const data = this.state
    data.id = data.id + 1
    this.props.dispatch(sendExpenseToStore(data))
  }

  render () {
    return (
      <form onSubmit={this.changeHandler}>
        <label>Name</label>
        <input onChange={this.changeHandler} type='text' placeholder='e.g petrol' name='name' value={this.state.name} />
        <label>Amount</label>
        <input onChange={this.changeHandler} type='text' placeholder='e.g $50' name='amount' value={this.state.amount} />
        <label>Category</label>
        <input onChange={this.changeHandler} type='text' placeholder='e.g Groceries' name='category' value={this.state.category} />
        <label>Frequency</label>
        <input onChange={this.changeHandler} type='text' placeholder='e.g weekly' name='frequency' value={this.state.frequency} />

        <button type="submit" value="submit" onClick={() => this.sendToStore()}>Submit</button>
      </form>
    )
  }
}

export default connect()(ExpenseEntry)
