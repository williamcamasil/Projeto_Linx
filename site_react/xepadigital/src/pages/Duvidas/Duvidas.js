import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import mais from '../../assets/img/mais.png';
import menos from '../../assets/img/menos.jpg';
import william from '../../assets/img/William.svg';
import karina from '../../assets/img/Karina.svg';
// import fabiano from '../../assets/img/fabiano.svg';
// import gustavo from '../../assets/img/gustavo.svg';
// import giovani from '../../assets/img/giovani.svg';
import linx from '../../assets/img/Linx.svg';

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
                                                {/* Xepa Digital é um sistema que tem como objetivo conectar pessoas que buscam
                                                por uma renda extra, com foco principal em colaboradores e pessoas que querem 
                                                utilizar dos produtos orgânicos para fazer marmitas   */}

                                                A palavra Xepa tem relação com comida  e o termo digital relacionado com a tecnologia  
                                                resultando basicamente em uma feira online  no qual você pode comprar produtos 100% 
                                                orgânicos.
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
                                    <div className="respostaDuvidas_perfis">
                                            {
                                                this.state.pergunta2?
                                                <p>
                                                     {/* Nosso time de desenvolvedores é composto por 5 pessoas: <br/> */}
                                                    {/* <img src={fabiano} alt="Desenvolvedor" /><br/>
                                                    Fabiano Oliveira<br/>
                                                    <img src={giovani} alt="Desenvolvedor" /><br/>
                                                    Giovanni Canalli Silva<br/>
                                                    <img src={gustavo} alt="Desenvolvedor" /><br/>
                                                    Gustavo Mendes Brito<br/> */}
                                                    <img src={karina} alt="Desenvolvedor" /><br/>
                                                    Karina Karen Watanabe | Designer<br/>
                                                    <img src={william} alt="Desenvolvedor" /><br/>
                                                    William Camargo da Silva  | Backend<br/>
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
                                                Nossos colaboradores possuem a função de publicar suas 
                                                mercadorias no site para outras  poderem comprar, considerando 
                                                que o site depende desses colaboradores para se manter ativo.
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
                                                Qualquer pessoa poderá se registrar como Colaborador 
                                                exceto indivíduos com nome sujo, facilitando ainda mais 
                                                a aprovação se o Individuo for autônomo  e tiver uma 
                                                empresa registrada.
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
                                                O nosso programa de geração de renda tem por objetivo oferecer 
                                                um contrato com qualquer colaborador que queira vender seus 
                                                produtos através do nosso site, tendo foco em buscar parcerias 
                                                para podermos ampliarmos  nosso site nesse mercado.
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
                                    <h5 className="letra_pagina_duvida">Propósito</h5>
                                    <div className="respostaDuvidas">
                                        {
                                            this.state.pergunta7?
                                            <p>
                                                Nosso Proposito é gerar  fontes de rendas, ganhar espaço nesse ramo , 
                                                dar ao nosso cliente  confortabilidade ao realizar uma compra ,  facilidade 
                                                ao procurar um produto  desejado tudo pela internet sem ter esforço algum 
                                                para se locomover se.
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
                                    <h5 className="letra_pagina_duvida">Patrocinadores</h5>
                                    <div className="respostaDuvidas_perfis">
                                        {
                                            this.state.pergunta8?
                                            <p>
                                                <img src={linx} alt="Imagem da logo da empresa linx" /><br/>
                                                Empresa Linx
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
