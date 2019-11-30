import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

import food from '../../img/food.png';

class ReceitasDetalhes extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <div className="banner">
                        <div className="bloco">
                            <h1 className="tituloh1">RECEITAS</h1>
                            <p className="bloco_titulo_2">SELECIONADAS COM MUITO CARINHO</p>
                        </div>
                    </div>
                    
                    <div className="colab_section"></div>

                    <div id="centralizar_pagina_produtor">            
                        <div className="caixa_produtor">
                            <img src={food} alt="Foto de um alimento"/>
                            <h3>Xepa 1 - Alegria</h3>
                        </div>

                        <div id="box_informacoes">
                            <span>Ingredientes</span>
                            <br/><br/>
                            <p>
                                - 1 abóbora cabotiá <br/>
                                - 1 couve flor <br/>
                                - 1 abobrinha <br/>
                                - 150g de cogumelo Paris <br/>
                                - 1 colher de sobremesa de curry tailandês <br/>
                                - 100 ml de vinho branco <br/>
                                - 1 dente de alho <br/>
                                - Leite de coco a gosto <br/>
                                - Alecrim, gengibre, sal e pimenta a gosto <br/>
                                - Salsinha e cebolinha finamente picadas <br/>
                            </p>
                            <br/>
                            <span>Modo de Preparo</span>
                            <br/>
                            <br/>
                            <p>
                                1. Corte uma abóbora cabotiá em gomos de aproximadamente 2cm de largura. Tempere com sal e pimenta do reino moída na hora. Acrescente o alecrim.
                                <br/>
                                2. Em uma assadeira forrada com papel alumínio, leve ao forno a 220 graus por 40 minutos, virando os gomos na metade do tempo. Para se certificar, espete a abóbora com um palito e verifique se está macia. Reserve.
                                <br/>
                                3. Separe a couve flor em pequenos buquês e corte a abobrinha em cubos médios. Corte os cogumelos em quatro.
                                <br/>
                                4. Branqueie a couve e a abobrinha separadamente, da seguinte forma: ferva os vegetais para que fiquem cozidos mas ainda firmes e, em seguida, mergulhe-os em água gelada, de preferência com pedras de gelo. Reserve.
                                <br/>
                                5. Em uma frigideira funda e quente, salteie os cogumelos com alho e gengibre picadinhos. Acrescente o curry tailandês vermelho, o vinho branco e o leite de coco a gosto.
                                <br/>
                                6. Ao iniciar a fervura, adicione os legumes e cozinhe por dois minutos. Finalize com salsinha e cebolinha finamente picadas.  
                            </p>
                        </div>
                    </div>

                    <div className="colab_section"></div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default ReceitasDetalhes;