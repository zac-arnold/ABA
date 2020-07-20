export function convertToPercentageOfIncome(incomeSum, expense) {
  return (100 / incomeSum) * expense
}

export function findDifferenceBetweenValues(a, b) {
  return Math.abs(a - b)
}

export function compressObjKeystoUniqueArray(arrayofobjs) {
  const categories = []
  arrayofobjs.forEach(expense => {
    if (categories.indexOf(expense.category) === -1) {
      categories.push(expense.category)
    }
  })
  return categories
}

export function sumPercentageValuesOfObject (obj, arr, income) {
  const data = { Surplus: 100 }
  let sumTotalExpenses = 0
  arr.forEach(category => {
    obj.forEach(expense => {
      if (expense.category === category) {
        if (data[category]) {
          data[category] += expense.amount
          sumTotalExpenses += expense.amount
        } else {
          data[category] = expense.amount
          sumTotalExpenses += expense.amount
        }
      }
    })
    // convert values to percentage of total income
    data[category] = convertToPercentageOfIncome(income, data[category])
  })
  return {
    data: data,
    sumTotalExpenses: sumTotalExpenses
  }
}