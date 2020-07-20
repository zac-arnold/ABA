import React from 'react'
import { renderWithRedux } from '../testing/utils'
import { screen } from '@testing-library/react'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

// import IncomeInput from './IncomeInput'

// const initialState = {
//   income: [
//     { name: 'Wages', amount: '45000', frequency: 'One-off' }
//   ]
// }

// test('Income has the correct structure', async () => {
//   renderWithRedux(<IncomeInput />, { initialState })
//   const form = await screen.findByText('Wages')
//   expect(form).toBeInTheDocument()
//   expect(form).toMatchSnapshot()
// })

test('select drop-downs must use the fireEvent.change', () => {
  const handleChange = jest.fn()
  const { container } = render(
    <select onChange={handleChange}>
      <option value="1">One-off</option>
      <option value="2">Weekly</option>
      <option value="3">Fortnightly</option>
      <option value="4">Monthly</option>
      <option value="5">Yearly</option>
    </select>
  )
  const select = container.firstChild
  const option1 = container.getElementsByTagName('option').item(0)
  const option2 = container.getElementsByTagName('option').item(1)

  fireEvent.change(select, { target: { value: '2' } })

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(option1.selected).toBe(false)
  expect(option2.selected).toBe(true)
})
