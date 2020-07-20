import React from 'react'
import { Row, Col } from 'react-bootstrap'

import SideBar from './SideBar'
import DonutGraph from './DonutGraph'

class Budget extends React.Component {
  render () {
    return (
      <Row className='m-0'>
        <Col className='p-0 md-12' md={12} lg={6}>
          <Row className='p-0 m-0'><p className='text-right'>Your Monthly Summary</p></Row>
          <Row>
            <div className='p-1 my_dataviz overflow-hidden mt-4 m-auto align-middle'>
              <svg id="my_dataviz"></svg>
            </div>
          </Row>
          <Row></Row>
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
