import { NEW_REGISTER_SUCCESS, LOGOUT_SUCCESS, SIGN_IN_SUCCESS } from '../actions'
import { findCookie } from '../authenticated'

function auth (state = findCookie(), action) {
  switch (action.type) {
    case NEW_REGISTER_SUCCESS:
    case SIGN_IN_SUCCESS:
      return true

    case LOGOUT_SUCCESS:
      return false

    default:
      return state
  }
}

export default auth
