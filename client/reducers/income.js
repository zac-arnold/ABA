import { SEND_INCOME } from '../actions'

function incomes (state = [], action) {
  switch (action.type) {
    case SEND_INCOME:
      return action.income
      
    default:
      return state
  }
}

export default incomes
