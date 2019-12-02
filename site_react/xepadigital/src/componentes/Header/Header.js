import React, {Component} from 'react';
import logo_xepa from '../../img/logo_xepa.svg';
import { withRouter } from 'react-router-dom'
import { usuarioAutenticado, parseJwt } from '../../services/auth';


class Header extends Component {
    logout = () => {
        //Remove o token do localStorage
        localStorage.removeItem("usuario-xepa");

        //Redireciona para o endereço '/'
        this.props.history.push("/");
    }
    
    // 
    // 
    

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
                                {usuarioAutenticado() && parseJwt().Role === "Administrador" ?
                                (
                                    <React.Fragment>
                                        <li><a href="/Perfil" title="Perfil">PERFIL</a></li>
                                    </React.Fragment>
                                ) : (
                                    usuarioAutenticado() && parseJwt().Role === "Colaborador" ?
                                    (
                                        <React.Fragment>
                                            <li><a href="/CadastroProduto" title="Cadastro de Produtos">CADASTRO</a></li>
                                            <li><a href="/PerfilColaborador" title="Perfil">PERFIL</a></li>
                                        </React.Fragment>
                                    ) : (
                                        usuarioAutenticado() && parseJwt().Role === "Cliente" ?
                                        (
                                            <React.Fragment>
                                                <li><a href="/CadastroReceita" title="Cadastro de Receitas">CADASTRO</a></li>
                                                <li><a href="/Perfil" title="Perfil">PERFIL</a></li>
                                            </React.Fragment>
                                        ) : (
                                            <>
                                            </>
                                        )

                                    ))}
                                <li><a href="/" title="Página Inicial">INÍCIO</a></li>
                                <li><a href="/Colaboradores" title="Página de Colaboradores">COLABORADORES</a></li>
                                <li><a href="/Receitas" title="Página de Receitas">RECEITAS</a></li>
                            </ul>
                        </div>
                        
                        <div id="menu_cabecalho">    
                            <div>
                                <a 
                                    href="index.html" 
                                    title="Página inicial">
                                        <img src={logo_xepa} 
                                            className="App-logo" 
                                            alt="Logo do Xepa Digital. Circulo lilás com uma 
                                            berijela com chapéu de chefe e uma cenoura." 
                                        />
                                </a>
                            </div> 

                            
                            <div className="nav">
                                <label id="lbl_menu" htmlFor="toggle">&#9776;</label>
                                <input type="checkbox" id="toggle"/>
                                <div className="menu_home">
                                    {usuarioAutenticado() && parseJwt().Role === "Administrador" ?
                                    (
                                        <React.Fragment>
                                            <a href="/Perfil" title="Perfil">PERFIL</a>
                                        </React.Fragment>
                                    ) : (
                                        usuarioAutenticado() && parseJwt().Role === "Colaborador" ?
                                        (
                                            <React.Fragment>
                                                <a href="/CadastroProduto" title="Cadastro de Produtos">CADASTRO</a>
                                                <a href="/PerfilColaborador" title="Perfil">PERFIL</a>
                                            </React.Fragment>
                                        ) : (
                                            usuarioAutenticado() && parseJwt().Role === "Cliente" ?
                                            (
                                                <React.Fragment>
                                                    <a href="/CadastroReceita" title="Cadastro de Receitas">CADASTRO</a>
                                                    <a href="/Perfil" title="Perfil">PERFIL</a>
                                                </React.Fragment>
                                            ) : (
                                                <>
                                                </>
                                            )

                                        ))}
                                    <a href="/" title="Página Inicial">INÍCIO</a>
                                    <a href="/Colaboradores" title="Página de Colaboradores">COLABORADORES</a>
                                    <a href="/Receitas" title="Página de Receitas">RECEITAS</a>
                                </div>
                            </div>
                        </div>              
                    </div>
                </nav>
            </header>
        );
    }
}

export default withRouter(Header);
// export default Header; 

