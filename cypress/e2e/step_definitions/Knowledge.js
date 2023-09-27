import { Given, Then } from "@badeball/cypress-cucumber-preprocessor";

Given("I open javan knowledge page", function () {
  Cypress.on("uncaught:exception", (err, runnable) => {
    console.log(err);
    return false;
  });
  cy.visit("https://javan.co.id/knowledge", {
    failOnStatusCode: false,
  });
  cy.wait(5000);

});

Then ("I Choose and Check Combo Box PM", function () {
    cy.get('#knowledge-btn-categories').click()
    cy.contains('Project Manager').click()
  cy.get('#knowledge-btn-categories').should(
    "have.text",
    "Project Manager"
  );

});

Then ("I Choose and Check Combo Box BPMN", function () {
    cy.get('#knowledge-btn-categories').click()
    cy.contains('BPMN').click()

  cy.get('#knowledge-btn-categories').should(
    "have.text",
    "Project Manager"
    );
});