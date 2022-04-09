import "@testing-library/cypress/add-commands";

/**
 * Custom Cypress commands to be used across different tests.
 *
 * @author Ricardo Lopes (ricardo.lopes@feedzai.com)
 */

// Global variable to store URL for EVA API
URL = 'https://api.eva.pingutil.com/email'

/**
 * Queries the EVA API with a given e-mail and asserts that the response contains a
 * HTTP Status OK, the sent e-mail address and a bollean representing if the
 * e-mail has a valid syntax.
 * 
 * @param email   the e-mail address to be sent as query parameter.
 * @param isValid bolean value that identify if the e-mail has a valid syntax or not.
 *
 * @returns {void}
 */
Cypress.Commands.add('queryApiAndValidateRequest', (email, isValid) => {
    cy.request({ url: URL, qs: { 'email': email } }).as('request');
    cy.get('@request')
      .then(
        response => {
          cy.log(JSON.stringify(response.body));
          expect(response.status).to.eq(200);
          expect(response.body.data.email_address).to.eq(email);
          expect(response.body.data.valid_syntax).to.eq(isValid)
        })
  })