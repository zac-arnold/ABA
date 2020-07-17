import React from 'react'
import { Route } from 'react-router-dom'
import { renderWithRedux } from '../testing/utils'
import { screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import Budget from './Budget'

xtest('Budget has the correct structure', async () => {
  const initialEntries = ['/budget']

  const { asFragment } = renderWithRedux(
    <Route path='/budget' component={Budget} />,
    { initialEntries }
  )
  expect(asFragment()).toMatchSnapshot()
})
