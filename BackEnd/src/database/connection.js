//Arquivo responsável pela conexão com o banco de dados

const knex = require('knex'); //importanto o framework knex
const configuration = require('../../knexfile'); //importando as configurações do banco de dados presentes no arquivo knexfile

const connection = knex(configuration.development); //criação da conexão utilizando o knex e passando para o knex como parâmetro o configuration.development, que é a configuração de conexão com o ambiente de desenvolvimento

module.exports = connection; //exportando a conexão com banco de dados
