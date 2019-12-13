import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
// import mulher_3 from '../../assets/img/mulher_3.jpg';
// import mulher_4 from '../../assets/img/mulher_4.jpg';
// import colaborador from '../../assets/img/colaborador.png';
// import fazendeiro from '../../assets/img/fazendeiro.png';
// import foto_cenoura from '../../assets/img/foto_cenoura.png';
// import foto_alface from '../../assets/img/foto_alface.png';
import Lupa from '../../assets/img/Lupa.svg';
// import api from '../../services/api';
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
            nomeProduto: "",
            more: 3
        }
    }

    componentDidMount() {
        console.log("Carregado")
        this.getListaColaboradores();
        this.getListaRegistros();
    }

    getListaRegistros = () => {
        // let id = this.state.lista.idUsuario;
        api.get('/RegistroProduto').then(response => {
            if (response.status === 200) {
                this.setState({ listaRegistro: response.data })
            }
            console.log("Registros: ", this.state.listaRegistro)
        })
    }

    // getListaRegistros = () => {
    //     fetch('http://localhost:5000/api/RegistroProduto')
    //         .then(response => response.json())
    //         .then(response => {
    //             var redux = response.slice(0, 3)

    //             this.setState({ listaRegistro: redux })
    //         })
    // }

    // getListaColaboradores = () => {
    //     api.get('/Colaborador').then(response => {
    //         if (response.status === 200) {
    //             this.setState({ listaColaborador: response.data })
    //         }
    //         console.log("Colaboradores: ", this.state.listaColaborador)
    //     })
    // }

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
            nomeProduto: input.target.value
        })
    }

    getFiltrarInformacao = () => {
        console.log(this.state.nomeProduto);

        let filtro = {
            nomeProduto: this.state.nomeProduto
        }

        api.post('/FiltroProduto', filtro).then(response => {
            if (response.status === 200) {
                this.setState({ lista: response.data })
                console.log('Lista ', this.state.lista)
            }
        })
    }

    incrementarMais = () => {
        this.state.more += 3; 
        console.log('Mostrar: ', this.state.more) //this.state.more)  
        this.getListaColaboradores();
    }

    // getListarUsuario = () => {
    //     fetch("http://localhost:5000/api/Usuario")
    //         .then(response => response.json())
    //         .then(data => this.setState({ lista: data }))            
    // }


    // COMO INSERIR FILTRO?
    // getFiltro = () => {
    //     api.get('/FiltroReceita').then(response => {
    //         if (response.status === 200) {
    //             this.setState({ listaReceitas: response.data })
    //         }
    //     })    
    // }


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
                            <input className="input_style" type="search" value={this.state.nomeProduto} onChange={this.postSetState} placeholder="Pesquisar" />
                            <button className="button_conj" type="button" name="Pesquisa" onClick={this.getFiltrarInformacao}><img src={Lupa} alt="Lupa branca, representando a busca." /></button>
                        </form>
                    </div>

                    <div className="colab_section"></div>
                    <br /><br />

                    {
                        this.state.listaColaborador.map((colaborador) => {
                            // this.state.idColab = colaborador.idUsuario
                            // console.log("idMap: ", this.state.idColab)

                            return (
                                <section key={colaborador.idUsuario} className="container">
                                    <div className="card card_colab">
                                        <div className="card_size">
                                            <h3>{colaborador.nomeUsuario}</h3>
                                            <div className="card_style">
                                                <img src={"http://localhost:5000/" + colaborador.imgPerfil} alt="Foto de perfil do colaborador" />
                                                <p className="text_1">{colaborador.sobreColab}</p>
                                            </div>
                                            <p className="Contato_Colaborador">Tel: (11) 5672-0992 | Rua Guilherme da Cruz, 148</p>
                                        </div>

                                        <div className="sp_border"></div>

                                        <div className="card_size">
                                            <h3>Produtos fornecidos</h3>
                                            <div className="card_style">
                                                {
                                                    this.state.listaRegistro.filter(e => e.idUsuario === colaborador.idUsuario).slice(0,4).map(function (registro) {
                                                        return (
                                                            <div key={registro.idRegistro} className="card_info">
                                                                <img src={"http://localhost:5000/" + registro.idProdutoNavigation.imgProduto} alt="imagem ilustrativa de comida" />
                                                                <p>{registro.idUsuarioNavigation.nomeProduto}</p>
                                                                <p>R$ {registro.idUsuarioNavigation.preco} /Kg</p>
                                                            </div>
                                                        );
                                                    })
                                                }
                                            </div>
                                            <Link className="btn_link_click" to={{ pathname: '/ColaboradorDetalhes', state: { idUsuario: colaborador.idUsuario } }} >+ Informações</Link>
                                        </div>
                                    </div>
                                </section>
                            );
                        })
                    }

                    <div className="mais container">
                        <a onClick={() => { this.incrementarMais() }} title="Ver mais receitas">
                            <img src={mais} alt="Ícone de adição, representando ver mais." /></a>
                    </div>
                    
                    <div className="colab_section"></div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Colaboradores;