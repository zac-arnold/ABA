import React from 'react'

import { renderWithRedux } from '../testing/utils'

import Title from './Title'

test('Component to match snapshot', () => {
  const { container } = renderWithRedux(<Title />)
  expect(container).toMatchSnapshot()
})
