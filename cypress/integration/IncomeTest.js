/* global cy */

describe('how the income component works', () => {
  it('visits the home page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('nav')
      .contains('Balance')
  })

  it('clicks through the instructions', () => {
    cy.contains('Got it!')
      .click()
  })

  it('input income description in the Income Description input', () => {
    cy.get('input.incomeDescription')
      .type('Salary')
  })

  it('input salary description', () => {
    cy.get('input.amountDescription')
      .type('50000')
  })

  it('inputs Category description', () => {
    cy.get('input.categoryDescription')
      .type('ANZ')
  })

  it('selects Monthly from the dropdown', () => {
    cy.get('#frequencyDescription')
      .select('30.4375')
  })

  it('clicks the add button in the Income modal', () => {
    cy.contains('Add')
      .click({ force: true })
  })

  it('clicks the x button in the Income modal', () => {
    cy.contains('X')
      .click()
  })
})
