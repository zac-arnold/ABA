import React, { Component } from 'react'
import { connect } from 'react-redux'

class Income extends React.Component {
  state = {
    incomes: [{name:"" , amount: "", occurrance:"weekly"}]
  }

  render () {
    return (
      <div>
        Hello
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  
})



export default connect(mapStateToProps)(Income)
