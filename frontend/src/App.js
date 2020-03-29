import React from 'react';

import './global.css';

import Routes from './routes';


// Quando o HTML está escrito dentro de um arquivo javascript, é chamado de JSX(JavaScript XML)

// Um componente no react é uma função que retorna html, ela pode ter funcionalidades javascript

// Propriedades no react tem a mesma sintaxe de atributos, porém são atributos repassados para componentes ao invés de elementos no html

// O estado, toda vez que for alterado o componente será remontado!
// Não se pode alterar o valor do estado de uma maneira direta
// o UseState retorna um Array[valor, funçãoDeAtualização], com essa função de atualização retornada pelo array conseguimos setar o valor

function App() {
  return (
    <Routes />
  );
}

export default App;
