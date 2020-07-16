export const SEND_INCOME = 'SEND_INCOME'

export function sendIncomeToStore (income) {
  console.log('Actions ', income)
  return {
    type: SEND_INCOME,
    income
  }
}

// export function sendIncome (income) {
//   console.log('Actions ', income)
//   return dispatch => {
//     dispatch(sendIncomeToStore(income))
//   }
// }
