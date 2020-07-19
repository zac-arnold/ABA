import { SEND_INCOME, DELETE_INCOME } from '../actions'

const initialState = [{

  name: 'My Salary',
  amount: 50000,
  frequency: 'annually'

}]

function incomes (state = initialState, action) {
  switch (action.type) {
    case SEND_INCOME:
      return [...state, action.income]

    case DELETE_INCOME:
      return state.filter(element => element.id !== action.id)

    default:
      return state
  }
}

export default incomes
