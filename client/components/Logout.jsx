import React from 'react'
import { connect } from 'react-redux'
import { Button } from 'react-bootstrap'

import { logout } from '../actions'

class Logout extends React.Component {
  submitHandler = evt => {
    evt.preventDefault()
    this.props.dispatch(logout())
  }

  render () {
    return (
      <div>
        <Button variant="secondary" size="lg mr-2" type='submit' onClick={(evt) => this.submitHandler(evt)}>Logout</Button>
      </div>
    )
  }
}

export default connect()(Logout)
