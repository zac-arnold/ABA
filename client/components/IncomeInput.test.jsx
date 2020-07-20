import React from 'react'
import { renderWithRedux } from '../testing/utils'
import { fireEvent } from '@testing-library/react'

import '@testing-library/jest-dom'
import '@testing-library/jest-dom/extend-expect'

test('select drop-downs must use the fireEvent.change', () => {
  const handleChange = jest.fn()
  const { container } = renderWithRedux(
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
  const option3 = container.getElementsByTagName('option').item(2)
  const option4 = container.getElementsByTagName('option').item(3)
  const option5 = container.getElementsByTagName('option').item(4)

  fireEvent.change(select, { target: { value: '2' } })

  expect(handleChange).toHaveBeenCalledTimes(1)
  expect(option2.selected).toBe(true)
  expect(option1.selected).toBe(false)
  expect(option3.selected).toBe(false)
  expect(option4.selected).toBe(false)
  expect(option5.selected).toBe(false)
})

test('test that the placeholders in the input fields are correct', () => {

  renderWithRedux() {
    return (
      <input
      name='amount' 
      value={this.state.amount} 
      onChange={(evt) => this.changeHandler(evt)} 
      size='sm' 
      aria-label="Amount" 
      placeholder='$' 
      onChange={this.handleChange}
      />
    )
  }
}

  const { input } = setup()
  fireEvent.change(input, { target: { placeholder: '$' } })


  expect(input.placeholder).toBe('$')
})
