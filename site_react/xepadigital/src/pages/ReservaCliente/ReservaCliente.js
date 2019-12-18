import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import api from '../../services/api'
import { parseJwt } from '../../services/auth';
import { MDBBtn, MDBAlert } from 'mdbreact';

class ReservaCliente extends Component {
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
        this.setState({ erroMsg: "" })
        this.setState({ successMsg: "" })
        api.delete("/ReservaProduto/" + id)
            .then(response => {
                if (response.status === (200 || 204)) {
                    console.log("Deletando: ", response.data);
                }
            })
            .then(response => {
                this.setState({ successMsg: "Reserva deletada com sucesso!" });
            })
            .catch(error => {
                console.log(error);
                this.setState({ erroMsg: "Não foi possível deletar a reserva" });
            })

        setTimeout(() => {
            this.getReservasCliente();
        }, 200);

        setTimeout(() => {
            this.setState({ successMsg: "" });
            this.setState({ erroMsg: "" });
        }, 3500);
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
                            <p className="p_colab">CLIENTES</p>
                        </div>
                    </div>

                    <div className="colab_section"></div>

                    <div className="caixa_produtor">
                        <h3>{this.state.nomeUsuarioLogado}</h3>
                    </div>

                    <div className="tit_produtor">
                        <span className="textoCampoSub">PEDIDOS REALIZADOS</span>
                    </div>

                    <div className="container" id="conteudoPrincipal-lista">
                        <table id="tabela-lista">
                            <thead>
                                <tr>
                                    <th className="textoCampoSub">#</th>
                                    <th className="textoCampoSub">Produtor</th>
                                    <th className="textoCampoSub">Contato</th>
                                    <th className="textoCampoSub">Valor R$</th>
                                    <th className="textoCampoSub">Produto</th>
                                    <th className="textoCampoSub">Quantidade</th>
                                    <th className="textoCampoSub">Status</th>
                                    <th className="textoCampoSub">Ações</th>
                                </tr>
                            </thead>
                            <tbody id="tabela-lista-corpo">
                                {
                                    this.state.listaProdutosReservados.map(function (reserva) {
                                        return (
                                            <tr key={reserva.idReserva}>
                                                <td className="textoCampoSub">Reserva Nº {reserva.idReserva}</td>
                                                <td className="textoCampoSub">{reserva.idRegistroNavigation.idUsuarioNavigation.nomeUsuario}</td>
                                                <td className="textoCampoSub">{(reserva.idRegistroNavigation.idUsuarioNavigation.telefone1 === null || "") ? "Telefone Indisponível" : reserva.idRegistroNavigation.idUsuarioNavigation.telefone1}</td>
                                                <td className="textoCampoSub">R${reserva.idRegistroNavigation.idProdutoNavigation.preco} /Kg</td> {/* fazer operação matemática aqui */}
                                                <td className="textoCampoSub">{reserva.idRegistroNavigation.idProdutoNavigation.nomeProduto}</td> {/* como puxar o produto? */}
                                                <td className="textoCampoSub">{reserva.quantidadeReserva} Kg</td>
                                                <td className="textoCampoSub">{reserva.situacao}</td>

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

                    <div className="tit_receita">
                        <div className="Mensagens">
                            {
                                this.state.erroMsg &&
                                <MDBAlert className="text-center" color="danger" >
                                    {/* {this.state.erroMsg} */}
                                    {this.state.erroMsg && <div className="erroMensagem">{this.state.erroMsg}</div>}
                                </MDBAlert>
                            }

                            {
                                this.state.successMsg &&
                                <MDBAlert className="text-center" color="success" >
                                    {/* {this.state.successMsg} */}
                                    {this.state.successMsg && <div className="certoMensagem">{this.state.successMsg}</div>}
                                </MDBAlert>
                            }
                        </div>
                    </div>

                    <div className="reserva_preco">
                        <span className="textoCampoSub">Preço total dos pedidos R$ 23,14 </span> {/* [REPLICAR] fazer operação matemática aqui */}
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default ReservaCliente;