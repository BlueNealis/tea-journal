describe('empty spec', () => {
  beforeEach(() => {
    cy.intercept('https://tea-list-api.herokuapp.com/api/v1/teas',{
      method: 'GET',
      fixture: '../fixtures/teas.json'
    })
    cy.visit('localhost:3000')
    })
  it('Should welcome user to Tea Journal', () => {
    cy.contains('Welcome To Tea Journal')
  })

  it('Should show all Teas available', () => {
    cy.get('.card-container').within(()=> {
      cy.get('.tea-card').should('have.length', 4)
      cy.get('.tea-card').eq(0).should('contain','Yunnan Gold')
        .and('contain',"pepper")
        .and('contain', "chocolate")
        .and('contain', "Steep at 212° for 3-5 minutes")
      cy.get('.tea-card').eq(1).should('contain','Silver Needle')
        .and('contain', "nutty")
        .and('contain', "floral")
        .and('contain', "Steep at 180° for 3 minutes" )
      cy.get('.tea-card').eq(2).should('contain','White Peony')
        .and('contain', "floral")
        .and('contain', "herbal")
        .and('contain', "Steep at 180° for 3 minutes")
      cy.get('.tea-card').eq(3).should('contain','Irish Breakfast')
        .and('contain', "brisk")
        .and('contain', "malty")
        .and('contain',"Steep at 212° for 3-5 minutes")
    })
  })

  it('Should be able to click on a tea to favorite it and unfavorite', () => {
      cy.get('.card-container').within(()=> {
        cy.get('.tea-card').eq(0).within(() => {
          cy.get('.favorite-button').click()
          cy.should('have.class', 'favorite-button-active')
        })
        cy.get('.tea-card').eq(1).within(() => {
          cy.get('.favorite-button').click()
          cy.should('have.class', 'favorite-button-active')
          cy.get('.favorite-button').click()
          cy.should('not.have.class', 'favorite-button-active')
        })
      })
  })

  it('Should bring user back to homepage if using a url with no Route', ()=> {
    cy.visit('localhost:3000/potatoes')
    cy.contains('Welcome To Tea Journal')
    cy.get('.card-container').within(()=> {
      cy.get('.tea-card').should('have.length', 4)
    })
  })
})
