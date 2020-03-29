const crypto = require('crypto');
const connection = require('../database/connection');

module.exports = {
    
    
    async index(request, response){
    const ongs = await connection('ongs').select('*') //conectando a tabela "ongs" e dando select em todos os registros dela
    //await para aguardar o código finalizar
    
    return response.json(ongs);// retornar um array de json dos registros da tabela ongs
    },
    
    
    async create(request, response){ //recebendo dois parâmetros, o primeiro é a rota e o segundo é uma função que recebe dois argumento: a requisição e a resposta
        const {name, email, whatsapp, cidade, uf} = request.body; //armazenando as informações do corpo da requisição na variável "body"

        const id = crypto.randomBytes(4).toString('HEX'); //atribuindo a variável id, uma string random hexadecimal de 4 caracteres, para cada id ela vai montar uma string randomica

        await connection('ongs').insert({ // chamando o método de conexão de banco de dados passando como parâmetro a tabela 'ongs' e, em seguida chamando o método insert para inserir
        // as informações na tabela 'ongs'
            id,
            name,
            email,
            whatsapp,
            cidade,
            uf,
        })   
        
        return response.json({ id }); //para retornar uma resposta para o cliente é utilizado o response
    
        //response.send para retornar texto
        //response.json para retornar json
    }
};