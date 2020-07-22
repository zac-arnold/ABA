import React from 'react'
import { connect } from 'react-redux'
import { Button, Modal, Form, Navbar, OverlayTrigger, Popover } from 'react-bootstrap'

import { signIn } from '../actions'

class SignInModal extends React.Component {
  state = {
    username: '',
    password: '',
    usernameError: false,
    passwordError: false
  }

  handleChange = evt => {
    const { name, value } = evt.target
    if (name === 'username') {
      if (value.split('').length < 3) {
        this.setState({
          usernameError: true
        })
      } else {
        this.setState({
          usernameError: false
        })
      }
    }

    if (name === 'password') {
      if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/i.test(value)) {
        this.setState({
          passwordError: true
        })
      } else {
        this.setState({
          passwordError: false
        })
      }
    }

    this.setState({
      [name]: value
    })
  }

  submitHandler = evt => {
    evt.preventDefault()
    if (!this.state.usernameError && !this.state.emailError && !this.state.passwordError) {
      this.props.dispatch(signIn(this.state))
    }
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
          <Navbar.Brand id='modal-logo'>Balance</Navbar.Brand>
          <Modal.Title id="contained-modal-title-vcenter">
          Sign In
          </Modal.Title>
        </Modal.Header>
        <Form onSubmit={(evt) => this.submitHandler(evt)}>
          <Modal.Body>

            <OverlayTrigger data-trigger="hover focus" placement="left"
              overlay={<Popover id="popover-basic">
                <Popover.Title as="h3">Username</Popover.Title>
                <Popover.Content>Please enter your <strong>Username</strong></Popover.Content>
              </Popover>}>
              <Form.Group>
                <Form.Label htmlFor='username' aria-label='username'>Username</Form.Label>
                <Form.Control aria-label='enter username here' type="text" placeholder="Choose a username" name='username' value={this.state.username} onChange={this.handleChange} />
                {this.state.usernameError && <Form.Text className="text-muted">Your username is greater than 2 charaters.</Form.Text>}
              </Form.Group>
            </OverlayTrigger>

            <OverlayTrigger data-trigger="hover focus" placement="left"
              overlay={<Popover id="popover-basic">
                <Popover.Title as="h3">Password</Popover.Title>
                <Popover.Content>Please enter your <strong>Password</strong></Popover.Content>
              </Popover>}>
              <Form.Group>
                <Form.Label htmlFor='password' aria-label='password'>Password</Form.Label>
                <Form.Control aria-label='enter password here' type="password" placeholder="Password" name='password' value={this.state.password} onChange={this.handleChange} />
                {this.state.passwordError && <Form.Text className="text-muted">Your password is at least 8 characters long and has at least one capital case letter, one lower case letter and one number.</Form.Text>}
              </Form.Group>
            </OverlayTrigger>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide} type="submit">Sign In</Button>
          </Modal.Footer>
        </Form>
      </Modal>
    )
  }
}

export default connect()(SignInModal)
