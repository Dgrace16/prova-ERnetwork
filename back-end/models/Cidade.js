const db = require('../config/database')

const Cidade = db.sequelize.define('cidade',{
    codigo_cidade: {
        type: db.Sequelize.STRING,
        required: true
    },
    nome_cidade:{
        type: db.Sequelize.STRING,
        required: true
    },
    uf:{
        type: db.Sequelize.STRING,
        required: true
    }
})

//Criar a tabela
// Cidade.sync({force: true})

module.exports =  Cidade