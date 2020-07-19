import React from 'react'
import { renderWithRedux } from '../testing/utils'
import { screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import IncomeInput from './IncomeInput'

const initialState = {
  income: [
    { name: 'Wages', amount: '45000', occurrancy: 'weekly' }
  ]
}

test('Income has the correct structure', async () => {
  renderWithRedux(<IncomeInput />, { initialState })
  const form = await screen.findByText('Name')
  expect(form).toBeInTheDocument()
  expect(form).toMatchSnapshot()
})
