import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Lupa from '../../assets/img/Lupa.svg';

class ReservaCliente extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <div className="colab">
                        <div className="colab_banner">
                            <h1 className="tituloh1">PEDIDOS</h1>
                            <p className="p_colab">CLIENTES</p>
                        </div>
                    </div>

                    <div className="container search_bar">
                        <form method="GET" className="form_style">
                            <input className="input_style" type="search" placeholder="Pesquisar"/>
                            <button className="button_conj" type="button" name="Pesquisa"><img src={Lupa} alt="Lupa branca, representando a busca."/></button>
                        </form>
                    </div>
                    
                    <div className="colab_section"></div>

                    <div className="caixa_produtor">
                        <h3>Fernanda de Souza</h3>
                    </div>

                    <div className="tit_produtor">
                        <span>PEDIDOS REALIZADOS</span>
                    </div>

                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Produtor</th>
                                    <th>Contato</th>
                                    <th>Valor R$</th>
                                    <th>Produto</th>
                                    <th>Quantidade</th>
                                    <th>Status</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo">
                                {
                                    // this.state.lista.map(function (evento) {
                                    //     return (

                                    //         <tr key={evento.eventoId}>
                                    //             <td>{evento.eventoId}</td>
                                    //             <td>{evento.titulo}</td>
                                    //             {/* Para trazer o nome ao invés do id de outra tabela, puxamos o categoria da outra tabela com o titulo do mesmo */}
                                    //             <td>{evento.categoria.titulo}</td>
                                    //             {/* Usamos o operador ternario para mostrar a variavel booleana */}
                                    //             <td>{(evento.acessoLivre) ? 'Livre' : 'Restrito'}</td>
                                    //             <td>{(evento.dataEvento).split('T')[0]}</td>
                                    //             <td>{evento.localizacaoId}</td>
                                    //             <td>
                                    //                 <button onClick={e => this.alterarEvento(evento)}>Alterar</button>
                                    //                 <button onClick={e => this.deletarEvento(evento.eventoId)}>Excluir</button>
                                    //             </td>
                                    //         </tr>
                                    //     )
                                    // }.bind(this))

                                    <tr>
                                        <td>1</td>
                                        <td>Joselito</td>
                                        <td>(11) 96075-4257</td>
                                        <td>15,45</td>
                                        <td>Banana</td>
                                        <td>1,5 Kg</td>
                                        <td>Analisando</td>
                                        <td>
                                            <button>Cancelar</button>
                                            <button>Editar</button>
                                        </td>
                                    </tr>
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="reserva_preco">
                        <span>Preço total dos pedidos R$ 23,14</span>
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default ReservaCliente;