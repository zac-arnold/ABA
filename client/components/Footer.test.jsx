import React from 'react'
import { render } from '@testing-library/react'
// import '@testing-library/jest-dom'

import Footer from './Footer'

test('component to match snapshot', () => {
  const { container } = render(<Footer />)
  expect(container).toMatchSnapshot()
})
