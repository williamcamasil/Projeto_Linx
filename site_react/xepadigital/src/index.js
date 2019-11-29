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
import Colaborador_Detalhes from './assets/pages/Colaborador_Detalhes/Colaborador_Detalhes';
import Reserva_Colaborador from './assets/pages/Reserva_Colaborador/Reserva_Colaborador';
import Reserva_Cliente from './assets/pages/Reserva_Cliente/Reserva_Cliente';
import Receitas_Detalhes from './assets/pages/Receitas_Detalhes/Receitas_Detalhes';
import Termos from './assets/pages/Termos/Termos';
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
                <Route exact path="/" component ={Inicial}/>
                <Route path="/Colaboradores" component = {() => <Colaboradores titulo_pagina="Colaboradores - XepaDigital" />}/> 
                <Route path="/Colaborador_Detalhes" component = {() => <Colaborador_Detalhes titulo_pagina="Colaborador Detalhes - XepaDigital" />}/> 
                <Route path="/Reserva_Colaborador" component = {() => <Reserva_Colaborador titulo_pagina="Reserva Colaborador - XepaDigital" />}/> 
                <Route path="/Reserva_Cliente" component = {() => <Reserva_Cliente titulo_pagina="Reserva Cliente - XepaDigital" />}/> 
                <Route path="/Receitas_Detalhes" component = {() => <Receitas_Detalhes titulo_pagina="Receitas Detalhes - XepaDigital" />}/> 
                <Route path="/Termos" component = {() => <Termos titulo_pagina="Termos - XepaDigital" />}/> 
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
