import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Title from './Title'
import SideBar from './SideBar'
import DonutGraph from './DonutGraph'

const Budget = () => {
  return (

    <Container fluid className='p-0'>
      <Title />
      <Row className='m-0'>
        <Col className='m-0 p-2'>
          <SideBar />
        </Col>
        <Col className='p-0'>
          <div className='p-1 border border-dark rounded my_dataviz overflow-hidden'>
          <svg id="my_dataviz"></svg>
          </div>
          < DonutGraph />
        </Col>
      </Row>
    </Container>

  )
}

export default Budget
