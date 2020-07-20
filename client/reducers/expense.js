import { SEND_EXPENSE, DELETE_EXPENSE } from '../actions'

const initialState = [
  {
    id: 1595224251853,
    amount: 1500,
    description: 'wewfwfef',
    category: 'Food',
    frequency: 30
  },
  {
    id: 1595224348805,
    amount: 500,
    description: 'ihgiub',
    category: 'Subscriptions',
    frequency: 7
  },
  {
    id: 1595228194376,
    amount: 450,
    description: 'rthjrth',
    category: 'Transport',
    frequency: 7
  }
]

function expenses (state = initialState, action) {
  switch (action.type) {
    case SEND_EXPENSE:
      action.expense.amount = Number(action.expense.amount)
      action.expense.frequency = Number(action.expense.frequency)
      return [...state, action.expense]

    case DELETE_EXPENSE:
      return state.filter(element => element.id !== action.id)

    default:
      return state
  }
}

export default expenses
