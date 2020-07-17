import { SEND_INCOME } from '../actions'

const initialState = [{
    name: 'My Salary',
    amount: 50000,
    frequency: 365
  }]

function incomes (state = initialState, action) {
  switch (action.type) {
    case SEND_INCOME:
      return [...state, action.income]

    default:
      return state
  }
}

export default incomes
