import incomes from './income'
import { SEND_INCOME, DELETE_INCOME } from '../actions'

test('SEND_INCOME adds an income to the Income array', () => {
  const initialTestState = [{
    id: 300,
    name: 'My Salary',
    amount: 50000,
    frequency: 'annually'

  }]

  const testAction = {
    type: SEND_INCOME,
    income: {
      id: 400,
      name: 'Secondary Salary',
      amount: 1000000,
      frequency: 'one off'
    }
  }

  const newState = incomes(initialTestState, testAction)

  expect(newState).toHaveLength(2)
  expect(newState[1].name).toBe('Secondary Salary')
  expect(newState[1].id).toBe(400)
  expect(newState[1].amount).toBe(1000000)
})

test('DELETE_INCOME deletes an income from the Income array', () => {
  // Arrange
  const initialTestState = [{
    id: 200,
    name: 'My Salary',
    amount: 50000,
    frequency: 'annually'
  },
  {
    id: 300,
    name: '2nd Salary',
    amount: 20,
    frequency: 'one off'
  }]

  const testAction = {
    type: DELETE_INCOME,
    income: {
      id: 300,
      name: '2nd Salary',
      amount: 20,
      frequency: 'one off'
    }
  }
  // Act
  const newState = incomes(initialTestState, testAction)

  // Assert
  expect(newState).toHaveLength(1)
})

test('default returns State', () => {
  const initialTestState = [{
    id: 300,
    name: 'My Salary',
    amount: 50000,
    frequency: 'annually'
  }]

  const newState = incomes(initialTestState, 'default')

  expect(newState).toBe(initialTestState)
})
