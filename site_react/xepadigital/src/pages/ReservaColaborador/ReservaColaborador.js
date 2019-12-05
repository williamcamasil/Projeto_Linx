import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Lupa from '../../assets/img/Lupa.svg';
import api from '../../services/api'

class ReservaColaborador extends Component {
    constructor(){
        super();
        this.state = {
            listaProdutosReservados : []
        }
    }

    componentDidMount(){
        console.log("Carregado")
        this.getProdutoReservado();
    }

    getProdutoReservado = () => {
        api.get('/RegistroProduto').then(response => {
            if (response.status === 200) {
                this.setState({ listaProdutosReservados: response.data })
            }
        })
    }

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
                            <input className="input_style" type="search" placeholder="Pesquisar"/>
                            <button className="button_conj" type="button" name="Pesquisa"><img src={Lupa} alt="Lupa branca, representando a busca."/></button>
                        </form>
                    </div>
                    
                    <div className="colab_section"></div>

                    <div className="caixa_produtor">
                        <h3>Joselito Ferreira Vass</h3>
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
                                    <th>Ações</th>
                                </tr>
                            </thead>

                            <tbody id="tabela-lista-corpo">
                                {
                                    this.state.listaProdutosReservados.map(function (registro) {
                                        return (                                     
                                            <tr>
                                                <td>{registro.idRegistro}</td>
                                                <td>{registro.idUsuarioNavigation.nomeUsuario}</td> {/* Está certo ?*/}
                                                <td>{registro.idUsuarioNavigation.telefone1}</td>
                                                <td>15,45</td>
                                                <td>Banana</td>
                                                <td>1,5 Kg</td>
                                                <td>
                                                    <button>Cancelar</button>
                                                    <button>Aprovar</button>
                                                </td>
                                            </tr>
                                        );
                                    }
                                    // .bind(this)
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
            </div>
        );
    }
}

export default ReservaColaborador;