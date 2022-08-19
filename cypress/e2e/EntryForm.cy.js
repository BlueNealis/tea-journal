describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept("GET",'https://tea-list-api.herokuapp.com/api/v1/teas',{ fixture: '../fixtures/teas.json'})
    cy.visit('localhost:3000')
    cy.get('.tea-card').eq(2).find('.entry-button').click()
  })

it('should be able to select a Tea and update the form to reflect that', () => {
    cy.get('form').within(() => {
      cy.get('select').select('White Peony')
      cy.contains('White Peony')
    })
  })

  it('should have all teas in option list on page load', () => {
    cy.get('form').within(() => {
      cy.get('select').select('Yunnan Gold')
      cy.get('select').select('Irish Breakfast')
      cy.get('select').select('Silver Needle')
    })
  })

  it('should be able to fill out form', () => {
    cy.get('form').within(() => {
      cy.get('select').select('White Peony')
      cy.get('.date-input').type('2022-08-08')
      cy.get('.input-experience').type('Eloquent')
      cy.get('.input-notes').type('fresh, green')
      cy.get('.submit-button').click()
    })
  })

  it('should not be able to submit form until all fields have been filled out', () => {
    cy.get('form').within(() => {
      cy.get('select').select('White Peony')
      cy.get('.date-input').type('2022-08-08')
      cy.get('.input-notes').type('fresh, green')
      cy.get('.submit-button').should('be.disabled')
    })
    cy.url().should('eq','http://localhost:3000/new-entry')
  })

  it('should redirect to teasperiences page when the user submits their entry', () => {
    cy.get('form').within(() => {
      cy.get('select').select('White Peony')
      cy.get('.date-input').type('2022-08-08')
      cy.get('.input-experience').type('Eloquent')
      cy.get('.input-notes').type('fresh, green')
      cy.get('.submit-button').click()
    })
      cy.url('localhost:3000/teasperiences')
  })

  it('should clear the form after the entry is submitted', () => {
    cy.get('form').within(() => {
      cy.get('select').select('White Peony')
      cy.get('.date-input').type('2022-08-08')
      cy.get('.input-experience').type('Eloquent')
      cy.get('.input-notes').type('fresh, green')
      cy.get('.submit-button').click()
    })
      cy.url('localhost:3000/teasperiences')
      cy.visit('localhost:3000/new-entry')
      cy.get('form').within(() => {
        cy.get('.date-input').should('not.have.value','2022-08-08' )
        cy.get('.input-experience').should('not.have.value', 'Eloquent')
        cy.get('.input-notes').should('not.have.value', 'fresh,green')
      })
  })

})
