import { SEND_EXPENSE, DELETE_EXPENSE } from '../actions'

const initialState = [{
  id: 200,
  name: 'Power bill',
  date: 1594938869,
  amount: 300,

  frequency: 'weekly',

  category: 'Utilities'
},
{
  id: 216,
  name: 'Countdown Ponsonby',
  date: 1594938869,
  amount: 80,

  frequency: 'weekly',

  category: 'Groceries'
},
{
  id: 201,
  name: 'Rent',
  date: 1594938869,
  amount: 220.00,
  frequency: 'weekly',
  category: 'Accomodation'
},
{
  id: 54,
  name: 'Netflix bill',
  date: 1594938869,
  amount: 200,

  frequency: 'weekly',

  category: 'Entertainment'
},
{
  id: 202,
  name: 'Eating out with mates',
  date: 1594938869,
  amount: 100,

  frequency: 'weekly',

  category: 'Treats'
}]

function expenses (state = initialState, action) {
  switch (action.type) {
    case SEND_EXPENSE:
      action.expense.amount = Number(action.expense.amount)
      console.log(action.expense)
      return [...state, action.expense]

    case DELETE_EXPENSE:
      return state.filter(element => element.id !== action.id)

    default:
      return state
  }
}

export default expenses
