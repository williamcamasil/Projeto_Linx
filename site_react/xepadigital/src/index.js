import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

//DEPENDENCIAS    ''
import { Route, BrowserRouter as Router, Switch, Redirect } from 'react-router-dom';
import { usuarioAutenticado, parseJwt } from './services/auth';

//SERVICES 

//CSS
import './assets/css/style.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

//PAGINAS
import Inicial from './pages/Inicial/Inicial';
import Colaboradores from './pages/Colaboradores/Colaboradores';
import ColaboradorDetalhes from './pages/ColaboradorDetalhes/ColaboradorDetalhes';
import ReservaColaborador from './pages/ReservaColaborador/ReservaColaborador';
import ReservaCliente from './pages/ReservaCliente/ReservaCliente';
import Receitas from './pages/Receitas/Receitas';
import ReceitasDetalhes from './pages/ReceitasDetalhes/ReceitasDetalhes';
import PerfilColaborador from './pages/PerfilColaborador/PerfilColaborador';
import Perfil from './pages/Perfil/Perfil';
import Duvidas from './pages/Duvidas/Duvidas';
import Termos from './pages/Termos/Termos';
import CadastroProduto from './pages/CadastroProduto/CadastroProduto';
import CadastroReceita from './pages/CadastroReceita/CadastroReceita';
import NotFound from './pages/NotFound/NotFound';
import Login from './pages/Login/Login';
import Registrar from './pages/Registrar/Registrar';



const PermissaoCliente = ({ component: Component }) => (
    <Route render={props =>
        usuarioAutenticado() && parseJwt().Role === "Cliente" ?
            (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/Login" }} />
            )
    }
    />
)

const PermissaoColaborador = ({ component: Component }) => (
    <Route render={props =>
        usuarioAutenticado() && parseJwt().Role === "Colaborador" ?
            (
                <Component {...props} />
            ) : (
                <Redirect to={{ pathname: "/Login" }} />
            )
    }
    />
)

const Rotas = (
    //cria a URL
    <Router>
        <div>
            <Switch>
                <Route exact path="/" component={Inicial} />
                <Route path="/Colaboradores" component={Colaboradores} />
                <Route path="/ColaboradorDetalhes" component={ColaboradorDetalhes} />
                <Route path="/Receitas" component={Receitas} />
                <Route path="/ReceitasDetalhes" component={ReceitasDetalhes} />
                <PermissaoColaborador path="/ReservaColaborador" component={ReservaColaborador} />
                <PermissaoCliente path="/ReservaCliente" component={ReservaCliente} />
                <PermissaoColaborador path="/CadastroProduto" component={CadastroProduto} />
                <PermissaoCliente path="/CadastroReceita" component={CadastroReceita} />
                <PermissaoColaborador path="/PerfilColaborador" component={PerfilColaborador} />
                <PermissaoCliente path="/Perfil" component={Perfil} />
                <Route path="/Duvidas" component={Duvidas} />
                <Route path="/Termos" component={Termos} />
                <Route path="/Registrar" component={Registrar} />
                <Route path="/Login" component={Login} />
                <Route path="/NotFound" component={NotFound} />
            </Switch>
        </div>
    </Router>
)


// TROCAMOS APP P/ NOSSAS ROTAS
ReactDOM.render(Rotas, document.getElementById('root'));

serviceWorker.unregister();
