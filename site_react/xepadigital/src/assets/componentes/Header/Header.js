import React, {Component} from 'react';
import logo_xepa from '../../img/logo_xepa.svg';
// import '../../css/style.css';


class Header extends Component {
    render() {
        return (
            <header>
                <nav id="menu_superior">
                    <div className="container">
                        <ul>
                            <li><a href="#footer_contato">CONTATE-NOS</a></li>
                            <li><a href="login.html">CADASTRE-SE</a></li>
                            <li><a href="login.html">LOGIN</a></li>
                        </ul>
                    </div>
                </nav>
                <nav id="menu_inferior">
                    <div className="container header_position">
                        <div id="menu_web" className="container header_position">
                            <a 
                                href="/" 
                                title="Página inicial">
                                    <img src={logo_xepa} 
                                        className="App-logo" 
                                        alt="Logo do Xepa Digital. Circulo lilás com uma 
                                        berijela com chapéu de chefe e uma cenoura." 
                                    />
                            </a>
                            <ul>
                                <li><a href="#historia" title="Tópico História">HISTÓRIA</a></li>
                                <li><a href="#propositos" title="Tópico Propósitos">PROPÓSITOS</a></li>
                                <li><a href="#colaboradores" title="Tópico Colaboradores">COLABORADORES</a></li>
                                <li><a href="#receitas" title="Tópico Receitas">RECEITAS</a></li>
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
                                <label id="lbl_menu" for="toggle">&#9776;</label>
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

// export default withRouter(Header); 
export default Header; 

