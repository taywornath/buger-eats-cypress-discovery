var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function(){

        // criar dados fakes
        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {
            //concatenar com fake data, add espaço entre o nome e sobrenome
            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '55999998888',
            address: {
                postalcode: '88307010',
                number: '205',
                details: '3/33'
            },
            delivery_method: 'Moto',
            cnh: 'cnh-digital.png'
        }

        return data

    }

}