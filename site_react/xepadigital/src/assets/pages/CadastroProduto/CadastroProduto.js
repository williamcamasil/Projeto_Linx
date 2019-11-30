import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import foto_legume from '../../img/foto_legume.png';
import mais from '../../img/mais.png';

class CadastroProduto extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <section>
                        <div className="container">
                            <div id="card_cadastro">
                                <span>CADASTRO DE PRODUTO</span>
                                
                                <div id="caixa_total">
                                    <div id="caixa_parte_imagem">
                                        <img src={foto_legume} alt="Legume verde"/>
                                        <form action="GET">
                                            <a className="btn_link_click_receita" href="cadastros_receita.html">Inserir IMG</a>
                                        </form>                            
                                    </div>

                                    <div id="caixa_parte_conteudo">
                                        <form className="form_caixa" action="GET">
                                            
                                            <div className="padronizar_campo2">
                                                <label for="nome_lbl" aria-label="nome_lbl"> Nome</label>
                                                <input className="caixa_texto_componente" type="nome_produto" placeholder="Digite o nome do produto" name="nome_produto" id="nome_produto"/>  
                                            </div>

                                            <div className="caixa_texto">
                                                <div className="caixa_texto_sub">
                                                    <label for="preco_lbl" aria-label="preco_lbl"> Preço</label><br/>
                                                    <input className="caixa_texto_componente" type="preco_produto" placeholder="Digite o preço" name="preco_produto" id="preco_produto"/> 
                                                </div>
                                                <div className="caixa_texto_sub">
                                                    <label for="data_lbl" aria-label="data_lbl"> Data de Validade</label><br/>
                                                    <input className="caixa_texto_componente" type="data_produto" placeholder="26/10/2019" name="data_produto" id="data_produto"/> 
                                                </div>
                                            </div>

                                            <div className="caixa_texto">
                                                <div>
                                                    <label for="organico_lbl" aria-label="organico_lbl"> Este produto é orgânico?</label><br/>
                                                    <select className="caixa_texto_componente" name="organico_produto" id="organico_produto">
                                                        <option value="organico_nao">Não</option>
                                                        <option value="organico_sim">Sim</option>
                                                    </select>
                                                </div>

                                                <div className="caixa_texto_sub">
                                                    <label for="disponibilidade_lbl" aria-label="disponibilidade_lbl"> Disponibilidade</label><br/>
                                                    <input className="caixa_texto_componente" type="detalhe_produto" placeholder="1 kg" name="detalhe_produto" id="detalhe_produto"/>
                                                </div>
                                            </div>

                                            <div className="caixa_texto_sub">
                                                <label for="detalhe_lbl" aria-label="detalhe_lbl"> Detalhe</label><br/>
                                                <input className="caixa_texto_componente_campo" type="detalhe_produto" placeholder="Digite os detalhes desse produto" name="detalhe_produto" id="detalhe_produto"/> 
                                            </div>

                                            <div className="caixa_texto_botoes">
                                                <button className="botao" type="button" name="Salvar">Salvar</button>
                                                <button className="botao" type="button" name="Excluir">Excluir</button>
                                            </div>
                                        </form>  
                                    </div>
                                </div>
                            </div>  
                            
                            <div className="linha"></div>
                            <div className="tit_produtor">
                                <span>PRODUTOS CADASTRADOS</span>
                            </div>

                            <div className="card_">
                                <div className="card_branco">
                                    <img src={foto_legume} alt="Cartão de produtos já cadastrados"/>
                                    <p>Alcachofra</p>
                                    <p>Legumes Orgânicos</p>
                                    <p>Disponível</p>
                                    <button className="botao" type="button" name="Editar_Card">Editar</button>
                                </div>

                                <div className="card_branco">
                                    <img src={foto_legume} alt="Cartão de produtos já cadastrados"/>
                                    <p>Alcachofra</p>
                                    <p>Legumes Orgânicos</p>
                                    <p>Disponível</p>
                                    <button className="botao" type="button" name="Editar_Card">Editar</button>
                                </div>

                                <div className="card_branco">
                                    <img src={foto_legume} alt="Cartão de produtos já cadastrados"/>
                                    <p>Alcachofra</p>
                                    <p>Legumes Orgânicos</p>
                                    <p>Disponível</p>
                                    <button className="botao" type="button" name="Editar_Card">Editar</button>
                                </div>

                                <div className="card_branco">
                                    <img src={foto_legume} alt="Cartão de produtos já cadastrados"/>
                                    <p>Alcachofra</p>
                                    <p>Legumes Orgânicos</p>
                                    <p>Disponível</p>
                                    <button className="botao" type="button" name="Editar_Card">Editar</button>
                                </div>
                            </div>

                            <div className="mais">
                                <a href="#" title="Ver mais receitas">
                                <img src={mais} alt="Ícone de adição, representando ver mais."/></a>
                            </div>

                        </div>
                    </section>                    
                </main>
                <Footer />
            </div> 
        )
    }
}

export default CadastroProduto;
  