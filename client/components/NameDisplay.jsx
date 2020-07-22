import React from 'react'
import { connect } from 'react-redux'

const NameDisplay = props => {
  return (
    <>
      <h3>Welcome! {props.client.username}</h3>
    </>
  )
}

const mapStateToProps = state => {
  return {
    client: state.newClient
  }
}

export default connect(mapStateToProps)(NameDisplay)
