import React , {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import food from '../../assets/img/food_af.jpg';
// import mais from '../../assets/img/mais.png'
import api from '../../services/api'
import { Link } from "react-router-dom";

class CadastroReceita extends Component {
    constructor(){
        super();
        this.state = {
            listaCadReceitas : []
        }
    }

    componentDidMount(){
        this.getCadReceita();
    }

    getCadReceita = () => {
        api.get('/Receita').then(response => {
            if (response.status === 200) {
                this.setState({ listaCadReceitas: response.data })
            }
        })
    }

    render() {
        return (
            <>
            <Header />
            <main>
                <section>
                    <div className="container">
                        <div id="card_cadastro">
                            <span>CADASTRO DE RECEITA</span>
                            
                            <div id="caixa_total">
                                <div id="caixa_parte_imagem">
                                    <img className="img_cad_receita" src={food} alt="Imagem de um prato com macarrão ao molho" />
                                    <form action="GET">
                                        <a className="btn_link_click_receita" href="#">Inserir IMG</a>
                                    </form>                            
                                </div>

                                <div id="caixa_parte_conteudo">
                                    <form className="form_caixa" action="GET">
                                        <div className="padronizar_campo2">
                                            <label htmlFor="nome_lbl" aria-label="nome_lbl"> Nome</label>
                                            <input className="caixa_texto_componente" type="nome_receita" placeholder="Digite o nome da receita" name="nome_receita" id="nome_receita" />  
                                        </div>

                                        <div className="caixa_texto">
                                            <div className="caixa_texto_sub">
                                                <label htmlFor="ingrediente_lbl" aria-label="ingrediente_lbl"> Ingredientes</label><br/>
                                                <input className="caixa_texto_componente_bt" type="ingrediente_receita" placeholder="Digite os ingredientes" name="ingrediente_receita" id="ingrediente_receita" /> 
                                            </div>
                                            
                                            <div className="caixa_texto_sub">
                                                <label htmlFor="modo_lbl" aria-label="modo_lbl"> Modo de Preparo</label><br/>
                                                <input className="caixa_texto_componente_bt" type="modo_receita" placeholder="Digite o modo de preparo" name="modo_receita" id="modo_receita" /> 
                                            </div>
                                        </div>                             

                                        <div className="caixa_texto_botoes">
                                            {/* <button className="botao" type="button" name="Salvar">Salvar</button>
                                            <button className="botao" type="button" name="Excluir">Excluir</button> */}
                                            <button className="botao" type="button" name="Salvar"><Link>Salvar</Link></button>
                                            <button className="botao" type="button" name="Excluir"><Link>Excluir</Link></button>
                                            
                                            {/* <Link to={{ pathname: '/ReceitasDetalhes', state: { idReceita: receita.idReceita} }} >Leia mais</Link> */}
                                        </div>
                                    </form>  
                                </div>
                            </div>
                        </div>  
                        
                        <div className="linha"></div>
                        <div className="tit_receita">
                            <span>RECEITAS CADASTRADAS</span>
                        </div>

                        {
                            this.state.listaCadReceitas.map(function(receita){
                                return(
                                    <div>
                                        <div className="card_">
                                            <div className="card_branco">
                                                <img src={"http://localhost:5000/" + receita.imgReceita} alt="imagem ilustrativa de comida" />
                                                <p>{receita.nomeReceita}</p>
                                                <p>Ingredientes</p>
                                                <p>Modo de Preparo</p>
                                                {/* <button className="botao" type="button" name="Editar_Card">Editar</button> */}
                                                <button className="botao" type="button" name="Editar_Card"><Link>Editar</Link></button>
                                            </div>
                                        </div>

                                        {/* <div className="mais">
                                            <a href="#" title="Ver mais receitas">
                                            <img src={mais}
                                            alt="Ícone de adição, representando ver mais." /></a>
                                        </div> */}

                                    </div>
                                );
                            }.bind(this))
                        }
                    </div>   
                </section>                    
            </main>
    
            <Footer />
            </>
            
        )
    }
}

export default CadastroReceita;