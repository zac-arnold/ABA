import React from 'react'
import { connect } from 'react-redux'

const WaitIndicator = props => {
  return props.wait
    ? <img className="waitIndicator" src='./images/36a59c.svg' />
    : null
}

function mapStateToProps (state) {
  return {
    wait: state.loading
  }
}

export default connect(mapStateToProps)(WaitIndicator)
