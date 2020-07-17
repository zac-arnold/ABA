import React from 'react'
import { connect } from 'react-redux'

const WaitIndicator = props => {
  return props.wait
    ? <img className="waitIndicator" src="/waiting.svg" />
    : null
}

function mapStateToProps (state) {
  return {
    wait: state.waiting
  }
}

export default connect(mapStateToProps)(WaitIndicator)
