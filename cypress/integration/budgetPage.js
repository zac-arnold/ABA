/* global cy */

describe('the budget page', () => {
  it('visits the budget page', () => {
    cy.visit('http://localhost:3000/budget')
  })

  it('clicks through the instructions', () => {
    cy.contains('Got it!')
      .click()
  })

  it('inputs $ amount into the income modal', () => {
    cy.contains('$')
      .click(input.amount)
      .type('$40000')
  })
})
