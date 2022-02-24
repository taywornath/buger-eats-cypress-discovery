
describe('home page', ()=>{
    it ('App deve estar online', ()=>{
        //busca a baseUrl do cypress.json e aqui só coloca /
        cy.visit('/')

        //usando o Open Selector Playground do Cypress, o titulo é localizado pelo id 'h1'
        //cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

        // para buscar o elemento contendo toda raiz/caminho, buscamos com CTRL+F no F12/Elements usando o #
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})