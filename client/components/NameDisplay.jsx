import React from 'react'
import { connect } from 'react-redux'

const NameDisplay = props => {
  return (
    <>
      <p className='welcomeMessage'>Welcome {props.client.username}!</p>
    </>
  )
}

const mapStateToProps = state => {
  return {
    client: state.newClient
  }
}

export default connect(mapStateToProps)(NameDisplay)
