import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Title from './Title'
import SideBar from './SideBar'
import DonutGraph from './DonutGraph'
import Footer from './Footer'

const Budget = () => {
  return (

    <Container fluid className='p-0' md={12}>
      <Title />
      <Row className='m-0'>
        <Col className='p-0 md-12' md={12} lg={6}>
          <div className='p-1 border border-dark rounded my_dataviz overflow-hidden mt-2 m-auto'>
            <svg id="my_dataviz"></svg>
          </div>
          < DonutGraph />
        </Col>
        <Col className='m-0 p-2' md={12} lg={6}>
          <SideBar />
        </Col>
      </Row>
      <Footer />
    </Container>

  )
}

export default Budget
