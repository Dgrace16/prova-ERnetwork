const db = require('../config/database')

const Cliente = db.sequelize.define('cliente',{
    codigo_cliente: {
        type: db.Sequelize.STRING,
        required: true
    },
    nome_cliente:{
        type: db.Sequelize.STRING,
        required: true
    },
    sexo:{
        type: db.Sequelize.STRING,
        required: true,
        enun: ['masculino','feminino']
    },
    rg:{
        type: db.Sequelize.STRING,
        required: true
    },
    cpf:{
        type: db.Sequelize.STRING,
        required: true,
        index: {
            unique: true
        }
    },
    dt_nascimento:{
        type: db.Sequelize.STRING,
        required: true
    },
    salario:{
        type: db.Sequelize.FLOAT,
        required: true
    },
    cidade:{
        type: db.Sequelize.object, 
        ref: 'Cidade',
        required: true
    }
})

//Criar a tabela
// cliente.sync({force: true})

modele.exports = Cliente