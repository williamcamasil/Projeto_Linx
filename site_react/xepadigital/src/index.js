import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//DEPENDENCIAS    ', Redirect'
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';
// import { usuarioAutenticado, parseJwt } from './assets/services/auth';

//SERVICES 

//CSS
import './assets/css/style.css';

//PAGINAS
import Inicial from './assets/pages/Inicial/Inicial';
import Colaboradores from './assets/pages/Colaboradores/Colaboradores';
import ColaboradorDetalhes from './assets/pages/ReservaColaborador/ReservaColaborador';
import ReservaColaborador from './assets/pages/ReservaColaborador/ReservaColaborador';
import ReservaCliente from './assets/pages/ReservaCliente/ReservaCliente';
import Receitas from './assets/pages/Receitas/Receitas';
import ReceitasDetalhes from './assets/pages/ReceitasDetalhes/ReceitasDetalhes';
import PerfilColaborador from './assets/pages/PerfilColaborador/PerfilColaborador';
import Perfil from './assets/pages/Perfil/Perfil';
import Duvidas from './assets/pages/Duvidas/Duvidas';
import Termos from './assets/pages/Termos/Termos';
import CadastroProduto from './assets/pages/CadastroProduto/CadastroProduto';
import CadastroReceita from './assets/pages/CadastroReceita/CadastroReceita';
import NotFound from './assets/pages/NotFound/NotFound';
import Login from './assets/pages/Login/Login';
import Registrar from './assets/pages/Registrar/Registrar';

// const PermissaoAdmin = ({ component : Component }) => (
//     <Route render={props =>
//         usuarioAutenticado() && parseJwt().Role === "1" ?
//         (
//             <Component {...props}/>
//         ) : (
//             <Redirect to={{ pathname: "/Login" }}/>
//         )
//     }
//     />
// )

// const PermissaoAluno = ({ component : Component }) => (
//     <Route render={props =>
//         usuarioAutenticado() && parseJwt().Role === "2" ?
//         (
//             <Component {...props}/>
//         ) : (
//             <Redirect to={{ pathname: "/Login" }}/>
//         )
//     }
//     />
// )

const Rotas = (
    //cria a URL
    <Router> 
        <div>
            <Switch>
                <Route exact path="/" component ={Inicial}/>
                <Route path="/Colaboradores" component = {() => <Colaboradores titulo_pagina="Colaboradores - XepaDigital" />}/> 
                <Route path="/ColaboradorDetalhes" component = {() => <ColaboradorDetalhes titulo_pagina="Colaborador Detalhes - XepaDigital" />}/> 
                <Route path="/ReservaColaborador" component = {() => <ReservaColaborador titulo_pagina="Reserva Colaborador - XepaDigital" />}/> 
                <Route path="/ReservaCliente" component = {() => <ReservaCliente titulo_pagina="Reserva Cliente - XepaDigital" />}/> 
                <Route path="/Receitas" component = {() => <Receitas titulo_pagina="Receitas - XepaDigital" />}/> 
                <Route path="/ReceitasDetalhes" component = {() => <ReceitasDetalhes titulo_pagina="Receitas Detalhes - XepaDigital" />}/> 
                <Route path="/Duvidas" component = {() => <Duvidas titulo_pagina="Duvidas - XepaDigital" />}/> 
                <Route path="/Termos" component = {() => <Termos titulo_pagina="Termos - XepaDigital" />}/> 
                <Route path="/CadastroProduto" component = {() => <CadastroProduto titulo_pagina="Cadastro Produtos - XepaDigital" />}/> 
                <Route path="/CadastroReceita" component = {() => <CadastroReceita titulo_pagina="Cadastro Receitas - XepaDigital" />}/>
                <Route path="/PerfilColaborador" component = {() => <PerfilColaborador titulo_pagina="Perfil Colaborador - XepaDigital" />}/>
                <Route path="/Perfil" component = {() => <Perfil titulo_pagina="Perfil Cliente - XepaDigital" />}/>
                <Route path="/NotFound" component = {() => <NotFound titulo_pagina="página não encontrada - XepaDigital" />}/>

                <Route path="/Registrar" component={Registrar}/>
                <Route path="/Login" component={Login}/>
            </Switch>
        </div>
    </Router>
)


// TROCAMOS APP P/ NOSSAS ROTAS
ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
