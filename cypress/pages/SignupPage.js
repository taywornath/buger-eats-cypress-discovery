

class SignupPage{

    //função para acessar a pagina e entrar no link de cadastro
    go () {
        //buscando a URL padrão definida no cypress.json (baseUrl) e só colocando / pra direcionar
        cy.visit('/')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')
    }

    //função recebe o objeto deliver, que é a massa de teste
    fillForm(deliver){
        cy.get('input[name="fullName"]').type(deliver.name)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)
        
        cy.get('input[name="postalcode"]').type(deliver.address.postalcode)
        cy.get('input[type="button"][value="Buscar CEP"]').click()

        cy.get('input[name="address-number"]').type(deliver.address.number)
        cy.get('input[name="address-details"]').type(deliver.address.details)

        cy.get('input[name="address"]').should('have.value', ('Rua Lico Amaral'))
        cy.get('input[name="district"]').should('have.value', ('Dom Bosco'))
        cy.get('input[name="city-uf"]').should('have.value', ('Itajaí/SC'))  
        
        cy.contains('.delivery-method li', deliver.delivery_method).click()

        //concatenar o caminho dentro de fixtures com a imagem a ser buscada
        cy.get('input[accept^="image"]').attachFile('/images/' + deliver.cnh)
    }

    submit(){
        cy.get('form button[type="submit"]').click()
    }

    modalContentShouldBe(expectedMessage){
        cy.get('.swal2-container .swal2-html-container').should('have.text', expectedMessage) 
    }

    alertMessageShouldBe(expectedMessage){
        //somente valido para 1 elemento por chamada, pois primeiro busca o elemento e depois valida
        //cy.get('[class="alert-error"]').should('have.text', expectedMessage)

        //esse aqui faz a combinação de texto e classe para busca e valida se está visível
        // permite validar varios elementos retornados, ex: obrigatorios
        cy.contains('.alert-error', expectedMessage).should('be.visible')
    }

    }

export default new SignupPage;