import {
  NEW_REGISTER_SENDING,
  SIGNING_IN,
  SAVE_BUDGET,
  LOGGING_OUT,
  NEW_REGISTER_SUCCESS,
  SIGN_IN_SUCCESS,
  SAVE_BUDGET_SUCESS,
  LOGOUT_SUCCESS
} from '../actions'

const loading = (state = false, action) => {
  switch (action.type) {
    case NEW_REGISTER_SENDING:
    case SIGNING_IN:
    case SAVE_BUDGET:
    case LOGGING_OUT:
      return true

    case NEW_REGISTER_SUCCESS:
    case SIGN_IN_SUCCESS:
    case SAVE_BUDGET_SUCESS:
    case LOGOUT_SUCCESS:
      return false

    default:
      return state
  }
}

export default loading
