import { combineReducers } from 'redux'

import income from './income'
import expense from './expense'
import newClient from './newClient'
import loading from './loading'
import authenticated from './authenticated'

export default combineReducers({
  income,
  expense,
  newClient,
  loading,
  authenticated
})
