import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

class Termos extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <div id="banner_termos">
                        <span>TERMOS DE USO</span>
                    </div>
                    <div id="centralizar_pagina_termos">            
                        <div className="caixa_termos card">
                            <div>
                                <h1>Nossas politicas de uso</h1>
                                <span>Dados colaborador</span><br/><br/>
                                <p>
                                    O Termo de uso do site XEPA Digital, deve ser acatada pelos os usuários a partir do acesso ao site.
                                </p><br/>
                                <p>
                                    A utilização do site XEPA Digital para venda de Produtos orgânicos é de inteira responsabilidade do colaborador, eis que o objetivo do site é proporcionar essa venda aos usuários.
                                </p><br/>
                                <p>    
                                    Informamos total responsabilidade pelas informações dos cadastros feitos através da aceitação dos termos de uso em que assume a condição de preencher os requisitos legais para a venda e compra dos produtos.
                                </p><br/>
                                <p>
                                    De acordo com os termos exercidos pelo site  os mesmo podem ser modificados excluídos através da administração.
                                </p>
                            </div>   
                        </div>
                    </div>

                </main>
                <Footer />
            </div>
        );
    }
}

export default Termos;