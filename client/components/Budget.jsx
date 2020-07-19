import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Title from './Title'
import SideBar from './SideBar'
import DonutGraph from './DonutGraph'
import Footer from './Footer'

const Budget = () => {
  return (

    <Container fluid className='p-0'>
      <Title />
      <Row className='m-0'>
        <Col className='m-0 p-2'>
          <SideBar />
        </Col>
        <Col className='p-0'>
          <svg id="my_dataviz"></svg>
          < DonutGraph />
        </Col>
      </Row>
      <Footer />
    </Container>

  )
}

export default Budget
