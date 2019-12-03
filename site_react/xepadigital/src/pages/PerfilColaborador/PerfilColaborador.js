import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import colaborador_3 from '../../assets/img/colaborador_3.png';

class PerfilColaborador extends Component {
    constructor(){
        super();
        this.state = {
            informacoesProdutor : []
        }
    }

    componentDidMount(){
        console.log("Carregado")
        // this.getInformacoesProdutor();
    }

    // getInformacoesProdutor = () => {
    //     api.get('/Usuario').then(response => {
    //         if (response.status === 200) {
    //             this.setState({ informacoesProdutor: response.data })
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <section className="card card_size_cad">
                        <div className="container">
                            <h1 className="c_text">PERFIL COLABORADOR</h1>

                            <span className="d_text">Informações</span>
                            <div className="linha_perfil_colab"></div>
                            
                            {/* <!-- form --> */}
                            {/* <!-- displ flex --> */}
                            <form>
                                <div className="c_disp_flex">
                                    <div className="caixa_cad_esquerda">
                                        {/* <!-- img/btn --> */}
                                        <img src={colaborador_3} alt=""/>
                                        <button className="botao" type="button" name="Inserir IMG">Inserir IMG</button>
                                    </div>
                                    <div>
                                        <div className="caixa_cad_direita">
                                            {/* <!-- 2 input --> */}
                                            {/* <!-- nome --> */}
                                            <label htmlFor="nome_prod_lbl" aria-label="nome_prod_lbl">Nome</label>
                                            <br/>
                                            <input className="caixa-texto_1 caixa_style" type="nome_produtor" placeholder="Digite seu nome" name="nome_prod" id="nome_prod"/>
                                            <br/>
                                            {/* <!-- email --> */}
                                            <label htmlFor="email_lbl" aria-label="email_lbl">E-mail</label>
                                            <br/>
                                            <input className="caixa-texto_1 caixa_style" type="email" placeholder="exemplo@exemplo.com.br" name="email_produtor" id="email_produto"/>
                                        </div>
                                        {/* <!-- precisa de displ flex wrap --> */}
                                        <div className="caixa_cad_direita c_disp_wrap">
                                            {/* <!-- 6 input --> */}
                                            {/* <!-- tel1 --> */}
                                            <div className="caixa_input_2">
                                                <label htmlFor="telefone_lbl" aria-label="telefone_lbl">Telefone:</label>
                                                <br/>
                                                <input className="caixa-texto_2 caixa_style" type="telefone" placeholder="(xx) xxxxx - xxxx" name="telefone_produtor" id="telefone_produto"/> 
                                            </div>
                                            <div className="caixa_input_2">
                                                {/* <!-- tel2 --> */}
                                                <label htmlFor="telefone2_lbl" aria-label="telefone2_lbl">Telefone 2° Opção:</label>
                                                <br/>
                                                <input className="caixa-texto_2 caixa_style" type="telefone2" placeholder="(xx) xxxxx - xxxx" name="telefone2_produtor" id="telefone2_produto"/> 
                                            </div>
                                            <div className="caixa_input_2">
                                                {/* <!-- cpf --> */}
                                                <label htmlFor="documento_lbl" aria-label="documento_lbl">CPF/CNPJ:</label>
                                                <br/>
                                                <input className="caixa-texto_2 caixa_style" type="documento" placeholder="Digite um documento (CPF/CNPJ)" name="documento" id="documento"/>
                                            </div>
                                            <div className="caixa_input_2">
                                                {/* <!-- notificacao --> */}
                                                <label htmlFor="notificacao_lbl" aria-label="notificacao_lbl">Deseja receber notificações?</label>
                                                <br/>
                                                <select className="caixa-texto_3 caixa_style" name="entrega_produto" id="entrega_produto">
                                                    <option value="entrega_nao">Não</option>
                                                    <option value="entrega_sim">Sim</option>
                                                </select>
                                            </div>
                                            <div className="caixa_input_2">
                                                {/* <!-- razao --> */}
                                                <label htmlFor="razao_social_lbl" aria-label="razao_social_lbl">Razão Social:</label>
                                                <br/>
                                                <input className="caixa-texto_2 caixa_style" type="razao_social" placeholder="Digite o nome da razao social" name="razao_social" id="razao_social"/>
                                            </div>
                                            <div className="caixa_input_2">
                                                {/* <!-- entrega --> */}
                                                <label htmlFor="entrega_lbl" aria-label="entrega_lbl"> Faz entrega?</label>
                                                <br/>
                                                <select className="caixa-texto_3 caixa_style" name="entrega_produto" id="entrega_produto">
                                                    <option value="entrega_nao">Não</option>
                                                    <option value="entrega_sim">Sim</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="caixa_cad_direita">
                                            <label htmlFor="sobre_lbl" aria-label="sobre_lbl"> Sobre</label>
                                            <br/>
                                            <input className="caixa-texto_4 caixa_style" type="sobre" placeholder="Sobre o colaborador" name="sobre_produtor" id="sobre_produto"/>
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <span className="d_text">Endereço</span>
                            <div className="linha_perfil_colab"></div>
                            
                            {/* form */}
                            {/* end */}
                            <form>
                                <div className="c_disp_flex">
                                    <div  className="caixa_cad_direita">
                                        <label htmlFor="logradouro_prod_lbl" aria-label="logradouro_prod_lbl">Logradouro:</label>
                                        <br/>
                                        <input className="caixa-texto_1 caixa_style" type="text" placeholder="Avenida..." name="logradouro_prod"/>

                                        <div className="c_disp_flex">
                                            <div className="caixa_input_3">
                                                <label htmlFor="cidade_prod_lbl" aria-label="cidade_prod_lbl">Cidade</label>
                                                <br/>
                                                <input className="caixa-texto_5 caixa_style" type="cidade_produtor" placeholder="São Paulo" name="cidade_prod"/> 
                                            </div>
                                            <div className="caixa_input_3">
                                                <label htmlFor="bairro_prod_lbl" aria-label="bairro_prod_lbl">Bairro</label>
                                                <br/>
                                                <input className="caixa-texto_5 caixa_style" type="bairro_produtor" placeholder="Jardins" name="bairro_prod"/> 
                                            </div>
                                            <div className="caixa_input_3">
                                                <label htmlFor="estado_prod_lbl" aria-label="estado_prod_lbl">Estado</label>
                                                <br/>
                                                <select className="caixa-texto_5 caixa_style" name="estado">
                                                    <option value="disponibilidade_nao">SP</option>
                                                    <option value="disponibilidade_sim">RJ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caixa_input_3">
                                        <label htmlFor="numero_prod_lbl" aria-label="numero_prod_lbl"> Número</label>
                                        <br/>
                                        <input className="caixa-texto_6 caixa_style" type="numero_produtor" placeholder="00" name="numero_prod"/>
                                        <br/>
                                        <label htmlFor="cep_prod_lbl" aria-label="cep_prod_lbl">CEP</label>
                                        <br/>
                                        <input className="caixa-texto_6 caixa_style" type="cep_produtor" placeholder="xxxxx-xxx" name="cep_prod"/>
                                    </div>
                                </div>
                            </form>

                            {/* btn */}
                            <div className="c_disp_just">
                                <div className="caixa_input_3">
                                    <button className="botao" type="button" name="Editar">Editar</button>
                                </div>
                                <div className="caixa_input_3">
                                    <button className="botao" type="button" name="Salvar">Salvar</button>
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