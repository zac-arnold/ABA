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

  // Income
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

  // Expense 1
  it('input expense description in the Expense Description input', () => {
    cy.get('.mt-2 > .p-2 > :nth-child(1) > .form-control')
      .type('Power')
  })

  it('input expense amount', () => {
    cy.get('.mt-2 > .p-2 > :nth-child(2) > .number-input')
      .type('150')
  })

  it('selects Utilities Category from the dropdown', () => {
    cy.get('.mt-2 > .p-2 > :nth-child(3) > .form-control')
      .select('Utilities')
  })

  it('selects Monthly from the dropdown', () => {
    cy.get('#frequencyDescription')
      .select('30.4375')
  })

  it('clicks the add button in the Expense modal', () => {
    cy.get('.mt-2 > .align-middle > :nth-child(2) > .float-right')
      .click({ force: true })
  })

  // Expense 2
  it('input expense description in the Expense Description input', () => {
    cy.get('.mt-2 > .p-2 > :nth-child(1) > .form-control')
      .type('Coffee')
  })

  it('input expense amount', () => {
    cy.get('.mt-2 > .p-2 > :nth-child(2) > .number-input')
      .type('5')
  })

  it('selects Utilities Category from the dropdown', () => {
    cy.get('.mt-2 > .p-2 > :nth-child(3) > .form-control')
      .select('Food')
  })

  it('selects Monthly from the dropdown', () => {
    cy.get('#frequencyDescription')
      .select('1')
  })

  it('clicks the add button in the Expense modal', () => {
    cy.get('.mt-2 > .align-middle > :nth-child(2) > .float-right')
      .click({ force: true })
  })

  // Expense 3
  it('input expense description in the Expense Description input', () => {
    cy.get('.mt-2 > .p-2 > :nth-child(1) > .form-control')
      .type('Rent')
  })

  it('input expense amount', () => {
    cy.get('.mt-2 > .p-2 > :nth-child(2) > .number-input')
      .type('250')
  })

  it('selects Utilities Category from the dropdown', () => {
    cy.get('.mt-2 > .p-2 > :nth-child(3) > .form-control')
      .select('Home')
  })

  it('selects Monthly from the dropdown', () => {
    cy.get('#frequencyDescription')
      .select('7')
  })

  it('clicks the add button in the Expense modal', () => {
    cy.get('.mt-2 > .align-middle > :nth-child(2) > .float-right')
      .click({ force: true })
  })
})
