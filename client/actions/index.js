export const SEND_INCOME = 'SEND_INCOME'

export function sendIncomeToStore (income) {
  return {
    type: SEND_INCOME,
    income
  }
}
