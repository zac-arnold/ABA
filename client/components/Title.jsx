import React from 'react'
import { Navbar, Nav, Button, Modal } from 'react-bootstrap'

import FormModal from './RegisterFormModal'
import SignIn from './SignIn'
// import Register from './Register'
// import Logout from './Logout'

function MyVerticallyCenteredModal (props) {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modal heading
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
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
      <MyVerticallyCenteredModal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

export default Title
