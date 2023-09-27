// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
Cypress.on("uncaught:exception", (err, runnable, promise) => {
    console.log(err);
    // if (err.message.includes("n")) {
    //   return false;
    // }
    // if (err.message.includes("Rendering cancelled, page 1")) {
    //   return false;
    // }
    // if (err.message.includes("Rendering cancelled, page 2")) {
    //   return false;
    // }
    // if (err.message.includes("Rendering cancelled, page 3")) {
    //   return false;
    // }
  
    // if (promise) {
    //   return false;
    // }
  
    return false;
  });
  