import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import colaborador_3 from '../../img/colaborador_3.png';

class PerfilColaborador extends Component {
    render() {
        return (
            <div>
                <Header />
                <main>
                    <section class="card card_size_cad">
                        <div class="container">
                            <h1 class="c_text">PERFIL COLABORADOR</h1>
                            <span class="d_text">Informações</span>
                            <div class="linha_perfil_colab"></div>
                            
                            {/* <!-- form --> */}
                            {/* <!-- displ flex --> */}
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
                                        <div class="caixa_input_2">
                                            {/* <!-- razao --> */}
                                            <label for="razao_social_lbl" aria-label="razao_social_lbl">Razão Social:</label>
                                            <br/>
                                            <input class="caixa-texto_2 caixa_style" type="razao_social" placeholder="Digite o nome da razao social" name="razao_social" id="razao_social"/>
                                        </div>
                                        <div class="caixa_input_2">
                                            {/* <!-- entrega --> */}
                                            <label for="entrega_lbl" aria-label="entrega_lbl"> Faz entrega?</label>
                                            <br/>
                                            <select class="caixa-texto_3 caixa_style" name="entrega_produto" id="entrega_produto">
                                                <option value="entrega_nao">Não</option>
                                                <option value="entrega_sim">Sim</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div class="caixa_cad_direita">
                                        <label for="sobre_lbl" aria-label="sobre_lbl"> Sobre</label>
                                        <br/>
                                        <input class="caixa-texto_4 caixa_style" type="sobre" placeholder="Sobre o colaborador" name="sobre_produtor" id="sobre_produto"/>
                                    </div>
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

export default PerfilColaborador;