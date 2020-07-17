import React, { useState } from 'react'
import { connect } from 'react-redux'

import { register } from '../actions'

class Register extends React.Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = evt => {
    const { name, value } = evt.target
    console.log(name, value)
    this.setState({
      [name]: value
    })
  }

  submitHandler = form => {
    console.log(form)
    this.props.dispatch(register(form))
  }

  render () {
    return (
      <div>
        <h3>Register</h3>
        <form onSubmit={(evt) => this.submitHandler(this.state, evt)}>
          <label htmlFor='username'>Username:</label>
          <input type='text' name='username' value={this.state.username} onChange={this.handleChange} />
          <label htmlFor='email'>Email:</label>
          <input type='text' name='email' value={this.state.email} onChange={this.handleChange} />
          <label htmlFor='password'>Password:</label>
          <input type='text' name='password' value={this.state.password} onChange={this.handleChange} />
          <button type='submit'>Register</button>
        </form>
      </div>
    )
  }
}

export default connect()(Register)
