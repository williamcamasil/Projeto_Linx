import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

import colaborador from '../../img/colaborador.png';
import foto_cenoura from '../../img/foto_cenoura.png';

class Colaborador_Detalhes extends Component {
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
                    
                    <div className="colab_section"></div>

                    <div id="centralizar_pagina_produtor">            
                        <div className="caixa_produtor">
                            <img src={colaborador} alt="Foto de perfil do colaborador"/>
                            <h3>Joselito Ferreira Vass</h3>
                        </div>

                        <div id="box_informacoes">
                            <p>Nascido no Paraná Joselito 63 anos, Branco veio para São Paulo aos 
                                14 anos de idade. Casado sem filhos, sem estudo, não tem nenhuma experiência com 
                                tecnologia. Todos dias trabalha com criação de animais e suas plantações orgânicas, 
                                mora em São Pedro do Turvo onde tem um sítio.</p>
                            
                            <p className="Contato_Colaborador">Tel: (11) 3245-7654 | Av. Sebastião T Coelho, 240</p>
                        </div>
                        
                        <div>
                            <h3>Produtos fornecidos</h3>
                            <div className="produtos_colab">
                                <div>
                                    <img src={foto_cenoura} alt="Foto do produto, cenouras"/>
                                </div>                    
                                <div className="produto">
                                    <p>
                                        Cenoura orgânica <br/>
                                        Preço: R$10,20 kg <br/>
                                        Data de validade: 26/10/2019 <br/>  
                                        Disponível: Sim <br/> 
                                        Orgânico: Sim <br/> 
                                        Produto livre de agrotóxicos                                
                                    </p>
                                </div>
                                <div className="input_produtos">
                                    <div>
                                        <label for="qtd_produto" aria-label="qtd_produto"> Quantidade:</label><br/>
                                        <input className="caixa-texto" type="Quantidade" placeholder="1 Kg" name="Quantidade" id="Quantidade"/><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="produtos_colab">
                                <div>
                                    <img src={foto_cenoura} alt="Foto do produto, cenouras"/>
                                </div>                    
                                <div className="produto">
                                    <p>
                                        Cenoura orgânica <br/>
                                        Preço: R$10,20 kg <br/>
                                        Data de validade: 26/10/2019 <br/>  
                                        Disponível: Sim <br/> 
                                        Orgânico: Sim <br/> 
                                        Produto livre de agrotóxicos                                
                                    </p>
                                </div>
                                <div className="input_produtos">
                                    <div>
                                        <label for="qtd_produto" aria-label="qtd_produto"> Quantidade:</label><br/>
                                        <input className="caixa-texto" type="Quantidade" placeholder="1 Kg" name="Quantidade" id="Quantidade"/><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="produtos_colab">
                                <div>
                                    <img src={foto_cenoura} alt="Foto do produto, cenouras"/>
                                    
                                </div>                    
                                <div className="produto">
                                    <p>
                                        Cenoura orgânica <br/>
                                        Preço: R$10,20 kg <br/>
                                        Data de validade: 26/10/2019 <br/>  
                                        Disponível: Sim <br/> 
                                        Orgânico: Sim <br/> 
                                        Produto livre de agrotóxicos                                
                                    </p>
                                </div>
                                <div className="input_produtos">
                                    <div>
                                        <label for="qtd_produto" aria-label="qtd_produto"> Quantidade:</label><br/>
                                        <input className="caixa-texto" type="Quantidade" placeholder="1 Kg" name="Quantidade" id="Quantidade"/><br/>
                                    </div>
                                </div>
                            </div>

                            <div className="produtos_colab">
                                <div>
                                    <img src={foto_cenoura} alt="Foto do produto, cenouras"/>
                                    
                                </div>                    
                                <div className="produto">
                                    <p>
                                        Cenoura orgânica <br/>
                                        Preço: R$10,20 kg <br/>
                                        Data de validade: 26/10/2019 <br/>  
                                        Disponível: Sim <br/> 
                                        Orgânico: Sim <br/> 
                                        Produto livre de agrotóxicos                                
                                    </p>
                                </div>
                                <div className="input_produtos">
                                    <div>
                                        <label for="qtd_produto" aria-label="qtd_produto"> Quantidade:</label><br/>
                                        <input className="caixa-texto" type="Quantidade" placeholder="1 Kg" name="Quantidade" id="Quantidade"/><br/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="box_colab_produtor">
                            <button className="botao" type="buttonReservar" name="Reservar">Reservar</button>
                            <button className="botao" type="buttonCancelarReserva" name="CancelarReserva">Cancelar</button>
                        </div>
                    </div>

                    <div className="colab_section"></div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Colaborador_Detalhes;