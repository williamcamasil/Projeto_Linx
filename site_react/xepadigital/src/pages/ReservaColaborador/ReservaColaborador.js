import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import api from '../../services/api'
import { parseJwt } from '../../services/auth';
import { MDBBtn } from 'mdbreact';

class ReservaColaborador extends Component {
    constructor() {
        super();
        this.state = {
            listaProdutosReservados: [],
            nomeUsuarioLogado: "",
            successMsg: "",
            erroMsg: "",
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

        this.setState({ erroMsg: "" })
        this.setState({ successMsg: "" })

        reserva.situacao = "Aprovado";

        console.log("reserva: ", reserva)

        api.put("/ReservaProduto/" + reserva.idReserva, reserva)
            .then(response => {
                if (response.status === (200 || 204)) {
                    console.log("Situação: ", response.data);
                }
            })
            .then(response => {
                this.setState({ successMsg: "Reserva aprovada com sucesso!" });
            })
            .catch(error => {
                console.log(error);
                this.setState({ erroMsg: "Não foi possível aprovar a reserva" });
            })

        setTimeout(() => {
            this.getReservasColaborador();
        }, 200);

        setTimeout(() => {
            this.setState({ successMsg: "" });
            this.setState({ erroMsg: "" });
        }, 3500);
    }

    putStatusRecusado = (reserva) => {
        reserva.situacao = "Cancelado";
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
                    <div className="pedidos">
                        <div className="colab_banner">
                            <h1 className="tituloh1">PEDIDOS</h1>
                            <p className="p_colab">PRODUTORES</p>
                        </div>
                    </div>

                    <div className="colab_section"></div>

                    <div className="caixa_produtor">
                        <h3>{this.state.nomeUsuarioLogado}</h3>
                    </div>

                    <div className="tit_produtor">
                        <span className="textoCampo">PEDIDOS SOLICITADOS</span>
                    </div>

                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th className="textoCampoSub">#</th>
                                    <th className="textoCampoSub">Cliente</th>
                                    <th className="textoCampoSub">Contato</th>
                                    <th className="textoCampoSub">Valor R$</th>
                                    <th className="textoCampoSub">Produto</th>
                                    <th className="textoCampoSub">Quantidade</th>
                                    <th className="textoCampoSub">Situação</th>
                                    <th className="textoCampoSub">Ações</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo">
                                {
                                    this.state.listaProdutosReservados.map(function (reserva) {
                                        // console.log(reserva.idReserva)
                                        return (
                                            <tr>
                                                <td className="textoCampoSub">Pedido Nº {reserva.idReserva}</td>
                                                <td className="textoCampoSub">{reserva.idUsuarioNavigation.nomeUsuario}</td>
                                                <td className="textoCampoSub">{(reserva.idUsuarioNavigation.telefone1 === null || "") ? "Telefone Indisponível" : reserva.idUsuarioNavigation.telefone1}</td>
                                                <td className="textoCampoSub">R${reserva.idRegistroNavigation.idProdutoNavigation.preco} /Kg</td>
                                                <td className="textoCampoSub">{reserva.idRegistroNavigation.idProdutoNavigation.nomeProduto}</td>
                                                <td className="textoCampoSub">{reserva.quantidadeReserva} Kg</td>
                                                <td className="textoCampoSub">{reserva.situacao}</td>
                                                <td className="textoCampoSub">
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
                        <span className="textoCampoSub">Preço total dos pedidos R$ 59,75</span>
                    </div>
                </main>
                <Footer />
            </div >
        );
    }
}

export default ReservaColaborador;