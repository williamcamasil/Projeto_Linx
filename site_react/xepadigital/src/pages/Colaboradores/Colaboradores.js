import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import mulher_3 from '../../assets/img/mulher_3.jpg';
// import mulher_4 from '../../assets/img/mulher_4.jpg';
// import colaborador from '../../assets/img/colaborador.png';
// import fazendeiro from '../../assets/img/fazendeiro.png';
// import foto_cenoura from '../../assets/img/foto_cenoura.png';
// import foto_alface from '../../assets/img/foto_alface.png';
import Lupa from '../../assets/img/Lupa.svg';
// import api from '../../services/api';
import { Link } from "react-router-dom";
import api from '../../services/api'

class Colaboradores extends Component {
    constructor() {
        super();
        this.state = {
            lista: [],
            listaProdutos: [],
            nomeProduto: ""

            // filtroProduto: 
            // idLista : {
            //     id : 0
            // }
        }
    }

    componentDidMount() {
        console.log("Carregado")
        this.getListarColaboradores();
        this.getListarProdutos();
        // this.getFiltro();  //filtro de produtor e produtos

        // setTimeout(() => {
        //     console.log(this.state.lista)    
        // }, 1000);

    }

    getListarProdutos = () => {
        // let id = this.state.lista.idUsuario;
        api.get('/RegistroProduto').then(response => {
            if (response.status === 200) {
                this.setState({ listaProdutos: response.data })
            }
        })

        // console.log('id: ', id)
    }

    getListarColaboradores = () => {
        api.get('/Colaborador').then(response => {
            if (response.status === 200) {
                this.setState({ lista: response.data })
                console.log('Lista ' , this.state.lista)
            }
        }) 
    }

    postSetState = (input) => {
        this.setState({
            nomeProduto : input.target.value
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
                console.log('Lista ' , this.state.lista)
            }
        })     
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
                <main>
                    <div className="colab">
                        <div className="colab_banner">
                            <h1 className="tituloh1">COLABORADORES</h1>
                            <p className="p_colab">AUXILIANDO EM NOSSA MISSÃO</p>
                        </div>
                    </div>

                    <div className="container search_bar">
                        <form method="GET" className="form_style">
                            <input className="input_style" type="search" value={this.state.nomeProduto}  onChange={this.postSetState} placeholder="Pesquisar" />
                            <button className="button_conj" type="button" name="Pesquisa" onClick={this.getFiltrarInformacao}><img src={Lupa} alt="Lupa branca, representando a busca." /></button>
                        </form>
                    </div>

                    <div className="colab_section"></div>
                    <br /><br />

                    {
                        this.state.lista.map(  (informacoes) => {
                            return (
                                <section className="container">
                                    <div className="card card_colab">
                                        <div className="card_size">
                                            <h3>{informacoes.nomeUsuario}</h3>
                                            <div className="card_style">
                                                <img src={mulher_3} className="colaboradores_img" alt="Foto de perfil do colaborador" />
                                                {/* <img src={"http://localhost:5000/" + produto.idProdutoNavigation.imgProduto} alt="imagem ilustrativa de comida" /> */}
                                                <p className="text_1">{informacoes.sobreColab}</p>
                                            </div>
                                            <p className="Contato_Colaborador">Tel: (11) 5672-0992 | Rua Guilherme da Cruz, 148</p>
                                        </div>
                                    
                                        <div className="sp_border"></div>
                                        
                                        <div className="card_size">
                                            <h3>Produtos fornecidos</h3>
                                            <div className="card_style">
                                            {
                                                this.state.listaProdutos.map(
                                                    function (produto) {
                                                        return (
                                                            <div className="card_info">
                                                                <img src={"http://localhost:5000/" + produto.idProdutoNavigation.imgProduto} alt="imagem ilustrativa de comida" />
                                                                <p>{produto.idUsuarioNavigation.idUsuario}</p>
                                                                {/* R${produto.idProdutoNavigation.preco} /kg</p> */}
                                                            </div>
                                                        );
                                                    }
                                                )
                                            }
                                            </div>
                                            <Link to={{ pathname: '/ColaboradorDetalhes', state: { idUsuario: informacoes.idUsuario} }} >+ Informações</Link>
                                        </div>
                                    </div>
                                </section>
                            );
                        })
                    }

                    <div className="colab_section"></div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Colaboradores;