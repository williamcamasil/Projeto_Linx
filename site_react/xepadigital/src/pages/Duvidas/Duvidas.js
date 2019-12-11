import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import mais from '../../assets/img/mais.png';

import { MDBContainer, MDBBtn, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from 'mdbreact';


class Duvidas extends Component {
    constructor() {
        super();
        this.state = {
            pergunta1 : false
        }
    }

    maisInformacoes(p) {
        if (p === "1"){
            this.setState({
                pergunta1 : !this.state.pergunta1
            })
        }else if (p === "2"){
            this.setState({
                pergunta2 : !this.state.pergunta2
            })    
        }else if (p === "3"){
            this.setState({
                pergunta3 : !this.state.pergunta3
            })    
        }else if (p === "4"){
            this.setState({
                pergunta4 : !this.state.pergunta4
            })    
        }else if (p === "5"){
            this.setState({
                pergunta5 : !this.state.pergunta5
            })    
        }else if (p === "6"){
            this.setState({
                pergunta6 : !this.state.pergunta6
            })    
        }else if (p === "7"){
            this.setState({
                pergunta7 : !this.state.pergunta7
            })    
        }else if (p === "8"){
            this.setState({
                pergunta8 : !this.state.pergunta8
            })    
        }
        
    }

    render() {
        return (
            <>
                <Header />
                <main>
                    <div id="banner_duvidas">
                        <span>DÚVIDAS</span>
                    </div>

                    <div id="centralizar_pagina_duvida">
                        <div className="caixa_duvidas">
                            <h2 className="sub_tit_duvida">Sobre a Xepa Digital</h2>
                            <div className="pergunta card">
                                <div>
                                    <h5 className="letra_pagina_duvida">O que é Xepa Digital?</h5>
                                    <div className="respostaDuvidas">
                                        {
                                            this.state.pergunta1?
                                            <p>
                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas  

                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas 
                                            </p>
                                            :null
                                        }
                                    </div>
                                </div>
                                <div>
                                    <a onClick={() => this.maisInformacoes("1")}><img src={mais} alt="Mais informações" /></a>
                                </div>
                            </div>

                            <div className="pergunta card">
                                <div>
                                    <h5 className="letra_pagina_duvida">Nosso time de desenvolvedores</h5>
                                    <div className="respostaDuvidas">
                                            {
                                                this.state.pergunta2?
                                                <p>
                                                    OLALAOALLAOALAOOALOALAOAOLO

                                                    Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                    por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                    utilizar dos produtos orgânicos para fazer marmitas 
                                                </p>
                                                :null
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <a onClick={() => this.maisInformacoes("2")}><img src={mais} alt="Mais informações" /></a>
                                    </div>
                            </div>
                        </div>

                        <div className="caixa_duvidas">
                            <h2 className="sub_tit_duvida">Sobre Colaboradores</h2>
                            <div className="pergunta card">
                                <div>
                                    <h5 className="letra_pagina_duvida">Como funciona?</h5>
                                    <div className="respostaDuvidas">
                                        {
                                            this.state.pergunta3?
                                            <p>
                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas  

                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas 
                                            </p>
                                            :null
                                        }
                                    </div>
                                </div>

                                <div>
                                    <a onClick={() => this.maisInformacoes("3")}><img src={mais} alt="Mais informações" /></a>
                                </div>
                            </div>

                            <div className="pergunta card">
                                <div>
                                    <h5 className="letra_pagina_duvida">Quem pode ser um colaborador?</h5>
                                    <div className="respostaDuvidas">
                                        {
                                            this.state.pergunta4?
                                            <p>
                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas  

                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas 
                                            </p>
                                            :null
                                        }
                                    </div>
                                </div>

                                <div>
                                    <a onClick={() => this.maisInformacoes("4")}><img src={mais} alt="Mais informações" /></a>
                                </div>
                            </div>
                        </div>

                        <div className="caixa_duvidas">
                            <h2 className="sub_tit_duvida">Sobre Geração de Renda</h2>
                            <div className="pergunta card">
                                <div>
                                    <h5 className="letra_pagina_duvida">Como funciona?</h5>
                                    <div className="respostaDuvidas">
                                        {
                                            this.state.pergunta5?
                                            <p>
                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas  

                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas 
                                            </p>
                                            :null
                                        }
                                    </div>
                                </div>

                                <div>
                                    <a onClick={() => this.maisInformacoes("5")}><img src={mais} alt="Mais informações" /></a>
                                </div>
                            </div>

                            <div className="pergunta card">
                                <div>
                                    <h5 className="letra_pagina_duvida">quem pode ser um gerador de renda?</h5>
                                    <div className="respostaDuvidas">
                                        {
                                            this.state.pergunta6?
                                            <p>
                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas  

                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas 
                                            </p>
                                            :null
                                        }
                                    </div>
                                </div>

                                <div>
                                    <a onClick={() => this.maisInformacoes("6")}><img src={mais} alt="Mais informações" /></a>
                                </div>
                            </div>
                        </div>


                        <div className="caixa_duvidas">
                            <h2 className="sub_tit_duvida">Sobre Nosso Propósito</h2>
                            <div className="pergunta card">
                                <div>
                                    <h5 className="letra_pagina_duvida">O que...?</h5>
                                    <div className="respostaDuvidas">
                                        {
                                            this.state.pergunta7?
                                            <p>
                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas  

                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas 
                                            </p>
                                            :null
                                        }
                                    </div>
                                </div>

                                <div>
                                    <a onClick={() => this.maisInformacoes("7")}><img src={mais} alt="Mais informações" /></a>
                                </div>
                            </div>

                            <div className="pergunta card">
                                <div>
                                    <h5 className="letra_pagina_duvida">Como...?</h5>
                                    <div className="respostaDuvidas">
                                        {
                                            this.state.pergunta8?
                                            <p>
                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas  

                                                Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas 
                                            </p>
                                            :null
                                        }
                                    </div>
                                </div>

                                <div>
                                    <a onClick={() => this.maisInformacoes("8")}><img src={mais} alt="Mais informações" /></a>
                                </div>
                            </div>

                            <div id="last_duv"></div>
                        </div>


                    </div>
                </main>
                <Footer />
            </>
        )
    }
}
export default Duvidas;
