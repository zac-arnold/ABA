import React from 'react'
import { Route } from 'react-router-dom'
import { renderWithRedux } from '../testing/utils'
import { screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import Income from './Income'

const initialState = {
  income: [
    {name: 'Wages', amount: '45000', occurrancy: 'weekly'}
  ]
}


test('Income has the correct structure', async () => {
  renderWithRedux(<Income />, {initialState})
  const form = await screen.findByText('Name')
  expect(form).toBeInTheDocument()
  expect(form).toMatchSnapshot()
})