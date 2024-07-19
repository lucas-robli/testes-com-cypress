// Funcionalidade: Login no site Adopet

// Cenário: Falha no login do sistema

// Passos:

// O usuário acessa a página de login.
// O usuário insere um e-mail e senha fora do padrão aceito nos campos correspondentes.
// O usuário clica no botão de login.
// Resultados Esperados:

// O sistema valida as credenciais fornecidas.
// O sistema exibe mensagens de erro específicas para o e-mail e senha inseridos incorretamente, como: "Por favor, verifique o e-mail digitado" e/ou "A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres".
// Regra de Negócio:

// O e-mail deve ter um formato válido.
// A senha deve conter pelo menos uma letra maiuscula, um número e ter entre 6 e 15 caracteres

describe("Pagina de Login", () => {
  beforeEach(() => {
    cy.visit("https://adopet-frontend-cypress.vercel.app");
    cy.get('[data-test="login-button"]').click();
    cy.intercept(
      "POST",
      "https://adopet-api-i8qu.onrender.com/adotante/login",
      {
        statusCode: 400,
      }
    ).as("stubPost");
  });

  it("Deve falhar mesmo que os campos sejam preenchidos corretamente", () => {
    cy.login("jeff@gmail.com", "Senha123");
    cy.wait("@stubPost");
    cy.contains("Falha no login. Consulte suas credenciais.").should(
      "be.visible"
    );
  });

  it('A senha deve conter pelo menos uma letra maiuscula, um número e ter entre 6 e 15 caracteres ', () => {
      cy.login('jeff@gmail.com', 'senha123')
      cy.contains('A senha deve conter pelo menos uma letra maiúscula, um número e ter entre 6 e 15 caracteres').should('be.visible')
  })
});
