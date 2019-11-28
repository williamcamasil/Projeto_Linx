import React, {Component} from 'react';
import img_instagram from '../../img/instagram.png';
import img_facebook from '../../img/facebook.png';
import img_gmail from '../../img/gmail.png';

class Footer extends Component{
  render(){
    return(
      <div>
        <footer id="footer_contato">
            <div className="container footer_position">
                <div className="footer_style">
                    <p>ENTRE EM CONTATO CONOSCO</p>
                    
                    <a href="www.gmail.com" title="E-mail Xepa Digital.">
                        <img src={img_gmail} 
                            alt="Logo do Gmail. Envelope branco vazado, 
                            onde as laterais e a parte inferior da aba, formam a letra M. "/>xepadigital@gmail.com
                    </a>
                </div>
                <div className="footer_style">
                    <p className="off">ACOMPANHE NOSSAS REDES SOCIAIS</p>
                    <div>                        
                        <a href="www.facebook.com.br" title="Facebook Xepa Digital.">
                            <img src={img_facebook} 
                                alt="Logo do Facebook. Quadrado branco com pontas arredondadas, 
                                com vazado na forma da letra F." 
                            />xepasenaicodexp
                        </a>

                        <a href="www.instagram.com.br" title="Instagram Xepa Digital.">
                            <img src={img_instagram} 
                                alt="Logo do Instagram. Quadrado branco vazado com um circulo no centro, 
                                também vazado que forma a lente de uma câmera." 
                            />@xepadigital_6
                        </a>
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