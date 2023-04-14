Cypress.Commands.add("getByData", (selector) => {
  return cy.get(`[data-cy=${selector}]`)
})
Cypress.Commands.add('login', () => {
  cy.session("Session", () => {
    cy.visit('/login')
      .get('input[name="email"]').type('KarlKoktest@innoscripta.com')
      .get('input[name="password"]').type("Test123!")
      .get('.btn').click()
      .location('pathname').should('eq', '/project-management')
  },
    {
      validate: () => {
        cy.wrap(localStorage)
          .invoke('getItem', 'user')
          .should('exist')
      },
    }
  )
})

