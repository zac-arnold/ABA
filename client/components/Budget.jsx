import React from 'react'
import { Row, Col } from 'react-bootstrap'

import SideBar from './SideBar'
import DonutGraph from './DonutGraph'

class Budget extends React.Component {
  render () {
    return (
      <Row className='m-0'>
        <Col className='p-0 md-12' md={12} lg={6}>
          <p className='text-center mt-4 strong'><h3>Your Monthly Summary</h3></p>
          <Row>
            <div className='p-1 my_dataviz overflow-hidden mt-4 m-auto align-middle'>
              <svg id="my_dataviz"></svg>
            </div>
          </Row>
          < DonutGraph />
        </Col>
        <Col className='m-0 p-2' md={12} lg={6}>
          <SideBar />
        </Col>
      </Row>
    )
  }
}

export default Budget
