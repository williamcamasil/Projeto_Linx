import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

class NotFound extends Component {
    render() {
        return (
            <div>
                <Header />
                    <div className='texto_pagina_404'>
                        <div className='p_404'>
                            <span>Página não encontrada</span>
                        </div>
                        
                        {/* <div><button className="botao" onClick="/">Página Inicial</button></div> */}
                        {/* <button className="botao" onClick="/">Página Inicial</button> */}
                        <div className='p_404'>
                            <a href="/" title="Página inicial"><i class="fas fa-arrow-circle-left fa-5x"></i></a>
                        </div>
                        <span>Voltar</span>
                        
                    </div>
                <Footer />
            </div>
        );
    }
}

export default NotFound;