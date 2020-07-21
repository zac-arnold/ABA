import React from 'react'
import { Form, Col, Row, Container, FormControl, Button, OverlayTrigger, Popover } from 'react-bootstrap'
import { sendExpenseToStore } from '../actions/index'
import { connect } from 'react-redux'

class ExpenseInput extends React.Component {
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

    sendToStore = () => {
      const data = this.state
      data.id = Date.now()
      this.props.dispatch(sendExpenseToStore(data))
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
        <Form>
          <Container className='mt-2 mb-1 border border-dark rounded p-0 bg-dark text-white'>
            <Row className='align-middle pt-2 m-0'>
              <Col className='float-left'>
                            Expense
              </Col>
              <Col>
                <Button onClick={() => this.sendToStore()} className='float-right' size='sm'>Add</Button>
              </Col>
            </Row>
            <Form.Row className='m-0 p-2'>
              <Col>
                <OverlayTrigger data-trigger="hover focus" placement="bottom"
                  overlay={<Popover id="popover-basic">
                    <Popover.Title as="h3">Expense Description</Popover.Title>
                    <Popover.Content>Please enter an expense <strong>description</strong> e.g rent</Popover.Content>
                  </Popover>} >
                  <FormControl name='description' value={this.state.description} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Description" placeholder='Description' />
                </OverlayTrigger>
              </Col>
              <Col>
                <OverlayTrigger data-trigger="hover focus" placement="bottom"
                  overlay={<Popover id="popover-basic">
                    <Popover.Title as="h3">Expense Amount</Popover.Title>
                    <Popover.Content>Please enter an expense <strong>amount</strong></Popover.Content>
                  </Popover>}>
                  <FormControl name='amount' value={this.state.amount} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Amount" placeholder='$' />
                </OverlayTrigger>
              </Col>
              <Col>
                <OverlayTrigger data-trigger="hover focus" placement="bottom"
                  overlay={<Popover id="popover-basic">
                    <Popover.Title as="h3">Expense Category</Popover.Title>
                    <Popover.Content>Please choose an expense <strong>category</strong></Popover.Content>
                  </Popover>}>
                  <FormControl name='category' value={this.state.category} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Category" placeholder='Category' as="select">
                    <option>Home</option>
                    <option>Food</option>
                    <option>Utilities</option>
                    <option>Transport</option>
                    <option>Subscriptions</option>
                    <option>Entertainment</option>
                    <option>Personal</option>
                    <option>Insurance</option>
                  </FormControl>
                </OverlayTrigger>
              </Col>
              <Col>
                <OverlayTrigger data-trigger="hover focus" placement="bottom"
                  overlay={<Popover id="popover-basic">
                    <Popover.Title as="h3">Expense Frequency</Popover.Title>
                    <Popover.Content>Please choose an expense <strong>frequency</strong></Popover.Content>
                  </Popover>}>
                  <Form.Control name='frequency' value={this.state.frequency} onChange={(evt) => this.changeHandler(evt)} size='sm' as="select">
                    <option value='1'>One-off</option>
                    <option value='7'>Weekly</option>
                    <option value='14'>Fortnightly</option>
                    <option value='30.4375'>Monthly</option>
                    <option value='365.25'>Yearly</option>
                  </Form.Control>
                </OverlayTrigger>
              </Col>
            </Form.Row>
          </Container>
        </Form>
      )
    }
}

export default connect()(ExpenseInput)
