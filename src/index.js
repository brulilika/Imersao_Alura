import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/home/App';

import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';
import CadastroVideo from './pages/cadastro/video';
import CadastroCategoria from './pages/cadastro/categoria';

//componentes que estao sendo mostrado na tela
ReactDOM.render(
  //<React.StrictMode>
  //  <App />
  //</React.StrictMode>,

  //switch é importante pois ele faz as escolhas entre as rotas cadastradas no route
  //o uso do exact faz que seja necessário que o path seja exatamente igual para direcionar
  <BrowserRouter>
    <Switch> 
      <Route path="/" component={App} exact/>
      <Route path="/cadastro/video" component={CadastroVideo} exact/>
      <Route path="/cadastro/categoria" component={CadastroCategoria}/>
    </Switch>
  </BrowserRouter>,

  //arquivo responsável por inicializar o react
  document.getElementById('root')
);

