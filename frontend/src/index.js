import React from 'react'; //importando o react
import ReactDOM from 'react-dom'; //importando o reactDom, que é basicamente a integração do react com o navegador( que é a dom (árvore de elementos))
import App from './App';

ReactDOM.render(<App/>,document.getElementById('root')); //Está renderizando o componente "App" dentro do elemento "root"


