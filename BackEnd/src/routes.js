const express = require('express');
const OngController = require('./controllers/OngController'); //Importando OngController
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
const routes = express.Router();

/**
* Rota/Recurso
*/

/**
 * Métodos HTTP:
 * 
 * GET: Buscar uma informação do back-end
 * POST: Criar uma informação no back-end
 * PUT: Alterar uma informação no back-end
 * DELETE: Deletar uma informação no back-end
 */

/**
 * Tipos de parâmetros:
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (Filtros, paginação)
 * Route params: Parâmetros utilizados para identificar recursos
 * Request Body: Corpo da requisição, utilizado para criar ou alterar recursos
 */

routes.post('/sessions', SessionController.create);

routes.get('/ongs', OngController.index); // criando uma rota do tipo GET, para listar todas as ongs do banco de dados
//dando o funcionamento para a rota principal - é a rota raiz!
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);
routes.get('/incidents',IncidentController.index);
routes.post('/incidents',IncidentController.create);
routes.delete('/incidents/:id',IncidentController.delete);
    

    


module.exports = routes; //para exportar alguma variável de dentro do arquivo