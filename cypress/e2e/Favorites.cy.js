describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('https://tea-list-api.herokuapp.com/api/v1/teas',{
      method: 'GET',
      fixture: '../fixtures/teas.json'
    })
    cy.visit('localhost:3000')
    cy.get('.tea-card').eq(0).find('.favorite-button').click()
    cy.get('.tea-card').eq(2).find('.favorite-button').click()
    cy.get('.nav-button').eq(1).click()
  })

  it('should show all user selected favorites', () => {
    cy.get('.tea-card').should('have.length', 2)
    cy.get('.tea-card').eq(0).contains('Yunnan Gold')
    cy.get('.tea-card').eq(1).contains('White Peony')
  })

  it('should be able to unfavorite teas', () => {
    cy.get('.tea-card').eq(0).find('.favorite-button').click()
    cy.get('.tea-card').should('have.length', 1)
  })

  it('should be able to click on new entry button and be redirected to form page', () => {
    cy.get('.tea-card').eq(0).find('.entry-button').click()
    cy.url().should('eq', 'http://localhost:3000/new-entry')
  })

  it('should be able to go back to homepage and favorite more and have that be reflected on favorite page', () => {
    cy.contains('HOME').click()
    cy.get('.tea-card').eq(3).find('.favorite-button').click()
    cy.get('.nav-button').eq(1).click()
    cy.get('.tea-card').should('have.length', 3)
  })
})
