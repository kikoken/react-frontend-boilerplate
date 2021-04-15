describe('Login View', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('Login View is Load', () => {
    cy.contains('Login View')
    cy.get(':button').should('be.disabled')
  })

  it('Login form fail', () => {
    cy.get('input').first().type('email@email.com')
    cy.get('input').last().type('12345')
    cy.get('.Message-input--error').should('be.visible')
    cy.contains('Error password')
    cy.get(':button').should('be.disabled')
  })

  it('Login form ok', () => {
    cy.get('input').first().type('email@email.com')
    cy.get('input').last().type('S1mPl1R8').blur()
    cy.get(':button')
      .should('not.be.disabled')
      .then(($option) => {
        $option.click()
        cy.contains('App Index')
      })
  })
})
