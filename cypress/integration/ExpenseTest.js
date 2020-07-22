/* global cy */

describe('how the expense component works', () => {
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
      .type('500000')
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

  it('input expense description in the Expense Description input', () => {
    cy.get('input.expenseDescription')
      .type('Power')
  })

  it('input expense amount', () => {
    cy.get('input.expenseAmount')
      .type('150')
  })

  it('selects Utilities Category from the dropdown', () => {
    cy.get('#categoryDescription')
      .select('Utilities')
  })

  it('selects Monthly from the dropdown', () => {
    cy.get('#frequencyDescription')
      .select('30.4375')
  })
})
