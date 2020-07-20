describe('the Welcome component', () => {
  it('Visits Local Host 3000', () => {
    cy.visit('http://localhost:3000/')
  })
})

describe('the budget page', () => {
  it('visits the budget page', () => {
    cy.vist('http://localhost:3000/budget')
  })
})
