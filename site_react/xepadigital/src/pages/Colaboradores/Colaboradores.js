import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import Lupa from '../../assets/img/Lupa.svg';
import { Link } from "react-router-dom";
import api from '../../services/api'
import mais from '../../assets/img/mais.png'
import ScrollTop from '../../componentes/ScrollTop/ScrollTop';

class Colaboradores extends Component {
    constructor() {
        super();
        this.state = {
            listaColaborador: [],
            listaRegistro: [],
            idColab: "",
            nomeColab: "",
            more: 3
        }
    }

    // #region MÉTODOS
    componentDidMount() {
        this.getListaColaboradores();
        this.getListaRegistros();
    }

    getListaRegistros = () => {
        api.get('/RegistroProduto').then(response => {
            if (response.status === 200) {
                this.setState({ listaRegistro: response.data })
            }
        })
    }

    getListaColaboradores = () => {
        fetch('http://localhost:5000/api/Colaborador')
        .then(response => response.json())
        .then(response => {
            var redux = response.slice(0, this.state.more)
            this.setState({ listaColaborador: redux })
        })
    }

    postSetState = (input) => {
        this.setState({
            nomeColab: input.target.value
        })
    }

    getFiltrarInformacao = () => {
        let filtro = {
            nomeColab: this.state.nomeColab
        }

        api.post('/FiltroColab', filtro).then(response => {
            if (response.status === 200) {
                this.setState({ listaColaborador: response.data })
            }
        })
    }

    incrementarMais = () => {
        this.setState({ more: this.state.more + 3 });
        this.getListaColaboradores();
    }
    // #endregion

    render() {
        return (
            <div>
                <Header />
                <ScrollTop />
                <main>
                    <div className="colab">
                        <div className="colab_banner">
                            <h1 className="tituloh1">COLABORADORES</h1>
                            <p className="p_colab">AUXILIANDO EM NOSSA MISSÃO</p>
                        </div>
                    </div>

                    <div className="container search_bar">
                        <form method="GET" className="form_style">
                            <input className="input_style" type="search" value={this.state.nomeColab} onChange={this.postSetState} placeholder="Pesquisar" />
                            <button className="button_conj" type="button" name="Pesquisa" onClick={this.getFiltrarInformacao}><img src={Lupa} alt="Lupa branca, representando a busca." /></button>
                        </form>
                    </div>

                    <div className="colab_section"></div><br />

                    {
                        this.state.listaColaborador.map((colaborador) => {
                            return (
                                <section key={colaborador.idUsuario} className="container">
                                    <div className="card card_colab card_colab_mobile">
                                        <div className="card_size">
                                            <div className="card_titulo_colab">
                                                <h3>{colaborador.nomeUsuario}</h3>
                                            </div>
                                            <div className="card_style">
                                                <div className="img_card_colab">
                                                    <img src={"http://localhost:5000/" + colaborador.imgPerfil} alt="Foto de perfil do colaborador" />
                                                </div>

                                                <div className="textarea_colab">
                                                    <textarea readOnly className="textoCampoSub">{colaborador.sobreColab}</textarea>
                                                </div>
                                            </div>
                                            <div className="Contato_Colab">
                                                {
                                                    colaborador.telefone1 !== "" && colaborador.telefone2 !== "" ?
                                                        <p className="textoCampoSub">Contato:  {colaborador.telefone1} | {colaborador.telefone2}</p>
                                                        :
                                                        colaborador.telefone1 !== "" ?
                                                            <p className="textoCampoSub">Contato: {colaborador.telefone1}</p>
                                                            :
                                                            <></>
                                                }
                                            </div>
                                        </div>

                                        <div className="sp_border"></div>

                                        <div className="card_size card_size_mobile">
                                            <div className="card_titulo_colab">
                                                <h3>Produtos fornecidos</h3>
                                            </div>
                                            <div className="card_style">
                                                {
                                                    this.state.listaRegistro.filter(e => e.idUsuario === colaborador.idUsuario).slice(0, 4).map(function (registro) {
                                                        return (
                                                            <div key={registro.idRegistro} className="card_info">
                                                                <img src={"http://localhost:5000/" + registro.idProdutoNavigation.imgProduto} alt="imagem ilustrativa de comida" />
                                                                <div className="caixa_of">
                                                                    <p className="textoCampoSub">{registro.idProdutoNavigation.nomeProduto}</p>
                                                                    <p className="textoCampoSub">R$ {registro.idProdutoNavigation.preco} /Kg</p>
                                                                </div>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                            <div className="Contato_Colab Contato_Colab_tablet">
                                                <Link className="btn_link_click" to={{ pathname: '/ColaboradorDetalhes', state: { idUsuario: colaborador.idUsuario } }} >+ Informações</Link>
                                            </div>
                                        </div>
                                    </div>
                                </section>
                            );
                        })
                    }
                    <div className="mais container">
                        <button className="limparBotao" onClick={() => { this.incrementarMais() }} title="Ver mais receitas">
                            <img src={mais} alt="Ícone de adição, representando ver mais." /></button>
                    </div>
                    <div className="colab_section_bot"></div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Colaboradores;