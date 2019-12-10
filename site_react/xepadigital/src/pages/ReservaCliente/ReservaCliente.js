import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Lupa from '../../assets/img/Lupa.svg';
// import { Link } from "react-router-dom";
import api from '../../services/api'


class ReservaCliente extends Component {
    constructor() {
        super();
        this.state = {
            listaReservasCliente: [],

            contador: 0,

            nomeColaborador: "",
        }
    }

    componentDidMount() {
        console.log("Carregado")
        this.getReservasCliente();
    }

    getReservasCliente = () => {
        api.get('/ReservaProduto').then(response => {
            if (response.status === 200) {
                this.setState({ listaReservasCliente: response.data })
            }
        })
    }

    // retornaNome = (id) => {
    //     setTimeout(() => {
    //     api.get('/Colaborador/' + id)
    //     .then(response => {
    //         this.setState({ nomeColaborador: response.data.nomeUsuario })
    //         // console.log("colab: ", this.state.nomeColaborador)
    //     })
    //     console.log("return: ", this.state.nomeColaborador)
    //     // return this.state.nomeColaborador;

    //     }, 5000);
    // }

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
                                    this.state.listaReservasCliente.map(function (reserva) {
                                        
                                        if (this.state.contador < this.state.listaReservasCliente.length) {

                                            this.setState({ contador: this.state.contador + 1 })
                                            console.log("cont: ", this.state.contador)


                                            api.get('/Colaborador/' + reserva.idRegistroNavigation.idUsuario)
                                                .then(response => {
                                                    this.setState({ nomeColaborador: response.data.nomeUsuario })
                                                    console.log("colab: ", this.state.nomeColaborador)
                                                })


                                        }

                                        console.log("res: ", reserva)
                                        return (
                                            <tr key={reserva.idReserva}>
                                                <td>{reserva.idReserva}</td>
                                                <td>{this.state.nomeColaborador}</td>
                                                {/* <td>{
                                                    this.retornaNome(
                                                        reserva.idRegistroNavigation.idUsuario
                                                        )
                                                        }</td> */}
                                                <td>{reserva.idUsuarioNavigation.telefone1}</td>
                                                <td>15,45</td> {/* fazer operação matemática aqui */}
                                                <td>Banana</td> {/* como puxar o produto? */}
                                                <td>{reserva.quantidadeReserva} Kg</td>
                                                <td>{reserva.situacao}</td>
                                                <td><button>Cancelar</button></td>
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
                        <span>Preço total dos pedidos R$ 23,14</span> {/* [REPLICAR] fazer operação matemática aqui */}
                    </div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default ReservaCliente;