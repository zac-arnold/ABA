import React from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, Button } from 'react-bootstrap'

import RegisterModal from './RegisterModal'
import SignInModalHolder from './SignInModalHolder'
import WaitIndicator from './WaitIndicator'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'
import Logout from './Logout'
import NameDisplay from './NameDisplay'

function Title (props) {
  const [modalShow, setModalShow] = React.useState(false)

  console.log(props)

  return (
    <>
      <Navbar id="title" bg="light" variant="light">
        <Navbar.Brand>Balance</Navbar.Brand>
        <Nav className="mr-auto">
          {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
        </Nav>
        <WaitIndicator />
        <IfNotAuthenticated>
          <Button variant="secondary" size="lg mr-2" onClick={() => setModalShow(true)}>Register</Button>
          <SignInModalHolder />
        </IfNotAuthenticated>
        <IfAuthenticated>
          <NameDisplay />
          <Logout />
        </IfAuthenticated>
      </Navbar>
      <RegisterModal show={modalShow} onHide={() => setModalShow(false)}/>
    </>
  )
}

const mapStateToProps = (state) => {
  return {
    user: state.newClient
  }
}

export default connect(mapStateToProps)(Title)
