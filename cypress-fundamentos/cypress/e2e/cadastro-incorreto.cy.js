describe('Página de Cadastro', () => {

  beforeEach(() => {
    cy.visit('https://adopet-frontend-cypress.vercel.app/');
    cy.get('[data-test="register-button"]').click();
  })


  it('Preencher os campos do formulário incorretamente e exibir mensagens ao usuário', () => {
    cy.cadastro('Lucas', '', 'Senha123')
  })
})