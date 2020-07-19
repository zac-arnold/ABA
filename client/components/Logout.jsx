import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions'

class Logout extends React.Component {
  submitHandler = evt => {
    console.log(this.props)
    evt.preventDefault()
    this.props.dispatch(logout(this.props))
  }

  render () {
    return (
      <div>
        <button type='submit' onClick={(evt) => this.submitHandler(evt)}>Logout</button>
      </div>
    )
  }
}

export default connect()(Logout)