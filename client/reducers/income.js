import { SEND_INCOME, DELETE_INCOME } from '../actions'

const initialState = [{
  id: 0,
  amount: 50000,
  description: 'My Wages',
  category: 'Salary',
  frequency: 365.25
}]

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
