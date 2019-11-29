import React , { Component } from 'react' ;
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer'; 
import mais from '../../img/mais.png';

 
class Duvidas extends Component {
    render() {
        return (
            <>
                <Header /> 
                <main>
                    <div id="banner_duvidas">
                        <span>DÚVIDAS</span>
                    </div>
                    <div id="centralizar_pagina_duvida">            
                        <div class="caixa_duvidas">
                            <h2 class="sub_tit_duvida">Sobre a Xepa Digital</h2>
                            <div class="pergunta">
                                <div>
                                    <h5 class="letra_pagina_duvida">O que é Xepa Digital?</h5>
                                </div>

                                <div>
                                    <a href="#"><img src={mais} alt="" /></a>
                                </div>                
                            </div>

                            <div class="pergunta">
                                <div>
                                    <h5 class="letra_pagina_duvida">Nosso time de desenvolvedores</h5>
                                </div>

                                <div>
                                    <a href="#"><img src={mais} alt="" /></a>
                                </div>                
                            </div>
                        </div>


                        <div class="caixa_duvidas">
                            <h2 class="sub_tit_duvida">Sobre Colaboradores</h2>
                            <div class="pergunta">
                                <div>
                                    <h5 class="letra_pagina_duvida">Como funciona?</h5>
                                </div>

                                <div>
                                    <a href="#"><img src={mais} alt="" /></a>
                                </div>                
                            </div>

                            <div class="pergunta">
                                <div>
                                    <h5 class="letra_pagina_duvida">Quem pode ser um colaborador?</h5>
                                </div>

                                <div>
                                    <a href="#"><img src={mais} alt="" /></a>
                                </div>                
                            </div>
                        </div>

                        <div class="caixa_duvidas">
                            <h2 class="sub_tit_duvida">Sobre Geração de Renda</h2>
                            <div class="pergunta">
                                <div>
                                    <h5 class="letra_pagina_duvida">Como funciona?</h5>
                                </div>

                                <div>
                                    <a href="#"><img src={mais} alt="" /></a>
                                </div>                
                            </div>

                            <div class="pergunta">
                                <div>
                                    <h5 class="letra_pagina_duvida">quem pode ser um gerador de renda?</h5>
                                </div>

                                <div>
                                    <a href="#"><img src={mais} alt="" /></a>
                                </div>                
                            </div>
                        </div>


                        <div class="caixa_duvidas">
                            <h2 class="sub_tit_duvida">Sobre Nosso Propósito</h2>
                            <div class="pergunta">
                                <div>
                                    <h5 class="letra_pagina_duvida">O que...?</h5>
                                </div>

                                <div>
                                    <a href="#"><img src={mais} alt="" /></a>
                                </div>                
                            </div>

                            <div class="pergunta">
                                <div>
                                    <h5 class="letra_pagina_duvida">Como...?</h5>
                                </div>

                                <div>
                                    <a href="#"><img src={mais} alt="" /></a>
                                </div>                
                            </div>

                            <div id="last_duv"></div>
                        </div>
                    </div>
                </main>
                <Footer />
            </>
        )
    }
}
export default Duvidas;
