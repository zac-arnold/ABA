/* global cy */

describe('The Home Page', () => {
  beforeEach(() => {
    // Add a reset and seed the database prior to every test
    // Without this, the food list will not show on the screen
    cy.exec('npm run db:reset && npm run db:seed')
  })

  it('Successfully loads the home page', () => {
    cy.visit('/')
    cy.get('h1')
      .contains('The Food List')

    cy.get('.subtitle')
      .contains('Home')
  })

  it('Correct number of foods', () => {
    cy.get('.food')
      .its('length')
      .should('be', 27)
  })

  it('Drop down list contains items', () => {
    cy.get('#category-list')
      .contains('Fruits')
  })

  it('Can navigate to the food details page', () => {
    cy.server()
    // alias the network request
    cy.route('/200?**').as('networkRequest')
    cy.get('.food').first().click()
    cy.url().should('include', '/foods/1')
  })
})
