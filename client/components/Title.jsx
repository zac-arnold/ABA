import React from 'react'
import { Navbar, FormControl, Nav, Form, Button } from 'react-bootstrap'

import Logout from './Logout'

const Title = () => {
  return (
    <Navbar bg="light" variant="light">
      <Navbar.Brand href="#home">Balance</Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
      <Button variant="secondary" size="lg mr-2">Sign-up</Button>
      <Button variant="secondary" size="lg">Login</Button>
      {/* <Logout /> */}
    </Navbar>
  )
}

export default Title
