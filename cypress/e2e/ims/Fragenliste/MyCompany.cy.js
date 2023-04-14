describe('It should open and check Elster & Account', () => {
    beforeEach(() => {
      cy.login() // Execute authorezation
    })
    it('It should visit and check my company page to General', () => {
      cy.visit('/myCompany')
        .location('pathname').should('eq', '/myCompany')
        .get('.ca_button.fr-box__button.variant2.hastext.hasicon').eq(0).click()
        .location('pathname').should('eq', '/fragenliste/elster-and-account')
    })
})