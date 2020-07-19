import React from 'react'
import { Container, Row, Col, Carousel } from 'react-bootstrap'
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
          <Carousel>
            <Carousel.Item>
              < DonutGraph />
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>

  )
}

export default Budget
