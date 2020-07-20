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

export function sumPercentageValuesOfObject(obj, arr, totalincome) {
  let sumTotalExpenses = 0
  let data = { Difference: 0 }
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
    data[category] = (100 / totalincome) * data[category]
  })
  data.Difference = (100 / totalincome) * sumTotalExpenses
  return data
}

//takes and array of income objects and returns a frequency adjusted array of objects
export function expensefrequencyAdjustment(entries, timeframe) {
  entries.forEach(entry => {
    if (entry.frequency === 1 || entry.frequency > timeframe) {
      entry.amount = entry.amount
    } else {
      entry.amount = entry.amount * (timeframe / entry.frequency)
      entry.frequency = timeframe
    }
  })
  return entries
}

export function incomefrequencyAdjustment(entries, timeframe) {
  entries.forEach(entry => {
    entry.amount = entry.amount * (timeframe / entry.frequency)
    entry.frequency = timeframe
  })
  return entries
}

//takes an array of expenses or incomes and outputs a total sum of all amounts
export function sumOfAmounts(obj) {
  const total = obj.map(element => element.amount)
  return total.reduce((acc, value) => acc + value)
}