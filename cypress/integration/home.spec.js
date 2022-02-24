
describe('home page', ()=>{
    it ('App deve estar online', ()=>{
        cy.viewport(1920, 1080)
        cy.visit('https://buger-eats.vercel.app')

        //usando o Open Selector Playground do Cypress, o titulo é localizado pelo id 'h1'
        //cy.get('h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

        // para buscar o elemento contendo toda raiz/caminho, buscamos com CTRL+F no F12/Elements usando o #
        cy.get('#page-home main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    })
})