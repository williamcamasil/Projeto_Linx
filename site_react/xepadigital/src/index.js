import React from 'react';
import ReactDOM from 'react-dom';
import Inicial from './assets/pages/Inicial/Inicial';
import * as serviceWorker from './serviceWorker';
import './assets/css/style.css';

import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';
import Colaboradores from './assets/pages/Colaboradores/Colaboradores';

const Rotas = (
    //cria a URL
    <Router> 
        <div>
            <Switch>
                <Route exact path = "/" component ={Inicial}/>
                <Route path="/Colaboradores" component = {() => <Colaboradores titulo_pagina="Colaboradores - XepaDigital" />}/>  
                {/* <Route component = {NotFound}/> */}
            </Switch>
        </div>
    </Router>
)

ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
