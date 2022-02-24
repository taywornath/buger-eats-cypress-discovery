import signupPage from '../pages/SignupPage'
//importar modulo de factory
import signupFactory from '../factories/SignupFactory'
import SignupPage from '../pages/SignupPage'

describe('Signup', () => {

//    beforeEach(function () {
//        cy.fixture('deliver').then((d) => {
//            this.deliver = d
//        })
//    })

    // primeiro caso de teste 
    it('Becoming a deliver', function () {

        var deliver = signupFactory.deliver()

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()

        //criar constante para armazenar texto muito grandes
        const expectedMessage = 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.'
        signupPage.modalContentShouldBe(expectedMessage)

    })


    //segundo caso de teste, cpf inválido
    it('Invalid document', function () {

        var deliver = signupFactory.deliver()

        deliver.cpf = '00000000AA'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! CPF inválido')

    })


    //terceiro caso de teste, email inválido
    it('Invalid email format', function () {

        var deliver = signupFactory.deliver()

        deliver.email = 'teste.com.br'

        signupPage.go()
        signupPage.fillForm(deliver)
        signupPage.submit()
        signupPage.alertMessageShouldBe('Oops! Email com formato inválido.')

    })


    //caso de teste para validar campos obrigatórios com contexto forma dinamica
    context('Required fields', function (){

        const messages = [
            { field:'name', output: 'É necessário informar o nome'},
            { field:'cpf', output: 'É necessário informar o CPF'},
            { field:'email', output: 'É necessário informar o email'},
            { field:'postalcode', output: 'É necessário informar o CEP'},
            { field:'number', output: 'É necessário informar o número do endereço'},        
            { field:'delivery_method', output: 'Selecione o método de entrega'},
            { field:'cnh', output: 'Adicione uma foto da sua CNH'}
        ]
        
        //executa uma unica vez antes
        before(function(){
            signupPage.go()
            signupPage.submit()
        })    

        //executado todos os testes mesmo quando 1 msg de validação falhar
        messages.forEach(function(msg){
            it(`${msg.field} is required`, function(){
                signupPage.alertMessageShouldBe(msg.output)
            })
        })
    })
    

})