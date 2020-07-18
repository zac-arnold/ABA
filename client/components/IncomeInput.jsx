import React from 'react'
import { Form, Col, Row, Container, FormControl, Button } from 'react-bootstrap'
import { sendIncomeToStore } from '../actions/index'
import { connect } from 'react-redux'

class IncomeInput extends React.Component {
    state = {
        id: 0,
        name: '',
        amount: 0,
        category: '',
        frequency: ''
    }

    changeHandler = (evt) => {
        evt.preventDefault()
        const { value, name } = evt.target
        console.log(name)
        this.setState({
            [name]: value
        })
        console.log(this.state)
    }

    sendToStore = () => {
        const data = this.state
        data.id = data.id + 1
        console.log(data)
        this.props.dispatch(sendIncomeToStore(data))
    }

    render() {
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
                            <FormControl name='name' value={this.state.name} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Amount (to the nearest dollar)" placeholder='amount ($)' />
                        </Col>
                        <Col>
                            <FormControl name='amount' value={this.state.amount} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Amount (to the nearest dollar)" placeholder='Description' />
                        </Col>
                        <Col>
                            <FormControl name='category' value={this.state.category} onChange={(evt) => this.changeHandler(evt)} size='sm' aria-label="Category" placeholder='Category' />
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
