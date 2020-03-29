// para criar uma migration através do knex.js, basta executar o código npx knex migrate:make "nomeDaMigration" no terminal

exports.up = function(knex) {
    return knex.schema.createTable('incidents' /* nome da tabela */,function(table){ // função que recebe a tabela como parâmetro
        table.increments(); //esse campo será uma chave primária auto-increment, ou seja, cada vez que cria um novo registro o id vai ser incrementado sequencialmente
        table.string('title').notNullable(); //campo title, .notNullable() que diz que o campo "title" não poderá ser vazio
        table.string('description').notNullable(); //campo description
        table.decimal('value').notNullable(); //campo whatsapp

        table.string('ong_id').notNullable(); //campo ong_id, para relacionamento com um registro 'ong' da outra tabela

        table.foreign('ong_id').references('id').inTable('ongs'); //chave estrangeira referenciando o campo "ong_id" com o id da tabela "ong"
    });
};

exports.down = function(knex) {
    return knex.schema.dropTable('incidents');
};