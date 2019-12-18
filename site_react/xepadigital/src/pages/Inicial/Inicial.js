import React, {Component} from 'react';
import HeaderHome from '../../componentes/Header/HeaderHome';
import Footer from '../../componentes/Footer/Footer';
import ScrollTop from '../../componentes/ScrollTop/ScrollTop';
import colab from '../../assets/img/colab.jpg';
import receitas from '../../assets/img/receitas.jpg';
import duvida from '../../assets/img/banner_duvida.jpg';
import Carousel from "../../componentes/Carousel/Carousel";

class Inicial extends Component {
    // FUNÇÃO PARA DIMINUIR E AUMENTAR LETRA - NÃO ESTÁ PRONTO
    // fonte (e) {
    //     let campoTexto = "textoCampo";
    //     let normal = '20px';
    //     let maior = '25px';
    //     let t = document.getElementsByClassName(campoTexto).length;
    //     if (e == '1'){
    //         for (let i = 0; i < t; i++){
    //             document.getElementsByClassName(campoTexto)[i].style.fontSize = normal;
    //         }
    //     }else{
    //         for (let i = 0; i < t; i++){
    //             document.getElementsByClassName(campoTexto)[i].style.fontSize = maior;
    //         }
    //     }
    // }

    render() {
        return (
        <div>
            <HeaderHome />
            <ScrollTop />
            
            <main className="home">
                <Carousel/>
                
                {/*BOTÃO PARA AUMENTAR E DIMINUIR LETRA 
                <div className="letra_aumentar_diminuir">
                    <i class="fas fa-sort-alpha-down-alt fa-2x" onClick={() => { this.fonte('1') }}></i>
                    <i class="fas fa-sort-alpha-up-alt fa-2x" onClick={() => { this.fonte('2') }}></i>
                </div> */}

                <section id="historia">
                    <div className="container_home">
                        <h2 className="tituloh2">NOSSA HISTÓRIA</h2>
                        <div className="text1">
                            <p className="textoCampo">Tudo se iniciou em agosto de 2019, quando nós da 5minds, iniciamos um trabalho em equipe no curso codeXD, na instituição Senai de Informática, a qual recebemos como desafio, um projeto social para a colaboração na criação de novos meios de comunicação para agricultores orgânicos e renda para mulheres de baixa renda. Desde então estamos trabalhando duro, para poder entregar o que acreditamos ser o melhor e assim fazer da nossa cidade um lugar com mais equidade.</p>
                        </div>
                    </div>
                </section>
                <section id="propositos">
                    <div className="Home_bg"></div>
                    <div className="container_home">
                        <h2 className="tituloh2">NOSSO PROPÓSITO</h2>
                        <div className="text_home2">
                            <p className="textoCampo">Temos como propósito entregar as melhores páginas web e funcionalidades, tendo como pilares, inovação, sustentabilidade com tecnologia e qualidade. Para que ao fim da experiência, o cliente seja o mais beneficiado.</p>
                        </div>
                    </div>
                </section>
                <section id="colaboradores">
                    <div className="container_home">
                        <h2 className="tituloh2">COLABORADORES </h2>
                        <div className="text_home2">
                            <div id="imagem_div_home">
                                <img src={colab} alt="imagem de carroça representando os colaboradores"/>
                            </div>
                            <p className="subtext_home1 textoCampo">
                                O objetivo da página de colaboradores é facilitar o acesso entre produtores rurais que tenham a vontade de oferecer seus produtos orgânicos para as pessoas que tem o interesse em comprá-los tanto para o consumo próprio como para o comércio desses produtos. Esta página se resume a todos nossos colaboradores rurais e seus produtos fornecidos, contendo todas informações possíveis. 
                                Quer ser um colaborador ? <strong className="saibamais">Clique em saiba mais</strong>
                            </p>
                        </div>
                        <a href="Colaboradores" title="Saiba mais sobre colaboradores." className="saiba">Saiba Mais>></a>
                    </div>
                </section>
                <section id="receitas">
                    <div className="Home_bg"></div>
                    <div className="container_home">
                        <h2 className="tituloh2">RECEITAS</h2>
                        <div className="text_home2 inverse">
                                <p className="subtext_home2 textoCampo">O objetivo das receitas é proporcionar vários tipos de almoços e lanches para ser feita ao dia a dia, todas elas são feitas com produtos orgânicos, você poderá utilizar elas para seu consumo. Contendo todos os ingredientes e modo de preparo para facilitar o uso dessas receitas. De um modo simples e rápido de fazer, e uma receita mais gostosa que a outra.
                                Vamos cozinhar ? <strong className="saibamais">Clique em saiba mais</strong>
                                </p>
                            <div id="imagem_div_home">
                                <img src={receitas} alt="pratos de comida representando as receitas"/>
                            </div>
                        </div>
                        <a href="Receitas" title="Saiba mais sobre colaboradores." className="saiba">Saiba Mais>></a>
                    </div>
                </section>
            
                <section id="colaboradores"> 
                    <div className="Home_bg"></div>
                    <div className="container_home">
                        <h2 className="tituloh2">DUVIDAS</h2>
                        <div className="text_home2 inverse">
                            <p className="subtext_home2 textoCampo">Nesse campo oferecemos toda ajuda para esclarecer as dúvidas, tanto para colaboradores quanto para clientes. Todas perguntas feitas nesta página serão esclarecidas da melhor forma possível para que todos consigam ter uma experiência boa no final..</p>
                            <div id="imagem_div_home">
                                <img src={duvida} alt="imagem ilustrativa de duvidas"/>
                            </div>
                        </div>
                        <a href="Duvidas" title="Saiba mais sobre colaboradores." className="saiba">Saiba Mais>></a>
                    </div>
                </section>                
            </main>
        
            <Footer />
        </div>
        );
    }
}

export default Inicial;
