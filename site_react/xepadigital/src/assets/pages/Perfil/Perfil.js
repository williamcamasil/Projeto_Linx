import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import colaborador_3 from '../../img/colaborador_3.png';

class Perfil extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <section class="card card_size_cad">
                        <div class="container">
                            <h1 class="c_text">PERFIL CLIENTE</h1>

                            <span class="d_text">Informações</span>
                            <div class="linha_perfil_colab"></div>
                            
                            {/* <!-- form --> */}
                            {/* <!-- displ flex --> */}
                            <form>
                                <div class="c_disp_flex">
                                    <div class="caixa_cad_esquerda">
                                        {/* <!-- img/btn --> */}
                                        <img src={colaborador_3} alt=""/>
                                        <button class="botao" type="button" name="Inserir IMG">Inserir IMG</button>
                                    </div>
                                    <div>
                                        <div class="caixa_cad_direita">
                                            {/* <!-- 2 input --> */}
                                            {/* <!-- nome --> */}
                                            <label for="nome_prod_lbl" aria-label="nome_prod_lbl">Nome</label>
                                            <br/>
                                            <input class="caixa-texto_1 caixa_style" type="nome_produtor" placeholder="Digite seu nome" name="nome_prod" id="nome_prod"/>
                                            <br/>
                                            {/* <!-- email --> */}
                                            <label for="email_lbl" aria-label="email_lbl">E-mail</label>
                                            <br/>
                                            <input class="caixa-texto_1 caixa_style" type="email" placeholder="exemplo@exemplo.com.br" name="email_produtor" id="email_produto"/>
                                        </div>
                                        {/* <!-- precisa de displ flex wrap --> */}
                                        <div class="caixa_cad_direita c_disp_wrap">
                                            {/* <!-- 6 input --> */}
                                            {/* <!-- tel1 --> */}
                                            <div class="caixa_input_2">
                                                <label for="telefone_lbl" aria-label="telefone_lbl">Telefone:</label>
                                                <br/>
                                                <input class="caixa-texto_2 caixa_style" type="telefone" placeholder="(xx) xxxxx - xxxx" name="telefone_produtor" id="telefone_produto"/> 
                                            </div>
                                            <div class="caixa_input_2">
                                                {/* <!-- tel2 --> */}
                                                <label for="telefone2_lbl" aria-label="telefone2_lbl">Telefone 2° Opção:</label>
                                                <br/>
                                                <input class="caixa-texto_2 caixa_style" type="telefone2" placeholder="(xx) xxxxx - xxxx" name="telefone2_produtor" id="telefone2_produto"/> 
                                            </div>
                                            <div class="caixa_input_2">
                                                {/* <!-- cpf --> */}
                                                <label for="documento_lbl" aria-label="documento_lbl">CPF/CNPJ:</label>
                                                <br/>
                                                <input class="caixa-texto_2 caixa_style" type="documento" placeholder="Digite um documento (CPF/CNPJ)" name="documento" id="documento"/>
                                            </div>
                                            <div class="caixa_input_2">
                                                {/* <!-- notificacao --> */}
                                                <label for="notificacao_lbl" aria-label="notificacao_lbl">Deseja receber notificações?</label>
                                                <br/>
                                                <select class="caixa-texto_3 caixa_style" name="entrega_produto" id="entrega_produto">
                                                    <option value="entrega_nao">Não</option>
                                                    <option value="entrega_sim">Sim</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <span class="d_text">Endereço</span>
                            <div class="linha_perfil_colab"></div>
                            
                            {/* form */}
                            {/* end */}
                            <form>
                                <div className="c_disp_flex">
                                    <div  className="caixa_cad_direita">
                                        <label for="logradouro_prod_lbl" aria-label="logradouro_prod_lbl">Logradouro:</label>
                                        <br/>
                                        <input className="caixa-texto_1 caixa_style" type="text" placeholder="Avenida..." name="logradouro_prod"/>

                                        <div className="c_disp_flex">
                                            <div className="caixa_input_3">
                                                <label for="cidade_prod_lbl" aria-label="cidade_prod_lbl">Cidade</label>
                                                <br/>
                                                <input className="caixa-texto_5 caixa_style" type="cidade_produtor" placeholder="São Paulo" name="cidade_prod"/> 
                                            </div>
                                            <div className="caixa_input_3">
                                                <label for="bairro_prod_lbl" aria-label="bairro_prod_lbl">Bairro</label>
                                                <br/>
                                                <input className="caixa-texto_5 caixa_style" type="bairro_produtor" placeholder="Jardins" name="bairro_prod"/> 
                                            </div>
                                            <div className="caixa_input_3">
                                                <label for="estado_prod_lbl" aria-label="estado_prod_lbl">Estado</label>
                                                <br/>
                                                <select className="caixa-texto_5 caixa_style" name="estado">
                                                    <option value="disponibilidade_nao">SP</option>
                                                    <option value="disponibilidade_sim">RJ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caixa_input_3">
                                        <label for="numero_prod_lbl" aria-label="numero_prod_lbl"> Número</label>
                                        <br/>
                                        <input className="caixa-texto_6 caixa_style" type="numero_produtor" placeholder="00" name="numero_prod"/>
                                        <br/>
                                        <label for="cep_prod_lbl" aria-label="cep_prod_lbl">CEP</label>
                                        <br/>
                                        <input class="caixa-texto_6 caixa_style" type="cep_produtor" placeholder="xxxxx-xxx" name="cep_prod"/>
                                    </div>
                                </div>
                            </form>

                            {/* btn */}
                            <div className="c_disp_just">
                                <div className="caixa_input_3">
                                    <button class="botao" type="button" name="Editar">Editar</button>
                                </div>
                                <div className="caixa_input_3">
                                    <button class="botao" type="button" name="Salvar">Salvar</button>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        );
    }
}

export default Perfil;