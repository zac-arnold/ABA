import React, { Component } from 'react'
import { connect } from 'react-redux'

class Income extends React.Component {
  state = {
    incomes: [{ name: '', amount: 0, occurrance: 'weekly' }]
  }

  render () {
    return (
      <div>
        <form>
          <label htmlFor="name">Name </label>
          <input type="text" value="" />

          <label htmlFor="amount">Amount </label>
          <input type="text" value="" />
          <button type="submit" value="submit">Submit</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({

})

export default connect(mapStateToProps)(Income)
