import React from 'react'
import { Navbar, Nav, Button, Modal, Form } from 'react-bootstrap'

import SignIn from './SignIn'
import Register from './Register'
// import Logout from './Logout'

function RegisterModal (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create account
        </Modal.Title>
      </Modal.Header>
      <Form>
        <Modal.Body>
          <Form.Group controlId="formBasicUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control type="text" placeholder="Choose a username" />
          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
                We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide} type="submit">Register</Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

function Title () {
  const [modalShow, setModalShow] = React.useState(false)

  return (
    <>
      <Navbar bg="light" variant="light">
        <Navbar.Brand href="#home">Balance</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <Button variant="secondary" size="lg mr-2" onClick={() => setModalShow(true)}>Register</Button>

        {/* <Button variant="secondary" size="lg">Login</Button> */}

        {/* <SignIn /> */}
        {/* <Register /> */}
        {/* <Logout /> */}

      </Navbar>
      <RegisterModal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default Title
