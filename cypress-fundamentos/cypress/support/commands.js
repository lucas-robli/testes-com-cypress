Cypress.Commands.add("login", (email, password) => {
  cy.get('[data-test="input-loginEmail"]').type(email);
  cy.get('[data-test="input-loginPassword"]').type(password);
  cy.get('[data-test="submit-button"]').click();
});

Cypress.Commands.add("cadastro", (nome, email, password) => {
    cy.get('[data-test="input-name"]').type(nome); 
    cy.get('[data-test="input-email"]').type(email);
    cy.get('[data-test="input-password"]').type(password);
    cy.get('[data-test="input-confirm-password"]').type(password);
    cy.get('[data-test="submit-button"]').click()
})