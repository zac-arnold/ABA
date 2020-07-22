import React from 'react'

import { renderWithRedux } from '../testing/utils'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

import WaitIndicator from './WaitIndicator'

test('Wait indicator appears when content pending', async () => {
  const { container } = renderWithRedux(<WaitIndicator />, { initialState: { loading: true } })
  expect(container).toMatchSnapshot()
})

test('Wait indicator does not appear when content is not pending', async () => {
  const { container } = renderWithRedux(<WaitIndicator />, { initialState: { loading: false } })
  expect(container).toMatchSnapshot()
})
