/* global cy */

describe('the home page', () => {
  it('visits the home page', () => {
    cy.visit('http://localhost:3000/')
    cy.get('nav')
      .contains('Balance')
  })

  it('clicks through the instructions', () => {
    cy.contains('Got it!')
      .click()
  })
})
