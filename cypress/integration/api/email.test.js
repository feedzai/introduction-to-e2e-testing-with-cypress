/// <reference types="cypress" />

/**
 * Example of tests against EVA API using Cypress capabilities to
 * interract with Rest APIs.
 *
 * @author Ricardo Lopes (ricardo.lopes@feedzai.com)
 */

// Global variable to store URL for EVA API
URL = 'https://api.eva.pingutil.com/email'

describe('example tests for rest api - e-mail validator', () => {
  it('validate no email parameter', () => {
    // prepare request, simply query the URL without any parameter
    cy.request({ url: URL }).as('noEmailParameter');

    // sent a get request
    cy.get('@noEmailParameter')
      .then(
        response => {
          // print response for debug purposes
          cy.log(JSON.stringify(response.body))
          // assert status
          expect(response.status).to.eq(200);
          // assert the body contains a message 'e-mail is missing'
          // we are using .toString() because message is in plain/text, and so we could not parse it as json object
          // ideally would be expect(response.body.message).to.eq("Email is missing")
          expect(response.body.toString()).to.includes("Email is missing")
        });
  });

  it('validate valid email', () => {
    let validEmail = "john.doe@company.com";
    cy.request({ url: URL, qs: { 'email': validEmail } }).as('validEmail');

    cy.get('@validEmail')
      .then(
        response => {
          cy.log(JSON.stringify(response.body))
          expect(response.status).to.eq(200);
          expect(response.body.data.email_address).to.eq(validEmail)
          expect(response.body.data.valid_syntax).to.eq(true)
        });
  });

  it('validate invalid email', () => {
    let invalidEmail = ";doe@company.com";
    cy.request({ url: URL, qs: { 'email': invalidEmail } }).as('invalidEmail');

    cy.get('@invalidEmail')
      .then(
        response => {
          cy.log(JSON.stringify(response.body))
          expect(response.status).to.eq(200);
          expect(response.body.data.email_address).to.eq(invalidEmail)
          expect(response.body.data.valid_syntax).to.eq(false)
        });
  });

  it('validate invalid mail - refactored method', () => {
    let email = ";doe@company.com";
    let isValid = false;
    cy.queryApiAndValidateRequest(email, isValid);
  });
})
