import { SEND_EXPENSE, DELETE_EXPENSE } from '../actions'

const initialState = [{
  id: 200,
  name: 'Power bill',
  date: 1594938869,
  amount: 300,
  frequency: null,
  category: 'Utilities'
},
{
  id: 216,
  name: 'Countdown Ponsonby',
  date: 1594938869,
  amount: 80,
  frequency: null,
  category: 'Groceries'
},
{
  id: 201,
  name: 'Rent',
  date: 1594938869,
  amount: 220.00,
  frequency: null,
  category: 'Accomodation'
},
{
  id: 54,
  name: 'Netflix bill',
  date: 1594938869,
  amount: 200,
  frequency: null,
  category: 'Entertainment'
},
{
  id: 202,
  name: 'Eating out with mates',
  date: 1594938869,
  amount: 100,
  frequency: null,
  category: 'Treats'
}]

function expenses(state = initialState, action) {
  switch (action.type) {
    case SEND_EXPENSE:
      action.expense.amount = Number(action.expense.amount)
      return [...state, action.expense]

    case DELETE_EXPENSE:
      const newstate = state.filter(element => element.id !== action.id)
      return newstate

    default:
      return state
  }
}

export default expenses
