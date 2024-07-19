// Funcionalidades: Login no site Adopet

// Cenário: Login no sistema com sucesso
// Passos:
// 1 - O usuário acessa a página de login
// 2 - O usuário insere seu e-mail "jeff@gmail.com" e senha "Senha123" nos campos correspondentes
// 3 - O usuário clica no botão "Entrar"

// Resultados Esperados:

// O sistema autentica as credenciais fornecidas
// O sistema redireciona o usuário para a página "/home"

describe('Pagina de Login', () => {

    beforeEach(() => {
        cy.visit('https://adopet-frontend-cypress.vercel.app/');
        cy.get('[data-test="login-button"]').click();
    })

    it('Deve Preencher os campos de login corretamente e autenticar o usuário na página', () => {
        cy.login('jeff@gmail.com', 'Senha123')
    })


})