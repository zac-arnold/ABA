import incomes from './income'
import { SEND_INCOME, DELETE_INCOME } from '../actions'

test('SEND_INCOME adds an income to the Income array', () => {
  const testInitialState = [{

    name: 'My Salary',
    amount: 50000,
    frequency: 'annually'

  }]

  const testAction = {
    type: SEND_INCOME,
    income: {
      name: 'Secondary Salary',
      amount: 1000000,
      frequency: 'one off'
    }
  }

  const newState = incomes(testInitialState, testAction)

  expect(newState).toHaveLength(2)
  expect(newState[1].name).toBe('Secondary Salary')
  expect(newState[1].amount).toBe(1000000)
})

test('DELETE_INCOME deletes an income from the Income array'() => {
  // Arrange
  const testInitialState = [{
    name: 'My Salary',
    amount: 50000,
    frequency: 'annually'
  },
  {
    name: 'My Salary',
    amount: 50000,
    frequency: 'annually'
  }]

  const testAction = {
    type: SEND_INCOME,
    income: {
      name: 'Secondary Salary',
      amount: 1000000,
      frequency: 'one off'
    }
  }
  // Act
  const newState = incomes(testInitialState, testAction)

  // 
})