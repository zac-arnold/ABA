import { combineReducers } from 'redux'

import income from './income'
import expense from './expense'
import newClient from './newClient'

export default combineReducers({
  income,
  expense,
  newClient
})
