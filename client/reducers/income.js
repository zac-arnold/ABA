import { SEND_INCOME, DELETE_INCOME } from '../actions'

const initialState = [
  {
    id: 1595224251853,
    amount: 2000,
    description: 'wewfwfef',
    category: 'Food',
    frequency: 30
  },
  {
    id: 1595224348805,
    amount: 55000,
    description: 'ihgiub',
    category: 'Subscriptions',
    frequency: 365
  },
  {
    id: 1595228194376,
    amount: 550,
    description: 'rthjrth',
    category: 'Transport',
    frequency: 7
  }
]

function incomes(state = initialState, action) {
  switch (action.type) {
    case SEND_INCOME:
      action.income.amount = Number(action.income.amount)
      action.income.frequency = Number(action.income.frequency)
      return [...state, action.income]

    case DELETE_INCOME:
      return state.filter(element => element.id !== action.id)

    default:
      return state
  }
}

export default incomes
