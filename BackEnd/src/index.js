const express = require('express'); // atribuindo todas as informações das funcionalidades do módulo express na váriavel express
const cors = require('cors');
const routes = require('./routes'); // para importar o arquivo "routes"
const app = express(); //criando a aplicação

app.use(cors()); //permitir com que todas as aplicações front end possam acessar esse back end
app.use(express.json()); // essa linha de comando faz com que o express vá ao corpo de requisição e converta o json em um objeto do javascript, isso ocorre antes de todas as requisições.
app.use(routes); // vai estar utilizando o "routes";


app.listen(3333); // aplicação vai ouvir a porta 3333 (localhost:3333)