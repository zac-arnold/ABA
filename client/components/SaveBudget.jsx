import React from 'react'
import { connect } from 'react-redux'

class SaveBudget extends React.Component {
  submitHandler = evt => {
    console.log(this.props)
    evt.preventDefault()
    this.props.dispatch(this.props)
  }

  render () {
    return (
      <div>
        <button type='submit' onClick={(evt) => this.submitHandler(evt)}>Save</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    client: state.newClient,
    income: state.income,
    expense: state.expense
  }
}

export default connect(mapStateToProps)(SaveBudget)
