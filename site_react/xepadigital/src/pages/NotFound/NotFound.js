import React, {Component} from 'react';
// import Header from '../../componentes/Header/Header';
// import Footer from '../../componentes/Footer/Footer';

class NotFound extends Component {
    render() {
        return (
            <div>
                {/* <Header /> */}
                    <div className='texto_pagina_404'>
                        <div><span>Página não encontrada</span></div>
                        {/* <div><button className="botao" onClick="/">Página Inicial</button></div> */}
                        {/* <button className="botao" onClick="/">Página Inicial</button> */}
                    </div>
                {/* <Footer /> */}
            </div>
        );
    }
}

export default NotFound;