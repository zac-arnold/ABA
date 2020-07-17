import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Col, Row, Button, Jumbotron } from 'react-bootstrap'

import Title from './Title'
import Footer from './Footer'
import Login from './Login'

const Welcome = () => {
  return (
    <Container>
      <Title />
      <Row>
        <Col>
          <Jumbotron>
            <h1>Welcome!</h1>
            <p>
              Looking to do some budgeting on the fly? Start here with your very first budget.
            </p>
            <p>
            <Link to='/budget'><Button>Create a budget</Button></Link>
            </p>
          </Jumbotron>
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

