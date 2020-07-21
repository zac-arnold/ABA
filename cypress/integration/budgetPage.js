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

  it('chooses monthly in the combo box', () => {
    cy.get('select')
      .click({ multiple: true })
    // .select()
    // cy.select('Monthly')
    //   .click()
  })
})
