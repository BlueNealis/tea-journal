describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept("GET",'https://tea-list-api.herokuapp.com/api/v1/teas',{ fixture: '../fixtures/teas.json'})
    cy.visit('localhost:3000')
    cy.get('.tea-card').eq(2).find('.entry-button').click()
    cy.get('form').within(() => {
      cy.get('select').select('White Peony')
      cy.get('.date-input').type('2022-08-08')
      cy.get('.input-experience').type('Eloquent')
      cy.get('.input-notes').type('fresh, green')
      cy.get('.submit-button').click()
    })
  })
    cy.contains('HOME').click()
    cy.get('.tea-card').eq(2).find('.entry-button').click()
    cy.get('form').within(() => {
      cy.get('select').select('Irish Breakfast')
      cy.get('.date-input').type('2022-08-10')
      cy.get('.input-experience').type('A strong morning start')
      cy.get('.input-notes').type('earthy, bold')
      cy.get('.submit-button').click()
    })
  })
  it('should show all teasperiences', () => {
    cy.get('.entry-card').should('have.length', 2)
    cy.should('contain','A strong morning start')
    .and('contain', 'Eloquent')
    .and('contain', 'White Peony')

  })
})
