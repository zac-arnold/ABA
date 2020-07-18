import { SEND_INCOME, DELETE_INCOME } from '../actions'

const initialState = [{
  id: 201,
  name: 'My Salary',
  amount: 50000,
  frequency: 365,
  date: 1324523523,
},
{
  id: 202,
  name: 'Side Gig',
  amount: 5000,
  frequency: 365,
  date: 1324523523,
}]

function incomes(state = initialState, action) {
  switch (action.type) {
    case SEND_INCOME:
      return [...state, action.income]

    case DELETE_INCOME:
      const newstate = state.filter(element => element.id !== action.id)
      return newstate

    default:
      return state
  }
}

export default incomes
