import React from 'react'
import { connect } from 'react-redux'

import { findCookie } from '../authenticated'

const mapStateToProps = state => {
  return {
    authenticated: state.authenticated
  }
}

export const IfAuthenticated = connect(mapStateToProps)(({ children }) => {
  return findCookie()
    ? <>{ children }</>
    : null
})

export const IfNotAuthenticated = connect(mapStateToProps)(({ children }) => {
  return !findCookie()
    ? <>{ children }</>
    : null
})
