import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Button } from 'react-bootstrap'

import Title from './Title'
import Footer from './Footer'
import Login from './Login'

const Welcome = () => {
  return (
    <Container>
      <Title />
      <Row>
        <Col>
          <Link to='/budget'><Button>Create a budget</Button></Link>
        </Col>
        <Col>
          <Login />
        </Col>
      </Row>
      <Footer />
    </Container >
  )
}

export default Welcome

