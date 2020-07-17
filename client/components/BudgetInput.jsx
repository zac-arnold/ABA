import React from 'react'
import { connect } from 'react-redux'
import { Container, Badge, Row, Col, InputGroup, FormControl, Button } from 'react-bootstrap'

function BudgetInput() {
    return (
        <Container className='m-3 bg-light border rounded'>
            <Row className='ml-2'>
                Add a new income
            </Row>
            <Row>
                <Col>
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                            <InputGroup.Text>$</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Append>
                        </InputGroup.Append>
                    </InputGroup>
                </Col>
                <Col>
                    <InputGroup className="mb-1">
                        <InputGroup.Prepend>
                            <InputGroup.Text>Name</InputGroup.Text>
                        </InputGroup.Prepend>
                        <FormControl aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Append>
                        </InputGroup.Append>
                        <Button className='ml-2'>Add</Button>

                    </InputGroup>
                </Col>
            </Row>
        </Container>
    )
}

export default connect()(BudgetInput)

