import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Lupa from '../../assets/img/Lupa.svg';
import api from '../../services/api'
import { parseJwt } from '../../services/auth';

import { MDBBtn } from 'mdbreact';

class ReservaColaborador extends Component {
    constructor() {
        super();
        this.state = {
            listaProdutosReservados: [],
            nomeUsuarioLogado: "",
        }
    }

    componentDidMount() {
        console.log("Carregado")
        this.getReservasColaborador();
        this.getUsuarioLogado();
    }

    //#region GET`s
    getReservasColaborador = () => {
        api.get('/ReservaColaborador/' + parseJwt().Id).then(response => {
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

    //#region PUT's
    putStatusAprovado = (reserva) => {

        // console.log("id ",reserva.idReserva)

        reserva.situacao = "Aprovado";

        console.log("reserva: ", reserva)

        api.put("/ReservaProduto/" + reserva.idReserva, reserva)
            .then(response => {
                if (response.status === (200 || 204)) {
                    console.log("Situação: ", response.data);
                }
            })
            .catch(error => console.log("error: ", error))

        setTimeout(() => {
            this.getReservasColaborador();
        }, 200);
    }

    putStatusRecusado = (reserva) => {

        reserva.situacao = "Cancelado";

        console.log("reserva: ", reserva)

        api.put("/ReservaProduto/" + reserva.idReserva, reserva)
            .then(response => {
                if (response.status === (200 || 204)) {
                    console.log("Situação: ", response.data);
                }
            })
            .catch(error => console.log("error: ", error))

        setTimeout(() => {
            this.getReservasColaborador();
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
                            <p className="p_colab">PRODUTORES</p>
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
                        <span>PEDIDOS SOLICITADOS</span>
                    </div>

                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Cliente</th>
                                    <th>Contato</th>
                                    <th>Valor R$</th>
                                    <th>Produto</th>
                                    <th>Quantidade</th>
                                    <th>Situação</th>
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo">
                                {
                                    this.state.listaProdutosReservados.map(function (reserva) {
                                        // console.log(reserva.idReserva)
                                        return (
                                            <tr>
                                                <td>Pedido Nº {reserva.idReserva}</td>
                                                <td>{reserva.idUsuarioNavigation.nomeUsuario}</td>
                                                <td>{(reserva.idUsuarioNavigation.telefone1 === null || "") ? "Telefone Indisponível" : reserva.idUsuarioNavigation.telefone1}</td>
                                                <td>R${reserva.idRegistroNavigation.idProdutoNavigation.preco} /Kg</td>
                                                <td>{reserva.idRegistroNavigation.idProdutoNavigation.nomeProduto}</td>
                                                <td>{reserva.quantidadeReserva} Kg</td>
                                                <td>{reserva.situacao}</td>
                                                <td>
                                                    <MDBBtn color="success" size="sm" onClick={() => this.putStatusAprovado(reserva)}>
                                                        <div className="spc_botao">
                                                            <span>Aprovar</span>
                                                        </div>
                                                    </MDBBtn>
                                                    <br />
                                                    <MDBBtn color="danger" size="sm" onClick={() => this.putStatusRecusado(reserva)}>
                                                        <div className="spc_botao">
                                                            <span>Cancelar</span>
                                                        </div>
                                                    </MDBBtn>
                                                    {/* <button>Cancelar</button>
                                                    <button>Aprovar</button> */}
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
                        <span>Preço total dos pedidos R$ 59,75</span>
                    </div>
                    <div className="colab_section"></div>
                </main>
                <Footer />
            </div >
        );
    }
}

export default ReservaColaborador;