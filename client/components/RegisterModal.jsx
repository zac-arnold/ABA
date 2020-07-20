import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Form } from 'react-bootstrap'

import { register } from '../actions'

class RegisterModal extends React.Component {
  state = {
    username: '',
    email: '',
    password: ''
  }

  handleChange = evt => {
    const { name, value } = evt.target
    this.setState({
      [name]: value
    })
  }

  submitHandler = evt => {
    console.log('registerModal.jsx ', this.state)
    evt.preventDefault()
    this.props.dispatch(register(this.state))
  }

  render () {
    return (
      <Modal
        {...this.props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
          Create account
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={(evt) => this.submitHandler(evt)}>
          <Modal.Body>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Choose a username" name='username' value={this.state.username} onChange={this.handleChange} />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name='email' value={this.state.email} onChange={this.handleChange} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
              <Form.Text className="text-muted">
                Your password requires at least one capital case letter, one lower case letter, one number and one symbol. The password must be at least 8 characters long.
              </Form.Text>
            </Form.Group>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide} type="submit">Register</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.newClient
  }
}

export default connect(mapStateToProps)(RegisterModal)
