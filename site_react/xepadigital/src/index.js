import React from 'react';
import ReactDOM from 'react-dom';
import Inicial from './assets/pages/Inicial/Inicial';
import * as serviceWorker from './serviceWorker';
import './assets/css/style.css';

import {Route, BrowserRouter as Router, Switch,} from 'react-router-dom';
import Colaboradores from './assets/pages/Colaboradores/Colaboradores';
import Duvidas from './assets/pages/Duvidas/Duvidas';
import Cadastro_Receita from './assets/pages/Cadastro_Receita/Cadastro_Receita';
import Cadastro_Produto from './assets/pages/Cadastro_Produto/Cadastro_Produto';
const Rotas = (
    //cria a URL
    <Router> 
        <div>
            <Switch>
                <Route exact path = "/" component ={Inicial}/>
                <Route path="/Colaboradores" component = {() => <Colaboradores titulo_pagina="Colaboradores - XepaDigital" />}/> 
                <Route path="/Duvidas" component = {() => <Duvidas titulo_pagina="Duvidas - XepaDigital" />} /> 
                <Route path="/Cadastro_Receita" component ={() => <Cadastro_Receita titulo_pagina="Cadastro Duvidas - XepaDigital" />} />
                <Route path="/Cadastro_Produto" component ={() => <Cadastro_Produto titulo_pagina="Cadastro Produto - XepaDigital" />} />
                {/* <Route component = {NotFound}/> */}
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
