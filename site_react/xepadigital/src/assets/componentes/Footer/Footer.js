import React, {Component} from 'react';

class Footer extends Component{
  render(){
    return(
      <div>
        <footer id="footer_contato">
            <div class="container footer_position">
                <div class="footer_style">
                    <p>ENTRE EM CONTATO CONOSCO</p>
                    {/* <a href="www.gmail.com" title="E-mail Xepa Digital.">
                        <img src="img/gmail.png"
                            alt="Logo do Gmail. Envelope branco vazado, onde as laterais e a parte inferior da aba, formam a letra M. ">xepadigital@gmail.com
                    </a> */}
                </div>
                <div class="footer_style">
                    <p class="off">ACOMPANHE NOSSAS REDES SOCIAIS</p>
                    <div>
                        {/* <a href="www.facebook.com.br" title="Facebook Xepa Digital.">
                            <img src="img/facebook.png"
                                alt="Logo do Facebook. Quadrado branco com pontas arredondadas, com vazado na forma da letra F.">/xepasenaicodexp
                        </a>
                        <a href="www.instagram.com.br" title="Instagram Xepa Digital.">
                            <img src="img/instagram.png"
                                alt="Logo do Instagram. Quadrado branco vazado com um circulo no centro, também vazado que forma a lente de uma câmera.">@xepadigital_6
                        </a> */}
                    </div>
                </div>
            </div>
            <p>&copy;2019 | XEPA DIGITAL</p>
        </footer>
      </div>
    );
  }
}

export default Footer;