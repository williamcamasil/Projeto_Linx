import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import mulher_3 from '../../img/mulher_3.jpg';
import mulher_4 from '../../img/mulher_4.jpg';
import colaborador from '../../img/colaborador.png';
import fazendeiro from '../../img/fazendeiro.png';
import foto_cenoura from '../../img/foto_cenoura.png';
import foto_alface from '../../img/foto_alface.png';
import Lupa from '../../img/Lupa.svg';
// import api from '../../services/api';

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
    }
    
    // //ComponentWillMound
    // UNSAFE_componentWillMount(){ 
    //     document.title = this.props.titulo_pagina;
    //     console.log("Carregando");
    // }
    
    //GET - Listar (é feito no didmount)
    getListarColaboradores = () => {
        fetch("http://localhost:5000/api/evento")
            .then(response => response.json())
            .then(data => this.setState({ lista: data }))
    }

    
    // getListarColaboradores = (event) => 
    // {
    //     //usado para não recarregar a página
    //     event.preventDefault();

    //     api.get("/login", {
    //         email : this.state.email,
    //         senha : this.state.senha
    //     })
    //     .then(response => {
    //         //salva o token no localStorage
    //         if(response.status === 200 || response.status === 204){
    //             localStorage.setItem("usuario-xepa", response.data.token);
    //             var base64 = localStorage.getItem('usuario-xepa').split('.')[1]
    //             //Se for administrador, enviara para a tela de categorias
    //             if (parseJwt().Role === 'Administrador'){
    //                 // this.props.history.push('/categorias')
    //             }
    //             else{
    //                 // this.props.history.push("/eventos")
    //             }


    //         }
    //     })
    //     //Caso ocorra algum erro, define o state erro Mensagem como 'E-mail ou senha inválidos'
    //     .catch(erro => {
    //         console.log("Erro: ", erro)
    //         // this.setState({ erroMensagem : 'E-mail ou senha inválidos!' })
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
                    <section className="container">
                        <div className="card card_colab">
                            <div className="card_size">
                                <h3>Ayana Fonseca Zunduri</h3>
                                <div className="card_style">
                                    <img src={mulher_3} className="colaboradores_img"  alt="Foto de perfil do colaborador"/>
                                    <p className="text_1">Nascida no Brasil mas Ayana 45 anos, é filha de imigrantes, negra 
                                        casada com 2 filhas, acorda todos os dias às 5:00 AM para cuidar de suas plantações 
                                        junto ao seu marido. Mora num humilde terreno em Rio Pequeno, SP onde plantam seus 
                                        produtos orgânicos. Ayana tem ensino médio e técnico em agricultura completo.</p>
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
                                <a className="btn_link_click" href="colaborador_produtos">+ Informações</a>
                            </div>
                        </div>

                        <div className="card card_colab">
                            <div className="card_size">
                                <h3>Joselito Ferreira Vass</h3>
                                <div className="card_style">
                                    <img src={colaborador} alt="Foto de perfil do colaborador"/>
                                    <p className="text_1">Nascido no Paraná Joselito 63 anos, Branco veio para São Paulo aos 
                                        14 anos de idade. Casado sem filhos, sem estudo, não tem nenhuma experiência com 
                                        tecnologia. Todos dias trabalha com criação de animais e suas plantações orgânicas, 
                                        mora em São Pedro do Turvo onde tem um sítio.</p>
                                </div>
                                <p className="Contato_Colaborador">Tel: (11) 3245-7654 | Av. Sebastião T Coelho, 240</p>
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
                                <a className="btn_link_click" href="colaborador_produtos">+ Informações</a>
                            </div>
                        </div>
                    </section>

                    <section className="container">
                        <div className="card card_colab">
                            <div className="card_size">
                                <h3>Augusto Ian Drumond</h3>
                                <div className="card_style">
                                    <img src={fazendeiro} alt="Foto de perfil do colaborador"/>
                                    <p className="text_1">Nascido em São Paulo Augusto 56 anos, negro, casado com 2 filhos. Com 
                                        sua própria indústria de alimentos tem o superior em contabilidade. Reside na Mooca 
                                        e trabalha como diretor financeiro em sua própria indústria </p>
                                </div>
                                <p className="Contato_Colaborador">Tel: (11) 4342-2092 | R. Teresina, 451</p>
                            </div>
                            <div className="sp_border"></div>
                            <div className="card_size">
                                <h3>Produtos fornecidos</h3>
                                <div className="card_style">
                                    <div className="card_info">
                                        <img src={foto_alface} alt="Foto do produto, Alfaces"/>
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        <img src={foto_alface} alt="Foto do produto, Alfaces"/>
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        <img src={foto_alface} alt="Foto do produto, Alfaces"/>
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        <img src={foto_alface} alt="Foto do produto, Alfaces"/>
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                </div>
                                <a className="btn_link_click" href="colaborador_produtos">+ Informações</a>
                            </div>
                        </div>
                        <div className="card card_colab">
                            <div className="card_size">
                                <h3>Tereza Sakura Miokato</h3>
                                <div className="card_style">
                                    <img src={mulher_4} className="colaboradores_img" alt="Foto de perfil do colaborador"/>
                                    <p className="text_1">Nascida no Japão Miokato mora hoje no interior de São Paulo numa cidadezinha 
                                        chamada Cabreúva, casada com 4 filhos. Miokato tem 75 anos e não tem ensino fundamental e 
                                        nenhuma experiência com tecnologia. 
                                        Em sua chácara tem suas plantações de produtos orgânicos e cuida também de alguns 
                                        animais e depois de cuidar de tudo isso ainda sobra tempo para cuidar de seus filhos. 
                                        </p>
                                </div>
                                <p className="Contato_Colaborador">Tel: (11) 4002-8922 | Estr. Saturnino Pereira, 202</p>
                            </div>
                            <div className="sp_border"></div>
                            <div className="card_size">
                                <h3>Produtos fornecidos</h3>
                                <div className="card_style">
                                    <div className="card_info">
                                        <img src={foto_alface} alt="Foto do produto, Alfaces"/>
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        <img src={foto_alface} alt="Foto do produto, Alfaces"/>
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        <img src={foto_alface} alt="Foto do produto, Alfaces"/>
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        <img src={foto_alface} alt="Foto do produto, Alfaces"/>
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                </div>
                                <a className="btn_link_click" href="colaborador_produtos">+ Informações</a>   
                            </div>
                        </div>
                    </section>
                    
                    <div className="colab_section"></div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Colaboradores;