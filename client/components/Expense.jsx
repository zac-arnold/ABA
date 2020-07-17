import React from 'react'
import { connect } from 'react-redux'

import { sendExpenseToStore } from '../actions'

class Expense extends React.Component {
  // state = {
  //   name: '',
  //   amount: '',
  //   category: '',
  //   occurence: ''
  // }

  // function submitData () {

  // }

  // render() {
  //   return (
  //     <div>
  //       <label htmlFor="name">Name</label>
  //       <input type="text"
  //         placeholder="e.g petrol"
  //         name="name"
  //       />

  //       <label htmlFor="amount">Amount </label>
  //       <input type="text"
  //         placeholder="Amount"
  //         name="amount"
  //       />

  //       <label htmlFor="category">Category</label>
  //       <input type="text"
  //         placeholder="e.g car expenses"
  //         name="category"
  //       />

  //       <label htmlFor="occurance">Occurrance</label>
  //       <input type="text"
  //         placeholder="e.g weekly"
  //         name="occurance"
  //       />
  //       <button type="submit" value="submit" onClick={}>Submit</button>
  //     </div>
  //   )
  // }
  state = {
    expenses: [{ name: '', amount: '', category: '', occurance: 'weekly' }]
  }

  changeHandler = (evt, index) => {
    
    const { value, name } = evt.target
    const newExpenses = this.state.expenses
    newExpenses[index] = { ...newExpenses[index], [name]: value }
    this.setState({
      expenses: newExpenses
    })
  }

  submitHandler = (expense, evt) => {
    evt.preventDefault()
    this.props.dispatch(sendExpenseToStore(expense[0]))
  }

  render () {
    const { expenses } = this.state

    return (
      <>
        <form onSubmit={(evt) => this.submitHandler(expenses, evt)}>
          {
            expenses.map((expenseEntry, index) => {
              return (
                <div key={index}>
                  <label htmlFor="name">Name</label>
                  <input type="text"
                    value={expenseEntry.name}
                    placeholder="e.g petrol"
                    name="name"
                    onChange={evt => this.changeHandler(evt, index)} />

                  <label htmlFor="amount">Amount </label>
                  <input type="text"
                    value={expenseEntry.amount}
                    placeholder="Amount"
                    name="amount"
                    onChange={evt => this.changeHandler(evt, index)} />

                  <label htmlFor="category">Category</label>
                  <input type="text"
                    value={expenseEntry.category}
                    placeholder="e.g car expenses"
                    name="category"
                    onChange={evt => this.changeHandler(evt, index)} />

                  <label htmlFor="occurance">Occurrance</label>
                  <input type="text"
                    value={expenseEntry.occurrance}
                    placeholder="e.g weekly"
                    name="occurance"
                    onChange={evt => this.changeHandler(evt, index)} />
                  <button type="submit" value="submit">Submit</button>
                </div>
              )
            })
          }
        </form>
      </>
    )
  }
}

export default connect()(Expense)
