describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('localhost:3000')
    cy.intercept("GET",'https://tea-list-api.herokuapp.com/api/v1/teas',{ fixture: '../fixtures/teas.json'})
    cy.get('.tea-card').eq(2).find('.entry-button').click()
  })

it('should be able to select a Tea and update the form to reflect that', () => {
    cy.get('form').within(() => {
      cy.get('select').select('White Peony')
      cy.contains('White Peony')
    })
  })

  it('should have all teas in option list on page load', () => {

  })

  it('should be able to fill out form', () => {

  })

  it('should not be able to submit form until all fields have been filled out', () => {

  })

  it('should redirect to teasperiences page when the user submits their entry', () => {

  })

  it('should clear the form after the entry is submitted', () => {

  })

})
