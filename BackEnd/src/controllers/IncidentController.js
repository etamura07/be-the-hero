const connection = require('../database/connection')

module.exports = {
    async index(request, response){// Método List
        const { page = 1 } = request.query; // mantendo por padrão na variável page o valor = 1, mas se a rota possuir um query param (parametro após '?') será atribuido o valor da query param

        const [count] = await connection('incidents') // Fazendo a contagem total de incidentes de uma ong específica 
            .count();
        
        const incidents = await connection('incidents')
            .join('ongs', 'ongs.id', '=', 'incidents.ong_id') //fazendo um join entre a tabela ong e incident, utilizando o ong.id e o incident.ong_id para relacioná-las
            .limit(5) //Limitando a exibição de incidentes em 5 
            .offset((page -1) * 5) //Separar 5 incidentes por página
            .select(['incidents.*',
            'ongs.name',
            'ongs.email',
            'ongs.whatsapp',
            'ongs.cidade',
            'ongs.uf'
        ]);
        
        response.header('X-Total-Count',count['count(*)']); //Passar a resposta para o header referente ao total de incidentes    
        return response.json(incidents);
    },



    async create(request, response){//Método Create
        const {title, description, value} = request.body;
        
        const ong_id = request.headers.authorization; // atribuindo a variavel ong_id, um parâmetro do header, mais especificamente do parâmetro authorization

        const [id] = await connection('incidents').insert({
            title,
            description,
            value,
            ong_id,
        });

        return response.json({ id });
    },

    async delete(request, response){ //método Delete 
        const { id } = request.params; //atribuindo a váriavel id a route param id
        const ong_id = request.headers.authorization; //atribuindo a variável ong_id o parâmetro authorization do header da requisição

        const incident = await connection('incidents') //atribuindo a variavel "incident" a ong_id do incidente que foi chamado na requisição
            .where('id',id)
            .select('ong_id')
            .first();
        
        if(incident.ong_id != ong_id){ // se ong_id do incidente for diferente da ong_id do usuário que está acessando
            return response.status(401).json({ error: 'Operation not permitted.'}); //irá retornar uma resposta de erro informando que operação não é permitida
        }    
        
        await connection('incidents').where('id',id).delete();

        return response.status(204).send(); //retornando ao navegador, uma resposta sem conteúdo mas que deu sucesso

    }
};