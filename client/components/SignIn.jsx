import React from 'react'
import { connect } from 'react-redux'

import { signIn } from '../actions'

class SignIn extends React.Component {
  state = {
    username: '',
    password: ''
  }

  handleChange = evt => {
    const { name, value } = evt.target
    this.setState({
      [name]: value
    })
  }

  submitHandler = evt => {
    evt.preventDefault()
    this.props.dispatch(signIn(this.state))
  }

  render () {
    return (
      <div>
        <h3>Sign In</h3>
        <form onSubmit={(evt) => this.submitHandler(evt)}>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />
          <label htmlFor='password'>Password:</label>
          <input type='text' name='password' value={this.state.password} onChange={this.handleChange} />
          <button type='submit'>Sign In</button>
        </form>
      </div>
    )
  }
}

export default connect()(SignIn)
