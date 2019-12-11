import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Lupa from '../../assets/img/Lupa.svg';
import api from '../../services/api'
import { parseJwt } from '../../services/auth';

import { MDBBtn } from 'mdbreact';

class ReservaCliente extends Component {
    constructor() {
        super();
        this.state = {
            listaProdutosReservados: [],
            nomeUsuarioLogado: "",
        }
    }

    componentDidMount() {
        console.log("Carregado")
        this.getReservasCliente();
        this.getUsuarioLogado();
    }

    //#region GET's
    getReservasCliente = () => {
        api.get('/ReservaProduto/' + parseJwt().Id).then(response => {
            if (response.status === 200) {
                this.setState({ listaProdutosReservados: response.data })
            }
        })
    }

    getUsuarioLogado = () => {
        api.get("/Usuario/" + parseJwt().Id)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ nomeUsuarioLogado: response.data.nomeUsuario })
                }
            })
    }
    //#endregion

    //#region DELETE
    deleteReserva = (id) => {

        api.delete("/ReservaProduto/" + id)
            .then(response => {
                if (response.status === (200 || 204)) {
                    console.log("Deletando: ", response.data);
                }
            })
            .catch(error => console.log("error: ", error))

        setTimeout(() => {
            this.getReservasCliente();
        }, 200);
    }
    //#endregion

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
                            <input className="input_style" type="search" placeholder="Pesquisar" />
                            <button className="button_conj" type="button" name="Pesquisa"><img src={Lupa} alt="Lupa branca, representando a busca." /></button>
                        </form>
                    </div>

                    <div className="colab_section"></div>

                    <div className="caixa_produtor">
                        <h3>{this.state.nomeUsuarioLogado}</h3>
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
                                    this.state.listaProdutosReservados.map(function (reserva) {
                                        return (
                                            <tr key={reserva.idReserva}>
                                                <td>Reserva Nº {reserva.idReserva}</td>
                                                <td>{reserva.idRegistroNavigation.idUsuarioNavigation.nomeUsuario}</td>
                                                <td>{(reserva.idRegistroNavigation.idUsuarioNavigation.telefone1 === null || "") ? "Telefone Indisponível" : reserva.idRegistroNavigation.idUsuarioNavigation.telefone1}</td>
                                                <td>R${reserva.idRegistroNavigation.idProdutoNavigation.preco} /Kg</td> {/* fazer operação matemática aqui */}
                                                <td>{reserva.idRegistroNavigation.idProdutoNavigation.nomeProduto}</td> {/* como puxar o produto? */}
                                                <td>{reserva.quantidadeReserva} Kg</td>
                                                <td>{reserva.situacao}</td>

                                                <td>
                                                    <MDBBtn color="danger" size="sm" onClick={() => this.deleteReserva(reserva.idReserva)}>
                                                        <div className="spc_botao">
                                                            <span>Excluir</span>
                                                        </div>
                                                    </MDBBtn>
                                                </td>
                                            </tr>
                                        );
                                    }
                                        .bind(this)
                                    )
                                }
                            </tbody>
                        </table>
                    </div>

                    <div className="reserva_preco">
                        <span>Preço total dos pedidos R$ 23,14 </span> {/* [REPLICAR] fazer operação matemática aqui */}
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default ReservaCliente;