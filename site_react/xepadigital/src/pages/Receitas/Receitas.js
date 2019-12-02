import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import lupa from '../../img/Lupa.svg';
import food from '../../img/food.png';
import mais from '../../img/mais.png';

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
                                this.state.listaReceitasId.map(function(receita){
                                    return(
                                        <div>
                                            <div className="caixa_central"> 
                                                <div className="grupo_total">
                                                    <div className="grupo"></div>

                                                        <div className="card cards">
                                                            <div className="img">
                                                                <img src={food} alt="imagem ilustrativa de comida" />
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

                        { //Codigo comentado
                            

                        {/* <div className="caixa_central"> 
                            <div className="grupo_total">
                                <div className="grupo">
                                        <div className="card cards">
                                        <div className="img">
                                            <img src={food} alt="imagem ilustrativa de comida" />
                                        </div>
                                    
                                        <p className="card_titulo">  Xepa 1 - Alegria</p>
                                        <p className="card_subtitulo">Ingredientes</p>
                                        <p className="card_conteudo">
                                            - Margarina para untar
                                            - 12 fatias de pão de forma (sem a casca)
                                            - 1/2 lata de molho de tomate pronto
                                            (coloquei 1 sache de sazon sabor do
                                            nordeste)
                                            - 6 fatias de presunto (ou a gosto)
                                            - 4 colheres de sopa de requeijão
                                            - 12 fatias de mussarela (ou a gosto)
                                            - 1/2 caixa de creme de leite
                                            - 1 tomate grande cortado em rodelas
                                            - orégano a gosto</p>
                                        <p className="card_subtitulo">Mode de Preparo</p>
                                        <p className="card_conteudo">
                                            1 - Unte um refratário com margarina.
                                            2 - Forre o fundo com 6 fatias de pão de
                                            forma.
                                            3 - Colocar metade do molho de tomate
                                            temperado, presunto, camada de requeijão,
                                            metade da mussarela, restante do pão de
                                            forma, molho de tomate, creme de leite,
                                            mussarela, tomate em rodelas, orégano.
                                            4 - Leve o refratário ao forno até a mussarela
                                            derreter (fiz no micro-ondas)</p>
                                        
                                        <div className="botao_mais">
                                            <a className="btn_link_click_receita" href="Receitas_Detalhes">Mais Informações</a>
                                        </div>                            
                                    </div>
            
                                    <div className="card cards">
                                        <div className="img">
                                            <img src={food} alt="imagem ilustrativa de comida" />
                                        </div>
            
                                        <p className="card_titulo">Xepa 2 - Alegria</p>
                                        <p className="card_subtitulo">Ingredientes</p>
                                        <p className="card_conteudo">
                                            - Margarina para untar
                                            - 12 fatias de pão de forma (sem a casca)
                                            - 1/2 lata de molho de tomate pronto
                                            (coloquei 1 sache de sazon sabor do
                                            nordeste)
                                            - 6 fatias de presunto (ou a gosto)
                                            - 4 colheres de sopa de requeijão
                                            - 12 fatias de mussarela (ou a gosto)
                                            - 1/2 caixa de creme de leite
                                            - 1 tomate grande cortado em rodelas
                                            - orégano a gosto</p>
                                        <p className="card_subtitulo">Mode de Preparo</p>
                                        <p className="card_conteudo">
                                            1 - Unte um refratário com margarina.
                                            2 - Forre o fundo com 6 fatias de pão de
                                            forma.
                                            3 - Colocar metade do molho de tomate
                                            temperado, presunto, camada de requeijão,
                                            metade da mussarela, restante do pão de
                                            forma, molho de tomate, creme de leite,
                                            mussarela, tomate em rodelas, orégano.
                                            4 - Leve o refratário ao forno até a mussarela
                                            derreter (fiz no micro-ondas)</p>
                                        
                                        <div className="botao_mais">
                                            <a className="btn_link_click_receita" href="Receitas_Detalhes" >Mais Informações</a>
                                        </div>  
                                    </div>
            
                                    <div className="card cards">
                                        <div className="img">
                                            <img src={food} alt="imagem ilustrativa de comida" />
                                        </div>
                                        <p className="card_titulo">Xepa 3 - Alegria</p>
                                        <p className="card_subtitulo">Ingredientes</p>
                                        <p className="card_conteudo">
                                            - Margarina para untar
                                            - 12 fatias de pão de forma (sem a casca)
                                            - 1/2 lata de molho de tomate pronto
                                            (coloquei 1 sache de sazon sabor do
                                            nordeste)
                                            - 6 fatias de presunto (ou a gosto)
                                            - 4 colheres de sopa de requeijão
                                            - 12 fatias de mussarela (ou a gosto)
                                            - 1/2 caixa de creme de leite
                                            - 1 tomate grande cortado em rodelas
                                            - orégano a gosto</p>
                                        <p className="card_subtitulo">Mode de Preparo</p>
                                        <p className="card_conteudo">
                                            1 - Unte um refratário com margarina.
                                            2 - Forre o fundo com 6 fatias de pão de
                                            forma.
                                            3 - Colocar metade do molho de tomate
                                            temperado, presunto, camada de requeijão,
                                            metade da mussarela, restante do pão de
                                            forma, molho de tomate, creme de leite,
                                            mussarela, tomate em rodelas, orégano.
                                            4 - Leve o refratário ao forno até a mussarela
                                            derreter (fiz no micro-ondas)</p>
                                        
                                        <div className="botao_mais">
                                            <a className="btn_link_click_receita" href="Receitas_Detalhes" >Mais Informações</a>
                                        </div>  
                                    </div>
                                </div>
                            </div>
                        
                        </div>
            
                        <div className="caixa_central">
                            <div className="grupo_total">
                                <div className="grupo">
                                    <div className="card cards">
                                        <div className="img">
                                            <img src={food} alt="imagem ilustrativa de comida" />
                                        </div>
            
                                        <p className="card_titulo">Lanche 1 - Pinheiros</p>
                                        <p className="card_subtitulo">Ingredientes</p>
                                        <p className="card_conteudo">- Margarina para untar
                                            - 12 fatias de pão de forma (sem a casca)
                                            - 1/2 lata de molho de tomate pronto
                                            (coloquei 1 sache de sazon sabor do
                                            nordeste)
                                            - 6 fatias de presunto (ou a gosto)
                                            - 4 colheres de sopa de requeijão
                                            - 12 fatias de mussarela (ou a gosto)
                                            - 1/2 caixa de creme de leite
                                            - 1 tomate grande cortado em rodelas
                                            - orégano a gosto</p>
                                        <p className="card_subtitulo">Mode de Preparo</p>
                                        <p className="card_conteudo">1 - Unte um refratário com margarina.
                                            2 - Forre o fundo com 6 fatias de pão de
                                            forma.
                                            3 - Colocar metade do molho de tomate
                                            temperado, presunto, camada de requeijão,
                                            metade da mussarela, restante do pão de
                                            forma, molho de tomate, creme de leite,
                                            mussarela, tomate em rodelas, orégano.
                                            4 - Leve o refratário ao forno até a mussarela
                                            derreter (fiz no micro-ondas)</p>
            
                                        <div className="botao_mais">
                                            <a className="btn_link_click_receita" href="Receitas_Detalhes">Mais Informações </a>
                                        </div>  
                                    </div>
            
                                    <div className="card cards">
                                        <div className="img">
                                            <img src={food} alt="imagem ilustrativa de comida" />
                                        </div>
            
                                        <p className="card_titulo">Lanche 2 - Pinheiros</p>
                                        <p className="card_subtitulo">Ingredientes</p>
                                        <p className="card_conteudo">- Margarina para untar
                                            - 12 fatias de pão de forma (sem a casca)
                                            - 1/2 lata de molho de tomate pronto
                                            (coloquei 1 sache de sazon sabor do
                                            nordeste)
                                            - 6 fatias de presunto (ou a gosto)
                                            - 4 colheres de sopa de requeijão
                                            - 12 fatias de mussarela (ou a gosto)
                                            - 1/2 caixa de creme de leite
                                            - 1 tomate grande cortado em rodelas
                                            - orégano a gosto</p>
                                        <p className="card_subtitulo">Mode de Preparo</p>
                                        <p className="card_conteudo">1 - Unte um refratário com margarina.
                                            2 - Forre o fundo com 6 fatias de pão de
                                            forma.
                                            3 - Colocar metade do molho de tomate
                                            temperado, presunto, camada de requeijão,
                                            metade da mussarela, restante do pão de
                                            forma, molho de tomate, creme de leite,
                                            mussarela, tomate em rodelas, orégano.
                                            4 - Leve o refratário ao forno até a mussarela
                                            derreter (fiz no micro-ondas)</p>
            
                                        <div className="botao_mais">
                                            <a className="btn_link_click_receita" href="Receitas_Detalhes" >Mais Informações </a>
                                        </div>  
                                    </div>
            
                                    <div className="card cards">
                                        <div className="img">
                                            <img src={food} alt="imagem ilustrativa de comida" />
                                        </div>
            
                                        <p className="card_titulo">Lanche 3 - Pinheiros</p>
                                        <p className="card_subtitulo">Ingredientes</p>
                                        <p className="card_conteudo">- Margarina para untar
                                            - 12 fatias de pão de forma (sem a casca)
                                            - 1/2 lata de molho de tomate pronto
                                            (coloquei 1 sache de sazon sabor do
                                            nordeste)
                                            - 6 fatias de presunto (ou a gosto)
                                            - 4 colheres de sopa de requeijão
                                            - 12 fatias de mussarela (ou a gosto)
                                            - 1/2 caixa de creme de leite
                                            - 1 tomate grande cortado em rodelas
                                            - orégano a gosto</p>
                                        <p className="card_subtitulo">Mode de Preparo</p>
                                        <p className="card_conteudo">1 - Unte um refratário com margarina.
                                            2 - Forre o fundo com 6 fatias de pão de
                                            forma.
                                            3 - Colocar metade do molho de tomate
                                            temperado, presunto, camada de requeijão,
                                            metade da mussarela, restante do pão de
                                            forma, molho de tomate, creme de leite,
                                            mussarela, tomate em rodelas, orégano.
                                            4 - Leve o refratário ao forno até a mussarela
                                            derreter (fiz no micro-ondas)</p>
            
                                        <div className="botao_mais">
                                            <a className="btn_link_click_receita" href="Receitas_Detalhes">Mais Informações</a>
                                        </div>   
                                    </div>
                                </div>
                            </div>
                            <div className="mais">
                                    <a href="#" title="Ver mais receitas">
                                        <img src={mais}
                                        alt="Ícone de adição, representando ver mais." /></a>
                            </div>
                                            </div>  */}

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