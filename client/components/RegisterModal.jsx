import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Form, OverlayTrigger, Popover } from 'react-bootstrap'

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

  submitHandler (evt) {
    evt.preventDefault()
    this.props.dispatch(register(this.state))
  }

  render () {
    const modalProps = Object.assign({}, this.props)
    delete modalProps.dispatch
    return (
      <Modal
        {...modalProps}
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
            <OverlayTrigger
              data-trigger="hover focus"
              placement="left"
              overlay={<Popover id="popover-basic">
                <Popover.Title as="h3">Username</Popover.Title>
                <Popover.Content>Please enter a <strong>Username</strong></Popover.Content>
              </Popover>}>
              <Form.Group>
                <Form.Label htmlFor='insert username here'>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Choose a username"
                  name='username'
                  value={this.state.username}
                  onChange={this.handleChange} />
              </Form.Group>
            </OverlayTrigger>

            <OverlayTrigger
              data-trigger="hover focus"
              placement="left"
              overlay={<Popover id="popover-basic">
                <Popover.Title as="h3">Email Address</Popover.Title>
                <Popover.Content>Please enter your <strong>Email Address</strong></Popover.Content>
              </Popover>}>
              <Form.Group>
                <Form.Label htmlFor='insert email here'>Email address</Form.Label>
                <Form.Control
                  type="email"
                  placeholder="Enter email"
                  name='email'
                  value={this.state.email}
                  onChange={this.handleChange} />
                <Form.Text className="text-muted">
                We will never share your email with anyone else.
                </Form.Text>
              </Form.Group>
            </OverlayTrigger>

            <OverlayTrigger
              data-trigger="hover focus"
              placement="left"
              overlay={<Popover id="popover-basic">
                <Popover.Title as="h3">Password</Popover.Title>
                <Popover.Content>Please enter a <strong>Password</strong>. Your password requires at least one capital case letter, one lower case letter, one number and one symbol. The password must be at least 8 characters long.</Popover.Content>
              </Popover>}>
              <Form.Group>
                <Form.Label htmlFor='insert password here'>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  name='password'
                  value={this.state.password}
                  onChange={this.handleChange} />
                <Form.Text className="text-muted">
                Your password requires at least one capital case letter, one lower case letter, one number and one symbol. The password must be at least 8 characters long.
                </Form.Text>
              </Form.Group>
            </OverlayTrigger>

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
