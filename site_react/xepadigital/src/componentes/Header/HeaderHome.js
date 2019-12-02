import React, {Component} from 'react';
import logo_xepa from '../../assets/img/logo_xepa.svg';
import { withRouter } from 'react-router-dom'
import { usuarioAutenticado, parseJwt } from '../../services/auth';


class HeaderHome extends Component {
    logout = () => {
        //Remove o token do localStorage
        localStorage.removeItem("usuario-xepa");

        //Redireciona para o endereço '/'
        this.props.history.push("/");
    }

    render() {
        return (
            <header>
                <nav id="menu_superior">
                    <div className="container">
                        <ul>
                            <li><a href="#footer_contato">CONTATE-NOS</a></li>
                            <li><a href="/Registrar">CADASTRE-SE</a></li>
                            {((usuarioAutenticado() && parseJwt().Role === "Administrador") || (usuarioAutenticado() && parseJwt().Role === "Colaborador") || (usuarioAutenticado() && parseJwt().Role === "Cliente"))?
                                (
                                    <React.Fragment>
                                            <li><a href="/" onClick={this.logout}>SAIR</a></li>
                                    </React.Fragment>
                                ) : (
                                        <React.Fragment>
                                            <li><a href="/Login">LOGIN</a></li>
                                        </React.Fragment>
                                    )
                            }
                        </ul>
                    </div>
                </nav>
                <nav id="menu_inferior">
                    <div className="container header_position">
                        <div id="menu_web" className="container header_position">
                            <a href="/" title="Página inicial">
                                <img src={logo_xepa} className="App-logo" alt="Logo do Xepa Digital."/>
                            </a>
                            <ul>
                                <li><a href="#historia" title="História">HISTÓRIA</a></li>
                                <li><a href="#propositos" title="Propósitos">PROPÓSITOS</a></li>
                                <li><a href="#colaboradores" title="Colaboradores">COLABORADORES</a></li>
                                <li><a href="#receitas" title="Receitas">RECEITAS</a></li>
                            </ul>
                        </div>
                        
                        <div id="menu_cabecalho">    
                            <div>
                                <a href="/" title="Página inicial">
                                    <img src={logo_xepa} className="App-logo" alt="Logo do Xepa Digital. Circulo lilás com uma berijela com chapéu de chefe e uma cenoura."/>
                                </a>
                            </div> 

                            
                            <div className="nav">
                                <label id="lbl_menu" htmlFor="toggle">&#9776;</label>
                                <input type="checkbox" id="toggle"/>
                                <div className="menu_home">
                                    <a href="#historia" title="Tópico História">HISTÓRIA</a>
                                    <a href="#propositos" title="Tópico Propósitos">PROPÓSITOS</a>
                                    <a href="#colaboradores" title="Tópico Colaboradores">COLABORADORES</a>
                                    <a href="#receitas" title="Tópico Receitas">RECEITAS</a>
                                </div>
                            </div>
                        </div>              
                    </div>
                </nav>
            </header>
        );
    }
}

export default withRouter(HeaderHome);