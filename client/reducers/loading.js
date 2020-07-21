import {
  NEW_REGISTER_SENDING,
  SIGNING_IN,
  SAVE_BUDGET,
  LOGGING_OUT
} from '../actions'

const loading = (state = false, action) => {
  switch (action.type) {
    case NEW_REGISTER_SENDING:
    case SIGNING_IN:
    case SAVE_BUDGET:
    case LOGGING_OUT:
      return true

    default:
      return state
  }
}

export default loading
