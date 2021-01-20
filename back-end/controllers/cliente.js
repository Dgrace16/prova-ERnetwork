// Importar o model para dentro do controller
const Cliente = require('../models/Cliente')
 
const controller = {}
 
//Método novo(), implementando a operação CREATE
controller.novo = async (req, res) => {

    try{
        await Cliente.create(req.body)
        // envia os dados  dentro de req.body para o BD para criação 
        res.status(201).end()
        //HTTP 201: Created
    }
    catch(erro){
        console.error(erro)
        res.status(500).send(erro)
        //HTTp 500: Internal Server Error
    }
}
 
controller.listar = async (req, res) => {
    try{
    let dados = await Cliente.find()
    res.send(dados)
    // Ele retorna res.status(200) : OK
    }
    catch(erro){
        console.error(erro)
        res.status(500).send(erro)
        //HTTP 500: Internal Server Error
    }
}

// Método obterUm(), implementando a operação RETRIEVE(one) um
controller.obterUm = async (req, res) => {
    const id = req.params.id  // Capturando o parâmetro Id
    let obj = await Cliente.findById(id)

    if (obj) res.send(obj)
    // Se o objeto vier preenchido (achou), então retorne
    else res.status(404).end()
    // Se não (objeto vario), enviamos o status HTTP 404: Not found
}

// Método atualizar(), implementando a operação UPDATE
controller.atualizar = async (req, res) => {
    try {
        const id = req.body._id
        // Isolar o _id do objeto para fins de busca
        let obj = await Cliente.findByIdAndUpdate(id, req.body)

        if (obj) res.status(204).end()
         // Se encontrar e substituiu, retornando HTTP 204: No content
        else res.status(404).end()
        // Caso contrário, retorna HTTP 404: Not found 
    }
    catch (erro) {
        console.error(erro)
        res.status(500).end()
    }
}

// Método excluir(), implementando a operação DELETE
controller.excluir = async (req, res) => {
    try{
        const id = req.body._id
        // Isolar o _id para exclusão
        let obj = await Cliente.findByIdAndDelete(id)
        // Um método mais seguro do que passar pela URL
        
        if(obj) res.status(204).end()
        // Se encontrar e excluir, retornando HTTP 204: No content
        else res.status(404).end() 
        // Caso não encontre, retorna HTTP 404: Not found 
    }
    catch(erro){
        console.error(erro)
        res.status(500).send(erro)
         //HTTP 500: Internal Server Error
    }
}

//Exportador do controller
module.exports = controller