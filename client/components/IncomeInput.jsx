import React from 'react'
import { Form, Col, Row, Container, FormControl, Button, Popover, OverlayTrigger } from 'react-bootstrap'
import { sendIncomeToStore } from '../actions/index'
import { connect } from 'react-redux'

class IncomeInput extends React.Component {
  state = {
    id: 0,
    amount: '',
    description: '',
    category: '',
    frequency: 1
  }

  changeHandler = (evt) => {
    evt.preventDefault()
    const { value, name } = evt.target
    this.setState({
      [name]: value
    })
  }

    sendToStore = (e) => {
      e.preventDefault()
      if (!e.target.checkValidity()) return
      this.setState({
        id: Date.now(),
        amount: this.state.amount,
        description: this.state.description,
        category: this.state.category,
        frequency: this.state.frequency
      })
      this.props.dispatch(sendIncomeToStore(this.state))
      this.setState({
        id: 0,
        amount: '',
        description: '',
        category: '',
        frequency: 1
      })
    }

    render () {
      return (

        <Form onSubmit={this.sendToStore}>
          <Container className='mb-2 border border-dark rounded p-0 bg-dark text-white'>
            <Row className='align-middle pt-2 m-0'>
              <Col className='float-left'>
                            Income
              </Col>
              <Col>
                <Button className='float-right' size='sm' type='submit'>Add</Button>
              </Col>
            </Row>
            <Form.Row className='m-0 p-2'>
              <Col>
                <OverlayTrigger data-trigger="hover focus" placement="bottom"
                  overlay={<Popover id="popover-basic">
                    <Popover.Title as="h3">Income Description</Popover.Title>
                    <Popover.Content>Please enter an income <strong>description</strong> e.g Salary</Popover.Content>
                  </Popover>}>
                  <FormControl name='description' value={this.state.description} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Description" placeholder='Description' />
                </OverlayTrigger>
              </Col>
              <Col>
                <OverlayTrigger data-trigger="hover focus" placement="bottom"
                  overlay={<Popover id="popover-basic">
                    <Popover.Title as="h3">Income Amount</Popover.Title>
                    <Popover.Content>Please enter an income <strong>amount</strong></Popover.Content>
                  </Popover>}>
                  <FormControl name='amount' value={this.state.amount} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Amount" placeholder='$' />
                </OverlayTrigger>
              </Col>
              <Col>
                <OverlayTrigger data-trigger="hover focus" placement="bottom"
                  overlay={<Popover id="popover-basic">
                    <Popover.Title as="h3">Category</Popover.Title>
                    <Popover.Content>Please enter an income <strong>category</strong></Popover.Content>
                  </Popover>} >
                  <FormControl name='category' value={this.state.category} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Category" placeholder='Category' />
                </OverlayTrigger>
              </Col>
              <Col>
                <OverlayTrigger data-trigger="hover focus" placement="bottom"
                  overlay={<Popover id="popover-basic">
                    <Popover.Title as="h3">Income Frequency</Popover.Title>
                    <Popover.Content>Please choose an income <strong>frequency</strong></Popover.Content>
                  </Popover>} >
                  <Form.Control name='frequency' value={this.state.frequency} onChange={(evt) => this.changeHandler(evt)} size='sm' as="select">
                    <option value='1'>One-off</option>
                    <option value='7'>Weekly</option>
                    <option value='14'>Fortnightly</option>
                    <option value='30.4375'>Monthly</option>
                    <option value='365.25'>Yearly</option>
                  </Form.Control >
                </OverlayTrigger>
              </Col>
            </Form.Row>
          </Container>
        </Form>
      )
    }
}

export default connect()(IncomeInput)
