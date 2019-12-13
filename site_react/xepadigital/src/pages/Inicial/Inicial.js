import React, {Component} from 'react';
import HeaderHome from '../../componentes/Header/HeaderHome';
import Footer from '../../componentes/Footer/Footer';
import ScrollTop from '../../componentes/ScrollTop/ScrollTop';
import logo_slogan from '../../assets/img/logo_slogan.svg';
import colab from '../../assets/img/colab.jpg';
import receitas from '../../assets/img/receitas.jpg';
// import termos from '../../assets/img/termos.png';
import duvida from '../../assets/img/banner_duvida.jpg';


// import Slider from "react-animated-slider";
// import home2 from "../../assets/img/home2.jpg";
// import home3 from "../../assets/img/home3.jpg";
// import home4 from "../../assets/img/home4.jpg";
// import home1 from "../../assets/img/home1.jpeg";


// const content = [
//     {
//       image: home1,
//     },
//     {
//       title: "Somos um Sacolão Digital",
//       image: home2,
//     },
//     {
//       title: "Oferecemos maior variedade de produtos com ótimos preços",
//       image: home3,
//     },
//     {
//       title: "Encontre nossos produtos pertinho de você",
//       image: home4,
//     },
//   ];

class Inicial extends Component {
    render() {
        return (
        <div>
            <HeaderHome />
            <ScrollTop />
            <main className="home">
                
                <div className="banner_home">
                    <div className="logoslogan_home">
                        <img src={logo_slogan} alt="logo Xepa Digital com o slogan da página"/>
                    </div>
                </div>

                {/* <div class="carousel-item">
                    <img src="..." alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>teste</h5>
                        <p>1etet</p>
                    </div>
                </div>
                https://getbootstrap.com/docs/4.0/components/carousel/</div> */}

                {/* <Slider className="slider-wrapper">
                    {content.map((item, index) => (
                        <div key={index} className="slider-content"
                        style={{ background: `url('${item.image}') no-repeat center center` }} >
                        <div className="inner">
                            <h1>{item.title}</h1>
                        </div>
                        </div>
                    ))}
                </Slider>   */}


                <section id="historia">
                    <div className="container_home">
                        <h2 className="tituloh2">NOSSA HISTÓRIA</h2>
                        <div className="text1">
                            <p>Tudo se iniciou em agosto de 2019, quando nós da 6minds, iniciamos um trabalho em equipe no curso codeXD, na instituição Senai de Informática, a qual recebemos como desafio, um projeto social para a colaboração na criação de novos meios de comunicação para agricultores orgânicos e renda para mulheres de baixa renda. Desde então estamos trabalhando duro, para poder entregar o que acreditamos ser o melhor e assim fazer da nossa cidade um lugar com mais equidade.</p>
                        </div>
                    </div>
                </section>
                <section id="propositos">
                    <div className="Home_bg"></div>
                    <div className="container_home">
                        <h2 className="tituloh2">NOSSO PROPÓSITO</h2>
                        <div className="text_home2">
                            <p>Temos como propósito entregar as melhores páginas web e funcionalidades, tendo como pilares, inovação, sustentabilidade com tecnologia e qualidade. Para que ao fim da experiência, o cliente seja o mais beneficiado.</p>
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
                            <p className="subtext_home1">
                                O objetivo da página de colaboradores é facilitar o acesso entre produtores rurais que tenham a vontade de oferecer seus produtos orgânicos para as pessoas que tem o interesse em comprá-los tanto para o consumo próprio como para o comércio desses produtos. Esta página se resume a todos nossos colaboradores rurais e seus produtos fornecidos, contendo todas informações possíveis. 
                                Quer ser um colaborador ? <strong>Clique em saiba mais</strong>
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
                                <p className="subtext_home2">O objetivo das receitas é proporcionar vários tipos de almoços e lanches para ser feita ao dia a dia, todas elas são feitas com produtos orgânicos, você poderá utilizar elas para seu consumo. Contendo todos os ingredientes e modo de preparo para facilitar o uso dessas receitas. De um modo simples e rápido de fazer, e uma receita mais gostosa que a outra.
                                Vamos cozinhar ? <strong>Clique em saiba mais</strong>
                                </p>
                            <div id="imagem_div_home">
                                <img src={receitas} alt="pratos de comida representando as receitas"/>
                            </div>
                        </div>
                        <a href="Receitas" title="Saiba mais sobre colaboradores." className="saiba">Saiba Mais>></a>
                    </div>
                </section>
                
                {/* <section id="colaboradores"> 
                    <div className="container_home">
                        <h2 className="tituloh2">TERMOS DE USO </h2>
                        <div className="text_home2">
                            <div id="imagem_div_home">
                                <img src={termos} alt="imagem ilustrativa de termo de uso"/>
                            </div>
                            <p className="subtext_home1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod leo
                                a nibh dignissim tincidunt. Nam ultricies odio ac neque suscipit volutpat. Ut dictum adipiscing
                                felis sed malesuada. Integer porta sem nec nibh hendrerit imperdiet. Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit.</p>
                        </div>
                        <a href="Termos" title="Saiba mais sobre nossos termos." className="saiba">Saiba Mais>></a>
                    </div>
                </section> */}

                <section id="colaboradores"> 
                    <div className="Home_bg"></div>
                    <div className="container_home">
                        <h2 className="tituloh2">DUVIDAS</h2>
                        <div className="text_home2 inverse">
                            <p className="subtext_home2">‘Nesse campo oferecemos toda ajuda para esclarecer as dúvidas, tanto para colaboradores quanto para clientes. Todas perguntas feitas nesta página serão esclarecidas da melhor forma possível para que todos consigam ter uma experiência boa no final..</p>
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
