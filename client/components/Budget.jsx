import React from 'react'

import Title from './Title'
import SideBar from './SideBar'
import GraphSlider from './GraphSlider'
import { Row, Col } from 'react-bootstrap'


const Budget = () => {
  return (
    <>
      <Title />
      <Row>
        <Col>
          <SideBar />
        </Col>
        <Col>
          <GraphSlider />
        </Col>
      </Row>
    </>
  )
}

export default Budget
