import React from 'react'
import { renderWithRedux } from '../testing/utils'
import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import ExpenseInput from './ExpenseInput'

test('adds expense to store with valid inputs', async () => {
  const { store } = renderWithRedux(<ExpenseInput />)

  userEvent.type(screen.getByRole('textbox', { name: 'Description' }), 'Salary')
  userEvent.type(screen.getByRole('textbox', { name: 'Amount' }), '40000')
  userEvent.selectOptions(screen.queryAllByRole('combobox', 'Category')[0], 'Food')
  userEvent.selectOptions(screen.queryAllByRole('combobox', 'Frequency')[1], '365.25')

  userEvent.click(screen.getByRole('button'))

  const state = store.getState()

  await waitFor(() => state.expense.length > 0)

  return expect(state.expense[0].amount).toBe(40000)
})
