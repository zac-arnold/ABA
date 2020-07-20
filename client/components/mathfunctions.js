export function convertToPercentageOfIncome(incomeSum, expense) {
  console.log(incomeSum)
  console.log(expense)
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

export function sumPercentageValuesOfObject(obj, arr, income) {
  let data = { Surplus: 100 }
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
    console.log(data[category])
    data[category] = convertToPercentageOfIncome(income, data[category])
  })
  console.log(data)
  console.log(sumTotalExpenses)
  return {
    data: data,
    sumTotalExpenses: sumTotalExpenses
  }
}

//takes and array of income objects and returns a frequency adjusted array of objects
export function frequencyAdjustment(incomes, timeframe) {
  incomes.forEach(income => {
    income.amount = income.amount * (timeframe / income.frequency)
  })
  return incomes
}

//takes an array of expenses or incomes and outputs a total sum of all amounts
export function sumOfAmounts(obj) {
  const total = obj.reduce((acc, element) => {
    return element.amount
  })
  return total
}