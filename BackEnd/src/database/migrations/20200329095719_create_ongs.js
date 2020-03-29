
// para criar uma migration através do knex.js, basta executar o código npx knex migrate:make "nomeDaMigration" no terminal

exports.up = function(knex) { // método up() é sempre o responsável pela criação da tabela ao executar a migration
  
    return knex.schema.createTable('ongs' /* nome da tabela */,function(table){ // função que recebe a tabela como parâmetro
    table.string('id').primary(); // campo id, .primary() transforma a coluna "id" em chave primária
    table.string('name').notNullable(); //campo name, .notNullable() que diz que o campo "name" não poderá ser vazio
    table.string('email').notNullable(); //campo email
    table.string('whatsapp').notNullable(); //campo whatsapp
    table.string('cidade').notNullable(); //campo cidade
    table.string('uf', 2).notNullable(); //campo uf, poderá conter apenas 2 caracteres 
});
};

exports.down = function(knex) { // método down() é para caso dê algo errado e precise desfazer
    return knex.schema.dropTable('ongs'); // deletar a tabela 'ongs'
};

//Para rodar a migrate é necessário executar o comando - "npx knex migrate:latest" no terminal

