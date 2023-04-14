describe('It should check Elster & Account page components', () => {
  beforeEach(() => {
    cy.login() // Execute authorezation
    cy.visit('/fragenliste/elster-and-account')
  })

  it('Should uncheck all checkboxes', () => {
    cy.get(':checkbox').uncheck().should('not.to.be.checked')
  })
  it('Should open Elster page', () => {
    cy.getByData('toElsterButton').click()
  })

  it('Should open registration elster page', () => {
    cy.getByData('hereElsterButton').then((hereElsterButton) => {
      cy.wrap(hereElsterButton).click()
    })
  })

  it('Should check elster certificate checkbox', () => {
    cy.get('input[name=has_elster_certificate]').check().should('to.be.checked')
  })

  it('Should open portal of the certification office', () => {
    cy.getByData('toBfszPortalbutton').then((toBfszPortalbutton) => {
      cy.wrap(toBfszPortalbutton).click({ force: true })
    })
  })
  it('Should open download Tutorial Elster', () => {
    cy.getByData('downloadTutorialElster').then((downloadTutorialElster) => {
      cy.wrap(downloadTutorialElster).click({ force: true })
    })
  })

  it('Should check bsfz access granted checkbox', () => {
    cy.get('input[name=bsfz_access_granted]').check().should('to.be.checked')
  })
})