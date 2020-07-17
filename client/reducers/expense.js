import { SEND_EXPENSE } from '../actions'

function expenses (state = [], action) {
  switch (action.type) {
    case SEND_EXPENSE:
      return [...state, action.expense]

    default:
      return state
  }
}

export default expenses
