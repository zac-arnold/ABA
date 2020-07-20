export function convertToPercentageOfIncome (incomeSum, expense) {
  return (100 / incomeSum) * expense
}

export function findDifferenceBetweenValues (a, b) {
  return Math.abs(a - b)
}

export function compressObjKeystoUniqueArray (arrayofobjs) {
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

// takes in an expense, timeframe, frequency and works out how many times in the timeframe the expense needs to be charged
export function workOutFrequencyAdjustment (settimeframe, amount, frequency) {
  if (frequency > 0 && frequency < settimeframe) { // this negates a diving factor and only allows for multiplication
    const adjustmentFactor = settimeframe / frequency // (e.g 30 / 7)
    return adjustmentFactor * amount // (e.g 4.285 * $200)
  } else {
    return amount
  }
}

// takes all incomes sources, sums them, then adjust to a set timeframe
export function adjustIncomeToTimeframe (incomes, timeframe) {
  let totalIncome = 0
  incomes.forEach(value => {
    totalIncome += value.amount
  })

  return (totalIncome / timeframe)
}
