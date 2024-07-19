describe('Api Adopet', () => {
    const authorization = `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2YjdhM2JlNi0xN2I3LTQ3N2ItOGZmYi1kNzcyYmRmNzliNWUiLCJhZG9wdGVyTmFtZSI6Imx1Y2FzIiwiaWF0IjoxNzIxMjM3NTYxLCJleHAiOjE3MjE0OTY3NjF9.mgD9os5o7EyqYLHBvYZkU9_XARu7dz8ELRuQ0mMzrW4`

    it('Mensagens da API', () => {
        cy.request({
            method: 'GET',
            url: 'https://adopet-api-i8qu.onrender.com/adotante/perfil/6b7a3be6-17b7-477b-8ffb-d772bdf79b5e',
            headers: {authorization}
        }).then((res) => {
            expect(res.status).to.be.equal(200)
            expect(res.body).is.not.empty
            expect(res.body).to.have.property('perfil')
            expect(res.body.perfil.nome).to.be.equal('lucas')
        } )
    })
})