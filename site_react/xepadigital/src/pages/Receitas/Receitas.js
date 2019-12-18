import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import lupa from '../../assets/img/Lupa.svg';
import { Link } from "react-router-dom";
import api from '../../services/api'
import mais from '../../assets/img/mais.png'
import ScrollTop from '../../componentes/ScrollTop/ScrollTop';

class Receitas extends Component {
    constructor() {
        super();
        this.state = {
            listaReceitas: [],
            nomeReceita: "",
            more: 3
        }
    }

    // #region
    componentDidMount() {
        console.log("Carregado")
        this.getReceita();
        // this.getFiltroReceita();
    }

    getReceita = () => {
        fetch('http://localhost:5000/api/Receita')
            .then(response => response.json())
            .then(response => {
                var redux = response.slice(0, this.state.more)

                this.setState({ listaReceitas: redux })
            })
    }

    postSetState = (input) => {
        this.setState({
            nomeReceita : input.target.value
        })
    }

    getFiltrarInformacao = () => {
        console.log(this.state.nomeReceita);

        let filtro = {
            nomeReceita: this.state.nomeReceita
        }
        
        api.post('/FiltroReceita', filtro).then(response => {
            if (response.status === 200) {
                this.setState({ listaReceitas: response.data })
                console.log('Lista ' , this.state.listaReceitas)
            }
        })     
    }

    incrementarMais = () => {
        this.setState({more: this.state.more + 3}); 
        console.log('Mostrar: ', this.state.more)  
        this.getReceita();
    }
    // #endregion

    render() {
        return (
            <div>
                <Header />
                <ScrollTop />
                <main>
                    <section>
                        <div className="banner">
                            <div className="bloco">
                                <h1 className="tituloh1">RECEITAS</h1>
                                <p className="bloco_titulo_2">SELECIONADAS COM MUITO CARINHO</p>
                            </div>
                        </div>

                        <div className="container search_bar off">
                            <form method="GET" className="form_style">
                                <input className="input_style" type="search" value={this.state.nomeReceita}  onChange={this.postSetState} placeholder="Pesquisar" />
                                <button className="button_conj" type="button" name="Pesquisa" onClick={this.getFiltrarInformacao}><img src={lupa} alt="Lupa branca, representando a busca." /></button>
                            </form>
                        </div>

                        <p className="linha_laranja"></p>
                        <div className="caixa_central">
                            <div className="grupo">

                                {
                                    this.state.listaReceitas.map(function (receita) {
                                        return (
                                            <>
                                            {/* <div className="grupo"></div> */}
                                                <div className="card cards">
                                                    <div className="img">
                                                        <img src={"http://localhost:5000/" + receita.imgReceita} alt="imagem ilustrativa de comida" />
                                                    </div>

                                                    <p className="card_titulo">{receita.nomeReceita}</p>
                                                    <p className="card_subtitulo"><strong>Ingredientes</strong></p>
                                                    <p className="card_conteudo">{receita.descricaoIngrediente}</p>
                                                    <p className="card_subtitulo"><strong>Mode de Preparo</strong></p>
                                                    <p className="card_conteudo">
                                                        {receita.descricaoPreparo}
                                                    </p>
                                                    <div className="botao_mais">
                                                        {/* transferindo informações de um ID especifico para outra página */}
                                                        <Link className="botao_link" to={{ pathname: '/ReceitasDetalhes', state: { idReceita: receita.idReceita } }} >Leia mais</Link>
                                                        {/* <button className="botao" type="button" name="Editar"><a to={{ pathname: '/ReceitasDetalhes', state: { idReceita: receita.idReceita } }}>Leia mais</a></button> */}
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    })
                                }
                            </div>
                            <div className="mais">
                                <button className="limparBotao" onClick = { () => {this.incrementarMais()}} title="Ver mais receitas">
                                <img src={mais} alt="Ícone de adição, representando ver mais."/></button>
                            </div>
                        </div>
                        <p className="linha_laranja"></p>
                    </section>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Receitas;