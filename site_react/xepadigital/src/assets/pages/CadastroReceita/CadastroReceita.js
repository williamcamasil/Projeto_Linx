import React , {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import food from '../../img/food_af.jpg';
import mais from '../../img/mais.png'


class CadastroReceita extends Component {
    render() {
        return (
            <>
            <Header />
            <main>
                <section>
                    <div class="container">
                        <div id="card_cadastro">
                            <span>CADASTRO DE RECEITA</span>
                            
                            <div id="caixa_total">
                                <div id="caixa_parte_imagem">
                                    <img class="img_cad_receita" src={food} alt="Imagem de um prato com macarrão ao molho" />
                                    <form action="GET">
                                        <a class="btn_link_click_receita" href="#">Inserir IMG</a>
                                    </form>                            
                                </div>

                                <div id="caixa_parte_conteudo">
                                    <form class="form_caixa" action="GET">
                                        <div class="padronizar_campo2">
                                            <label for="nome_lbl" aria-label="nome_lbl"> Nome</label>
                                            <input class="caixa_texto_componente" type="nome_receita" placeholder="Digite o nome da receita" name="nome_receita" id="nome_receita" />  
                                        </div>

                                        <div class="caixa_texto">
                                            <div class="caixa_texto_sub">
                                                <label for="ingrediente_lbl" aria-label="ingrediente_lbl"> Ingredientes</label><br/>
                                                <input class="caixa_texto_componente_bt" type="ingrediente_receita" placeholder="Digite os ingredientes" name="ingrediente_receita" id="ingrediente_receita" /> 
                                            </div>
                                            
                                            <div class="caixa_texto_sub">
                                                <label for="modo_lbl" aria-label="modo_lbl"> Modo de Preparo</label><br/>
                                                <input class="caixa_texto_componente_bt" type="modo_receita" placeholder="Digite o modo de preparo" name="modo_receita" id="modo_receita" /> 
                                            </div>
                                        </div>                             

                                        <div class="caixa_texto_botoes">
                                            <button class="botao" type="button" name="Salvar">Salvar</button>
                                            <button class="botao" type="button" name="Excluir">Excluir</button>
                                        </div>
                                    </form>  
                                </div>
                            </div>
                        </div>  
                        
                        <div class="linha"></div>
                        <div class="tit_receita">
                            <span>RECEITAS CADASTRADAS</span>
                        </div>

                        <div class="card_">
                            <div class="card_branco">
                                <img src={food} alt="Cartão de receitas já cadastrados" />
                                <p>Xepa 1</p>
                                <p>Ingredientes</p>
                                <p>Modo de Preparo</p>
                                <button class="botao" type="button" name="Editar_Card">Editar</button>
                            </div>

                            <div class="card_branco">
                                <img src={food} alt="Cartão de receitas já cadastrados" />
                                <p>Xepa 2</p>
                                <p>Ingredientes</p>
                                <p>Modo de Preparo</p>
                                <button class="botao" type="button" name="Editar_Card">Editar</button>
                            </div>

                            <div class="card_branco">
                                <img src={food} alt="Cartão de receitas já cadastrados" />
                                <p>Xepa 3</p>
                                <p>Ingredientes</p>
                                <p>Modo de Preparo</p>
                                <button class="botao" type="button" name="Editar_Card">Editar</button>
                            </div>

                            <div class="card_branco">
                                <img src={food} alt="Cartão de receitas já cadastrados" />
                                <p>Xepa 4</p>
                                <p>Ingredientes</p>
                                <p>Modo de Preparo</p>
                                <button class="botao" type="button" name="Editar_Card">Editar</button>
                            </div>
                        </div>

                        <div class="mais">
                            <a href="#" title="Ver mais receitas">
                            <img src={mais}
                            alt="Ícone de adição, representando ver mais." /></a>
                        </div>

                    </div>
                </section>                    
            </main>
    
            <Footer />
            </>
            
        )
    }
}

export default CadastroReceita;