import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open javan management team page", function () {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });
  cy.visit("https://javan.co.id/information/management", {
    failOnStatusCode: false,
  });
  cy.wait(5000);

});

Then ("I Check Wording Management Team", function () {
    
  cy.get('.aos-animate > .mx-auto').should(
    "have.text",
    "Providing world-class software development services is not an easy job. Here is a Management team that always tries to provide the best for external parties (clients and partners) and internal teams."
  );

});

