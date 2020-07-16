import React, { Component } from 'react'
import { connect } from 'react-redux'

class Income extends React.Component {
  state = {
    incomes: [{ name: '', amount: 0, occurrance: 'weekly' }]
  }

  changeHandler = (evt, index) => {
    // const { value, name } = evt.target
    this.state.incomes[index] = evt.target.value
    this.setState({
      incomes: this.state.incomes.index
    })
    // console.log(value, name)
  }

  changeHandlerAmount = (evt, index) => {
    // const { value, name } = evt.target
    this.state.incomes[index] = evt.target.value
    this.setState({
      incomes: this.state.incomes.amount
    })
    // console.log(value, name)
  }


  render () {
    console.log(this.state)
    return (
      <div>
        <form>
          {
            this.state.incomes.map((name, index) => {
              console.log(name.name)
              return (
                <div key={index}>
                  <label htmlFor="name">Name </label>
                  <input type="text" value={name.name} placeholder="Income Type" name="name" onChange={evt => this.changeHandler(evt, index)} />
                  <label htmlFor="amount">Amount </label>
                  <input type="text" value={name.amount} placeholder="Amount" name="amount" onChange={evt => this.changeHandlerAmount(evt, index)}/>
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
