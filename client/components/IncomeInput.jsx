import React from 'react'
import { Form, Col, Row, Container, FormControl, Button } from 'react-bootstrap'
import { sendIncomeToStore } from '../actions/index'
import { connect } from 'react-redux'

class IncomeInput extends React.Component {
    state = {
      id: 0,
      amount: '',
      description: '',
      category: '',
      frequency: ''
    }

    changeHandler = (evt) => {
      evt.preventDefault()
      const { value, name } = evt.target
      this.setState({
        [name]: value
      })
    }

    sendToStore = () => {
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
        frequency: ''
      })
    }

    render () {
      return (

        <Form>
          <Container className='mb-2 border border-dark rounded p-0 bg-dark text-white'>
            <Row className='align-middle pt-2 m-0'>
              <Col className='float-left'>
                            Income
              </Col>
              <Col>
                <Button onClick={() => this.sendToStore()} className='float-right' size='sm'>Add</Button>
              </Col>
            </Row>
            <Form.Row className='m-0 p-2'>
              <Col>
                <FormControl name='description' value={this.state.description} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Description" placeholder='Description' />
              </Col>
              <Col>
                <FormControl name='amount' value={this.state.amount} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Amount" placeholder='$' />
              </Col>

              <Col>
                <Form.Control name='category' value={this.state.category} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Category" placeholder='Category' as="select">
                  <option>Home</option>
                  <option>Food</option>
                  <option>Utilities</option>
                  <option>Transport</option>
                  <option>Subscriptions</option>
                  <option>Entertainment</option>
                  <option>Personal</option>
                  <option>Insurance</option>
                </Form.Control>
              </Col>
              <Col>
                <Form.Control name='frequency' value={this.state.frequency} onChange={(evt) => this.changeHandler(evt)} size='sm' as="select">
                  <option>One-off</option>
                  <option>Weekly</option>
                  <option>Fortnightly</option>
                  <option>Monthly</option>
                  <option>Yearly</option>
                </Form.Control>
              </Col>
            </Form.Row>
          </Container>
        </Form>
      )
    }
}

export default connect()(IncomeInput)
