import { SEND_INCOME } from '../actions'

const initialState = [{
    name: 'My Salary',
    amount: 50000,
    frequency: 365
  }]

function incomes (state = initialState, action) {
  switch (action.type) {
    case SEND_INCOME:
      return [...state, { name: action.income.name, amount: Number(action.income.amount), frequency: action.income.frequency }]

    default:
      return state
  }
}

export default incomes
