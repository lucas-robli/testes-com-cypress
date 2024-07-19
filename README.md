Este repositório tem como objetivo mostrar o que estou estudando sobre Cypress:

1 - Criação de caminhos feliz e triste:
    - Caminho feliz: verificar se aplicação está funcionando como esperado;
    - Caminho triste: verificar se a aplicação está retornando avisos e alertas quando o usuário faz algo de forma errada, exemplo: Quando tenta acessar com o e-mail errado;

2 - Criar uma documentação com o próprio Cypress através dessa config:

    const { defineConfig } = require("cypress");

    module.exports = defineConfig({

        projectId: "rte6n1",

        e2e: {
            setupNodeEvents(on, config) {
            // implement node event listeners here
            },
            video: true,
            reporter: 'mochawesome',
            reporterOptions: {
            reportDir: 'cypress/results',
            overwrite: false,
            html: true,
            json: false,
            timestamp: "mmddyyyy_HHMMss"
            }
        },
    });
    #video: true -> aqui o cypress grava os testes em vídeos, e isso é muito interessante para verificar posteriormente se tudo foi executado de forma correta;
    #reporter: 'mochawesome' -> utilizamos o mochawesome, ele gera os relatorios em html e de forma muito clara e além disso podemos configurar para deixar os relátorios mais claros.

3 - Comandos Personalizados:

    Criamos essa configuração:
        Cypress.Commands.add("login", (email, password) => {
        cy.get('[data-test="input-loginEmail"]').type(email);
        cy.get('[data-test="input-loginPassword"]').type(password);
        cy.get('[data-test="submit-button"]').click();
        });
    
    para que em nossos testes pudessemos utilizar da seguinte maneira

    it('Deve Preencher os campos de login corretamente e autenticar o usuário na página', () => {
        cy.login('john@gmail.com', 'Senha123')
    })

    e isso é muito bom, pois podemos ter vários casos de teste aonde utilizariamos o "login", além 
    de poder deixar os dados dinamicos;

4 - Duble de Testes (STUBS):

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
            cy.login("john@gmail.com", "Senha123");
            cy.wait("@stubPost");
            cy.contains("Falha no login. Consulte suas credenciais.").should(
            "be.visible"
            );
        });
    });

    Com a utilização dos Stubs, podemos passar o status code (400) e mesmo se as informações
    do usuários estiverem corretas, nossa aplicação deve falhar, pois está vindo um status 400 
    e isso para garantir que nosso front-end está renderizando as coisas como deveria.

5 - Utilização de Fixtures:
    Com as fixtures podemos criar um json com diversos usuários e passar para nossos
    testes, nela criamos um array de usuários e posteriormente fazemos um laço de repetição
    aonde o teste irá passar por cada usuário, dessa forma podemos criar testes com diversos usuários;
