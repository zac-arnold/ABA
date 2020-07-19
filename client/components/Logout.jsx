import React from 'react'
import { connect } from 'react-redux'

import { logout } from '../actions'

class Logout extends React.Component {
  submitHandler = evt => {
    evt.preventDefault()
    this.props.dispatch(logout())
  }

  render () {
    return (
      <div>
        <button type='submit' onClick={(evt) => this.submitHandler(evt)}>Logout</button>
      </div>
    )
  }
}

// const mapStateToProps = state => {
//     return {
//         session: state.
//     }
// }

export default connect(mapStateToProps)(Logout)
