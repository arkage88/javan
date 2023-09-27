import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open javan landing page", function () {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });
  cy.visit("https://javan.co.id/", {
    failOnStatusCode: false,
  });
  cy.wait(5000);

});

Then ("I Check Footer Wording Jakarta Branchless Business Team", function () {
  cy.scrollTo('bottom')
  cy.wait(10000);
  cy.get('.pt-4:nth-child(3)').should(
    "have.text",
    "Jakarta Branchless Business Team"
  );

});

Then ("I Check Footer Wording Bandung Branchless Business Team", function () {
  cy.scrollTo('bottom')
  cy.wait(10000);
  
  cy.get('.flex:nth-child(3) > .text-xl:nth-child(1)').should(
    "have.text",
    "Bandung Branchless Business Team"
  );

});