import React from 'react'
import { renderWithRedux } from '../testing/utils'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import IncomeInput from './IncomeInput'

test('adds income to store with valid inputs', async () => {
  const { store } = renderWithRedux(<IncomeInput />)

  userEvent.type(screen.getByRole('textbox', { name: 'Amount' }), '40000')
  userEvent.type(screen.getByRole('textbox', { name: 'Description' }), 'Salary')
  userEvent.type(screen.getByRole('textbox', { name: 'Category' }), 'Main')
  userEvent.selectOptions(screen.getByRole('combobox', 'Frequency'), 'Yearly')

  userEvent.click(screen.getByRole('button'))

  const state = store.getState()

  await waitFor(() => state.income.length > 0)

  return expect(state.income[0].amount).toBe(40000)
})

test('does not add income to store with invalid inputs', async () => {
  expect.assertions(1)
  const { store } = renderWithRedux(<IncomeInput />)

  // intentionally not filling out the form

  userEvent.click(screen.getByRole('button'))

  const state = store.getState()
  await waitFor(() => state.income.length) // not sure how useful this is :|
  return expect(state.income).toHaveLength(1)
})
