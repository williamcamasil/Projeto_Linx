import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import lupa from '../../assets/img/Lupa.svg';
import food from '../../assets/img/food.png';
// import mais from '../../assets/img/mais.png';

class Receitas extends Component {
    constructor(){
        super();
        this.state = {
            listaReceitas : []

            // informacoes : {
            //     idReceita : "",
            //     nomeReceita : "",
            //     descricaoIngrediente : ""
            // }
        }
    }
    
    // //ComponentWillMound
    // UNSAFE_componentWillMount() { ///
    //     document.title = this.props.titulo_pagina;
    //     console.log("Carregando");
    // }

    //Com o didmount o listaAtualizado é mostrado no front
    componentDidMount(){
        console.log("Carregado")
        this.getReceita();
        
    }

    //GET - Listar (é feito no didmount)
    getReceita = () =>{
        fetch("http://localhost:5000/api/Receita")
            .then(response => response.json())
            .then(data => this.setState( {listaReceitas : data} ))
    }

    // atualizaInformacoes(input){
    //     this.setState({
    //         informacoes : {
    //             idReceita : this.state.informacoes.idReceita,
    //             nomeReceita : input.target.value,
    //             descricaoIngrediente : input.target.value
    //         }
    //     })
    // }

    render() {
        return (
            <div>
            <Header />
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
                                <input className="input_style" type="search" placeholder="Pesquisar" />
                                <button className="button_conj" type="button" name="Pesquisa">
                                    <img src={lupa} alt="Lupa branca, representando a busca." />
                                </button>
                            </form>
                        </div>
            
                        <p className="linha_laranja"></p>                                        
                            {
                                this.state.listaReceitas.map(function(receita){
                                    return(
                                        <div>
                                            <div className="caixa_central"> 
                                                <div className="grupo_total">
                                                    <div className="grupo"></div>

                                                        <div className="card cards">
                                                            <div className="img">
                                                                {/* <img src={"http://localhost:5000" + (receita.ImgReceita).split('\\')[6]} alt="imagem ilustrativa de comida" /> */}
                                                            </div>
                                
                                                            <p className="card_titulo">{receita.nomeReceita}</p>
                                                            <p className="card_subtitulo">Ingredientes</p>
                                                            <p className="card_conteudo">
                                                                {receita.descricaoIngrediente}   
                                                            </p>
                                                            <p className="card_subtitulo">Mode de Preparo</p>
                                                            <p className="card_conteudo">
                                                                {receita.descricaoPreparo}   
                                                            </p>
                                                            
                                                            <div className="botao_mais">
                                                                <a className="btn_link_click_receita" href="Receitas_Detalhes" >Mais Informações</a>
                                                            </div>  
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    );
                                }.bind(this))
                            }                            

                        <p className="linha_laranja"></p>
                </section>
            </main>
            <Footer /> 
            </div>                                    
        )
    }
}

export default Receitas;