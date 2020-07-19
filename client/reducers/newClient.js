import { NEW_REGISTER_SUCCESS } from '../actions'

function newClient (state = {}, action) {
  switch (action.type) {
    case NEW_REGISTER_SUCCESS:
      return action.client

    default:
      return state
  }
}

export default newClient
