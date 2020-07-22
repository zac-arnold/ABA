import { NEW_REGISTER_SUCCESS, LOGOUT_SUCCESS } from '../actions'

function newClient (state = {}, action) {
  switch (action.type) {
    case NEW_REGISTER_SUCCESS:
      return action.client

    case LOGOUT_SUCCESS:
      return state

    default:
      return state
  }
}

export default newClient
