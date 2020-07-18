import { newClient } from '../api'

export const SEND_INCOME = 'SEND_INCOME'
export const NEW_REGISTER_SENDING = 'NEW_REGISTER_SENDING'
export const NEW_REGISTER_SUCCESS = 'NEW_REGISTER_SUCCESS'
export const DELETE_EXPENSE = 'DELETE_EXPENSE'
export const DELETE_INCOME = 'DELETE_INCOME'

export function sendIncomeToStore (income) {
  return {
    type: SEND_INCOME,
    income
  }
}

export const SEND_EXPENSE = 'SEND_EXPENSE'

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

export function newRegisterSuccess (res) {
  return {
    type: NEW_REGISTER_SUCCESS,
    res
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
  console.log('actions.index.js', form)
  return (dispatch) => {
    dispatch(newRegister())

    return newClient(form)
      .then(res => dispatch(newRegisterSuccess(res)))
  }
}
