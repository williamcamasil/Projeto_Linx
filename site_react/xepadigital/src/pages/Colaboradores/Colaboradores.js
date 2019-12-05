import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import mulher_3 from '../../assets/img/mulher_3.jpg';
import mulher_4 from '../../assets/img/mulher_4.jpg';
import colaborador from '../../assets/img/colaborador.png';
import fazendeiro from '../../assets/img/fazendeiro.png';
import foto_cenoura from '../../assets/img/foto_cenoura.png';
import foto_alface from '../../assets/img/foto_alface.png';
import Lupa from '../../assets/img/Lupa.svg';
// import api from '../../services/api';
import { Link } from "react-router-dom";
import api from '../../services/api'

class Colaboradores extends Component {
    constructor() {
        super();
        this.state = {
            lista: []
        }
    }
    
    componentDidMount() {
        console.log("Carregado")
        this.getListarColaboradores();
        // this.getFiltro();  //filtro de produtor e produtos

        // setTimeout(() => {
        //     console.log(this.state.lista)    
        // }, 1000);
        
    }
    
    // getListarColaboradores = () => {
    //     fetch("http://localhost:5000/api/RegistroProduto")
    //         .then(response => response.json())
    //         .then(data => this.setState({ lista: data }))            
    // }

    getListarColaboradores = () => {
        api.get('/Colaborador').then(response => {
            if (response.status === 200) {
                this.setState({ lista: response.data })
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
                            <input className="input_style" type="search" placeholder="Pesquisar"/>
                            <button className="button_conj" type="button" name="Pesquisa"><img src={Lupa} alt="Lupa branca, representando a busca."/></button>
                        </form>
                    </div>

                    <div className="colab_section"></div>
                    <br/><br/>

                    {
                        this.state.lista.map(function(informacoes){
                            return(
                                <section className="container">
                                    <div className="card card_colab">
                                        <div className="card_size">
                                            <h3>{informacoes.nomeUsuario}</h3>
                                            <div className="card_style">
                                                <img src={mulher_3} className="colaboradores_img"  alt="Foto de perfil do colaborador"/>
                                                <p className="text_1">{informacoes.sobreColab}</p>
                                            </div>
                                            <p className="Contato_Colaborador">Tel: (11) 5672-0992 | Rua Guilherme da Cruz, 148</p>
                                        </div>
                                        <div className="sp_border"></div>
                                        <div className="card_size">
                                            <h3>Produtos fornecidos</h3>
                                            <div className="card_style">
                                                <div className="card_info">
                                                    <img src={foto_cenoura} alt="Foto do produto, cenouras"/>
                                                    <p>Cenoura
                                                    R$10,20 kg</p>
                                                </div>
                                                <div className="card_info">
                                                    <img src={foto_cenoura} alt="Foto do produto, cenouras"/>
                                                    <p>Cenoura
                                                    R$10,20 kg</p>
                                                </div>
                                                <div className="card_info">
                                                    <img src={foto_cenoura} alt="Foto do produto, cenouras"/>
                                                    <p>Cenoura
                                                    R$10,20 kg</p>
                                                </div>
                                                <div className="card_info">
                                                    <img src={foto_cenoura} alt="Foto do produto, cenouras"/>
                                                    <p>Cenoura
                                                    R$10,20 kg</p>
                                                </div>
                                            </div>
                                            {/* <a className="btn_link_click" href="ColaboradorDetalhes">+ Informações</a> */}
                                            <Link to={{ pathname: '/ColaboradorDetalhes', state: { idColaborador: informacoes.idColaborador} }} >+ Informações</Link>
                                        </div>
                                    </div>
                                </section>
                            );
                        }.bind(this))
                    }  

                    <div className="colab_section"></div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Colaboradores;