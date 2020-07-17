export const SEND_INCOME = 'SEND_INCOME'

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
