import { SEND_INCOME, DELETE_INCOME } from '../actions'

const initialState = [{

  name: 'My Salary',
  amount: 50000,
  frequency: 365
}]


  name: 'My Salary',
  amount: 50000,
  frequency: 'annually'

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
