import React from 'react'
import { Form, Col, Container, FormControl, Button } from 'react-bootstrap'

function ExpenseInput() {
    return (
        <Container className='border border-dark rounded p-0 bg-dark text-white'>
            <Form.Row className='ml-2 mt-2 pl-2'>
                <span className='align-bottom text-weigh float-left'>Add an expense</span>
                <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-plus-square-fill float-right" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm6.5 4a.5.5 0 0 0-1 0v3.5H4a.5.5 0 0 0 0 1h3.5V12a.5.5 0 0 0 1 0V8.5H12a.5.5 0 0 0 0-1H8.5V4z" />
                </svg>
            </Form.Row>
            <Form.Row className='m-0 p-2'>
                <Col>
                    <FormControl size='sm' aria-label="Amount (to the nearest dollar)" placeholder='amount ($)' />
                </Col>
                <Col>
                    <FormControl size='sm' aria-label="Amount (to the nearest dollar)" placeholder='Description' />
                </Col>
                <Col>
                    <FormControl size='sm' aria-label="Category" placeholder='Category' />
                </Col>
                <Col>
                    <Form.Control size='sm' as="select">
                        <option>One-off</option>
                        <option>Weekly</option>
                        <option>Fortnightly</option>
                        <option>Monthly</option>
                        <option>Yearly</option>
                    </Form.Control>
                </Col>
            </Form.Row>
        </Container>
    )
}

export default ExpenseInput
