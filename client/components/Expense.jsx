import React from 'react'
import { connect } from 'react-redux'

import { sendExpenseToStore } from '../actions'

class Expense extends React.Component {
    state = {
      expenses: [{name:'', amount:'', category:'', occurance:''}]
    }
   
    changeHandler = (evt, index) => {
      const { value, key } = evt.target
      const newExpenses = this.state.Expenses
      newExpenses[index] = { ...newExpenses[index], [key]: value }
      this.setState({
        expenses: newExpenses
      })
    }
  
    submitHandler = (income, evt) => {
      evt.preventDefault()
      this.props.dispatch(sendExpenseToStore(expense))
    }

  render() {
    const { expenses } = this.state
   
      return (
        <>
        <form onSubmit={(evt) => this.submitHandler(incomes, evt)}>
          {
        expenses.map((expenseSource, index) => {
              return (
          <div key={index}>
            <label htmlFor="name">Name</label>
            <input type="text"
                    value={expenseSource.name}
                    placeholder="e.g petrol"
                    name="name"
                    onChange={evt => this.changeHandler(evt, index)} />
          
            <label htmlFor="amount">Amount</label>
            <input type="text"
                    value={expenseSource.amount}
                    placeholder="Amount"
                    name="amount"
                    onChange={evt => this.changeHandler(evt, index)} />

            <label htmlFor="category">Category</label>
            <input type="text"
                    value={expenseSource.category}
                    placeholder="e.g car expenses"
                    name="name"
                    onChange={evt => this.changeHandler(evt, index)} />

            <label htmlFor="occurance">Occurrance</label>
            <input type="text"
                    value={expenseSource.occurrance}
                    placeholder="e.g weekly"
                    name="name"
                    onChange={evt => this.changeHandler(evt, index)} />
          </div>
          )
              })}
      
         </form>
        </>
      )
   }
 }
      

      

export default connect(Expense)
