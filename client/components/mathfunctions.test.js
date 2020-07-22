import { sumOfAmounts, incomefrequencyAdjustment, expensefrequencyAdjustment, compressObjKeystoUniqueArray, sumPercentageValuesOfObject } from './mathfunctions'

test('sumOfAmounts takes an array of objects with amount key-values and returns the sum of those values', () => {
  const arr = [{ amount: 1 }, { amount: 2 }, { amount: 3 }, { amount: 4 }]
  const actual = sumOfAmounts(arr)
  const expected = 10
  expect(actual).toBe(expected)
})

test('incomefrequencyAdjustment takes an array of objects with frequency and amount key-values, a timeframe, and returns correctly adjusted amounts', () => {
  const timeframe = 30
  const arr = [{ amount: 100, frequency: 7 }, { amount: 100, frequency: 14 }]
  const actual = incomefrequencyAdjustment(arr, timeframe)
  const expected = [{ amount: 428.57142857142856, frequency: 30 }, { amount: 214.28571428571428, frequency: 30 }]
  expect(expected).toMatchObject(actual)
})

test('expensefrequencyAdjustment takes an array of objects with frequency and amount key-values, a timeframe, and returns correctly adjusted amounts', () => {
  const timeframe = 30
  const arr = [{ amount: 100, frequency: 7 }, { amount: 100, frequency: 14 }]
  const actual = expensefrequencyAdjustment(arr, timeframe)
  const expected = [{ amount: 428.57142857142856, frequency: 30 }, { amount: 214.28571428571428, frequency: 30 }]
  expect(expected).toMatchObject(actual)
})

test('compressObjKeystoUniqueArray takes an array of objects with category and amount key values, and returns an array with unique categories', () => {
  const arr = [{ category: 'category1' }, { category: 'category1' }, { category: 'category2' }]
  const actual = compressObjKeystoUniqueArray(arr)
  const expected = ['category1', 'category2']
  expect(actual).toMatchObject(expected)
})

test('sumPercentageValuesOfObject takes an array of objs, an array of unique categories, a total of expenses, and returns an object of matching categories and percentages', () => {
  const arr1 = [{ category: 'category1', amount: 200 }, { category: 'category2', amount: 300 }, { category: 'category3', amount: 400 }, { category: 'category4', amount: 100 }]
  const total = 1000
  const arr2 = ['category1', 'category2', 'category3', 'category4']
  const actual = sumPercentageValuesOfObject(arr1, arr2, total)
  const expected = { category1: 20, category2: 30, category3: 40, category4: 10 }
  expect(actual).toMatchObject(expected)
})
