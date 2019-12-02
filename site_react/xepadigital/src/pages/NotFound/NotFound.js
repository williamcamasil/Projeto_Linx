import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

class NotFound extends Component {
    render() {
        return (
            <div>
                <Header />
                <div className='texto_pagina_404'>
                    <h1>Página não encontrada</h1>
                </div>
                <Footer />
            </div>
        );
    }
}

export default NotFound;