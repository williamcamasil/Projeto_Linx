import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//DEPENDENCIAS
import {Route, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom';

//SERVICES

//CSS
import './assets/css/style.css';

//PAGINAS
import Inicial from './assets/pages/Inicial/Inicial';
import Colaboradores from './assets/pages/Colaboradores/Colaboradores';
import Login from './assets/pages/Login/Login';
import { usuarioAutenticado, parseJwt } from './assets/services/auth';

//AUTENTIFICAÇÃO
// const PermissaoAdmin = ({ component : Component }) => (
//     <Route 
//         render={props =>
//             usuarioAutenticado() && parseJwt().Role === "Administrador" ? (
//                 <Component {...props}/>
//             ) : (
//                 <Redirect to={{ pathname : "/Login"}}/>
//             )
//         }
//     />
// )

// const PermissaoCliente = ({ component : Component }) => (
//     <Route 
//         render={props =>
//             usuarioAutenticado() && parseJwt().Role === "Cliente" ? (
//                 <Component {...props}/>
//             ) : (
//                 <Redirect to={{ pathname : "/Login"}}/>
//             )
//         }
//     />
// )

const Rotas = (
    //cria a URL
    <Router> 
        <div>
            <Switch>
                <Route exact path="/" component={Inicial}/>
                {/* <PermissaoAdmin path="/" component={Inicial}/> */}
                <Route path="/Login" component={Login}/>
                <Route path="/Colaboradores" component = {() => <Colaboradores titulo_pagina="Colaboradores - XepaDigital" />}/>  
                {/* <Route component = {NotFound}/> */}
            </Switch>
        </div>
    </Router>
)


// TROCAMOS APP P/ NOSSAS ROTAS
ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
