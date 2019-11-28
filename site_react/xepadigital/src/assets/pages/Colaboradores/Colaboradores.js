import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

class Colaboradores extends Component {
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
                    
                    {/* <div className="container search_bar">
                        <form method="GET" className="form_style">
                            <input className="input_style" type="search" placeholder="Pesquisar">
                            <button className="button_conj" type="button" name="Pesquisa"><img src="img/Lupa.svg" alt="Lupa branca, representando a busca."></button>
                        </form>
                    </div> */}

                    <div className="colab_section"></div>
                    <br/><br/>
                    <section className="container">
                        <div className="card card_colab">
                            <div className="card_size">
                                <h3>Ayana Fonseca Zunduri</h3>
                                <div className="card_style">
                                    {/* <img className="colaboradores_img" src="img/mulher_3.jpg" alt="Foto de perfil do colaborador"> */}
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
                                        {/* <img src="img/foto_cenoura.png" alt="Foto do produto, cenouras"> */}
                                        <p>Cenoura
                                        R$10,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_cenoura.png" alt="Foto do produto, cenouras"> */}
                                        <p>Cenoura
                                        R$10,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_cenoura.png" alt="Foto do produto, cenouras"> */}
                                        <p>Cenoura
                                        R$10,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_cenoura.png" alt="Foto do produto, cenouras"> */}
                                        <p>Cenoura
                                        R$10,20 kg</p>
                                    </div>
                                </div>
                                <a className="btn_link_click" href="colaborador_produtos.html">+ Informações</a>
                            </div>
                        </div>

                        <div className="card card_colab">
                            <div className="card_size">
                                <h3>Joselito Ferreira Vass</h3>
                                <div className="card_style">
                                    {/* <img src="img/colaborador.png" alt="Foto de perfil do colaborador"> */}
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
                                        {/* <img src="img/foto_cenoura.png" alt="Foto do produto, cenouras"> */}
                                        <p>Cenoura
                                        R$10,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_cenoura.png" alt="Foto do produto, cenouras"> */}
                                        <p>Cenoura
                                        R$10,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_cenoura.png" alt="Foto do produto, cenouras"> */}
                                        <p>Cenoura
                                        R$10,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_cenoura.png" alt="Foto do produto, cenouras"> */}
                                        <p>Cenoura
                                        R$10,20 kg</p>
                                    </div>
                                </div>
                                <a className="btn_link_click" href="colaborador_produtos.html">+ Informações</a>
                            </div>
                        </div>
                    </section>

                    <section className="container">
                        <div className="card card_colab">
                            <div className="card_size">
                                <h3>Augusto Ian Drumond</h3>
                                <div className="card_style">
                                    {/* <img src="img/fazendeiro.png" alt="Foto de perfil do colaborador"> */}
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
                                        {/* <img src="img/foto_alface.png" alt="Foto do produto, Alfaces."> */}
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_alface.png" alt="Foto do produto, Alfaces."> */}
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_alface.png" alt="Foto do produto, Alfaces."> */}
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_alface.png" alt="Foto do produto, Alfaces."> */}
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                </div>
                                <a className="btn_link_click" href="colaborador_produtos.html">+ Informações</a>
                            </div>
                        </div>
                        <div className="card card_colab">
                            <div className="card_size">
                                <h3>Tereza Sakura Miokato</h3>
                                <div className="card_style">
                                    {/* <img className="colaboradores_img" src="img/mulher_4.jpg" alt="Foto de perfil do colaborador"> */}
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
                                        {/* <img src="img/foto_alface.png" alt="Foto do produto, Alfaces."> */}
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_alface.png" alt="Foto do produto, Alfaces."> */}
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_alface.png" alt="Foto do produto, Alfaces."> */}
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                    <div className="card_info">
                                        {/* <img src="img/foto_alface.png" alt="Foto do produto, Alfaces."> */}
                                        <p>Alface Orgânica
                                        R$6,20 kg</p>
                                    </div>
                                </div>
                                <a className="btn_link_click" href="colaborador_produtos.html">+ Informações</a>   
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