import { SEND_EXPENSE, DELETE_EXPENSE } from '../actions'

const initialState = []

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
