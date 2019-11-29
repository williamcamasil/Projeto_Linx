import React from 'react';
import ReactDOM from 'react-dom';
import Inicial from './assets/pages/Inicial/Inicial';
import * as serviceWorker from './serviceWorker';
import './assets/css/style.css';

import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Colaboradores from './assets/pages/Colaboradores/Colaboradores';
import Colaborador_Detalhes from './assets/pages/Colaborador_Detalhes/Colaborador_Detalhes';
import Reserva_Colaborador from './assets/pages/Reserva_Colaborador/Reserva_Colaborador';
import Reserva_Cliente from './assets/pages/Reserva_Cliente/Reserva_Cliente';
import Receitas_Detalhes from './assets/pages/Receitas_Detalhes/Receitas_Detalhes';
import Termos from './assets/pages/Termos/Termos';

const Rotas = (
    //cria a URL
    <Router> 
        <div>
            <Switch>
                <Route exact path = "/" component ={Inicial}/>
                <Route path="/Colaboradores" component = {() => <Colaboradores titulo_pagina="Colaboradores - XepaDigital" />}/> 
                <Route path="/Colaborador_Detalhes" component = {() => <Colaborador_Detalhes titulo_pagina="Colaborador Detalhes - XepaDigital" />}/> 
                <Route path="/Reserva_Colaborador" component = {() => <Reserva_Colaborador titulo_pagina="Reserva Colaborador - XepaDigital" />}/> 
                <Route path="/Reserva_Cliente" component = {() => <Reserva_Cliente titulo_pagina="Reserva Cliente - XepaDigital" />}/> 
                <Route path="/Receitas_Detalhes" component = {() => <Receitas_Detalhes titulo_pagina="Receitas Detalhes - XepaDigital" />}/> 
                <Route path="/Termos" component = {() => <Termos titulo_pagina="Termos - XepaDigital" />}/> 
                {/* <Route component = {NotFound}/> */}
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
