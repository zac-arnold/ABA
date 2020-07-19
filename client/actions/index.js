import { newClient, login, newBudget, signout } from '../api'

export const SEND_INCOME = 'SEND_INCOME'
export const NEW_REGISTER_SENDING = 'NEW_REGISTER_SENDING'
export const NEW_REGISTER_SUCCESS = 'NEW_REGISTER_SUCCESS'
export const DELETE_EXPENSE = 'DELETE_EXPENSE'
export const DELETE_INCOME = 'DELETE_INCOME'
export const SIGNING_IN = 'SIGNING_IN'
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS'
export const SEND_EXPENSE = 'SEND_EXPENSE'

export const SAVE_BUDGET = 'SAVE_BUDGET'
export const SAVE_BUDGET_SUCESS = 'SAVE_BUDGET_SUCCESS'

export function sendIncomeToStore (income) {
  return {
    type: SEND_INCOME,
    income
  }
}

export function sendExpenseToStore (expense) {
  return {
    type: SEND_EXPENSE,
    expense
  }
}

export function newRegister () {
  return {
    type: NEW_REGISTER_SENDING
  }
}

export function newRegisterSuccess (client) {
  return {
    type: NEW_REGISTER_SUCCESS,
    client
  }
}

export function deleteExpense (id) {
  return {
    type: DELETE_EXPENSE,
    id: id
  }
}

export function deleteIncome (id) {
  return {
    type: DELETE_INCOME,
    id: id
  }
}

export function register (form) {
  // console.log('actions.index.js', form)
  return (dispatch) => {
    dispatch(newRegister())

    return newClient(form)
      .then(client => dispatch(newRegisterSuccess(client)))
      // NEED TO ADD ERROR ACTION .catch(err => dispatch(showError(err.message)))
  }
}

export function signingIn () {
  return {
    type: SIGNING_IN
  }
}

export function signInSuccess (res) {
  return {
    type: SIGN_IN_SUCCESS,
    res
  }
}

export function signIn (form) {
  // console.log('actions.index.js', form)
  return (dispatch) => {
    dispatch(signingIn())

    return login(form)
      .then(res => dispatch(signInSuccess(res)))
  }
}

export function savingNewBudget () {
  return {
    type: SAVE_BUDGET
  }
}

export function saveBudgetSuccess (res) {
  return {
    type: SAVE_BUDGET_SUCESS,
    res
  }
}

export function saveBudget (budget) {
  return (dispatch) => {
    dispatch(savingNewBudget())

    return newBudget(budget)
      .then(res => dispatch(saveBudgetSuccess(res)))
  }
}

export const LOGGING_OUT = 'LOGGING_OUT'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

export function loggingOut () {
  return {
    type: LOGGING_OUT
  }
}

export function logoutSuccess () {
  return {
    type: LOGOUT_SUCCESS
  }
}

export function logout () {
  return (dispatch) => {
    dispatch(loggingOut())

    return signout()
      .then(res => dispatch(logoutSuccess(res)))
  }
}
