import React from 'react'
import { connect } from 'react-redux'

import LoginAgain from './LoginAgain'
import Register from './Register'

export const Login = () => {
  return (
    <div>
      <LoginAgain />
      <Register />
    </div>
  )
}

export default connect()(Login)
