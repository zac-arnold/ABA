import React from 'react'
import { Navbar, FormControl, Nav, Form, Button } from 'react-bootstrap'

import Logout from './Logout'

const Title = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Budget</Navbar.Brand>
      <Nav className="mr-auto">
        {/* <Nav.Link href="#home">Home</Nav.Link>
        <Nav.Link href="#features">Features</Nav.Link>
        <Nav.Link href="#pricing">Pricing</Nav.Link> */}
      </Nav>
      <Logout />
    </Navbar>
  )
}

export default Title
