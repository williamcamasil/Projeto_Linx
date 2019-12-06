import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
// import colaborador_3 from '../../assets/img/colaborador_3.png';
// import profile from '../../assets/img/profile.png';
import { parseJwt } from '../../services/auth';
import api from '../../services/api';

class PerfilColaborador extends Component {
    constructor() {
        super();
        this.state = {
            // usuarioPorId: [],
            // enderecoPorId: [],

            putUsuario: {
                idUsuario: parseJwt().Id,
                imgPerfil: React.createRef(),
                nomeUsuario: "",
                emailUsuario: "",
                telefone1: "",
                telefone2: "",
                documento: "",
                receberNotif: "",
                razaoSocial: "",
                fazEntrega: "",
                sobreColab: "",
            },

            putEndereco: {
                enderecoId: "",
                endereco1: "",
                numero: "",
                cep: "",
                cidade: "",
                bairro: "",
                estado: "",
                idUsuario: parseJwt().Id,
            }
        }
    }


    //#region COMPONENTS
    componentDidMount() {
        console.log("Carregado")
        this.getUsuarioId();
        this.getEnderecoId();
        // this.usuarioDoBanco();
    }
    //#endregion

    //#region GETS
    getUsuarioId = () => {
        let idUser = this.state.putUsuario.idUsuario;
        console.log("idUser: ", idUser);

        api.get("/Usuario/" + idUser)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ putUsuario: response.data })
                }
                console.log("respUser: ", this.state.putUsuario)

            })

    }

    getEnderecoId = () => {
        let idEnd = this.state.putEndereco.idUsuario;
        let idEndPut = this.state.putEndereco.enderecoId;

        console.log("idEnd: ", idEnd);
        console.log("idEndPut: ", idEndPut);

        api.get("/Endereco/" + idEnd)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ putEndereco: response.data })
                }
                console.log("respEnd: ", this.state.putEndereco)

            })
    }
    //#endregion

    //#region SET STATES
    putSetStateUsuario = (input) => {
        this.setState({
            putUsuario: {
                ...this.state.usuarioPorId, [input.target.name]: input.target.value
            }
        })
        console.log("putSst: ", this.state.putUsuario)
    }

    putSetStateEndereco = (input) => {
        this.setState({
            putEndereco: {
                ...this.state.putEndereco, [input.target.name]: input.target.value
            }
        })
        setTimeout(() => {
            console.log("setStateEnd: ", this.state.putEndereco)
        }, 500);
    }
    //#endregion

    //#region PUTS
    putAltUsuario = (e) => {
        e.preventDefault();
        let idUser = this.state.putUsuario.idUsuario;
        let usuario = new FormData();

        usuario.set('imgPerfil', this.state.putUsuario.imgReceita.current.files[0]);
        usuario.set('nomeUsuario', this.state.putUsuario.nomeUsuario);
        usuario.set('emailUsuario', this.state.putUsuario.emailUsuario);
        usuario.set('telefone1', this.state.putUsuario.telefone1);
        usuario.set('telefone2', this.state.putUsuario.telefone2);
        usuario.set('documento', this.state.putUsuario.documento);
        usuario.set('receberNotif', this.state.putUsuario.receberNotif);
        usuario.set('razaoSocial', this.state.putUsuario.razaoSocial);
        usuario.set('fazEntrega', this.state.putUsuario.fazEntrega);
        usuario.set('sobreColab', this.state.putUsuario.sobreColab);

        api.put("/Usuario/" + idUser)
            // body: usuario
            .then(response => {
                if (response.status === 200){
                    console.log(response);
                }
            })
            .catch(error => console.log("error: ", error))

            setTimeout(() => {
                this.getUsuarioId();
            }, 500);
    }

    putAltEndereco = (e) => {
        e.preventDefault();
        let idEndPut = this.state.putEndereco.enderecoId;
        let endAtualizado = this.state.putEndereco;

        api.put("/Endereco/" + idEndPut, endAtualizado)
            .then(response => {
                if (response.status === 200){
                    console.log(response);
                }
            })
            .catch(error => console.log("error: ", error))

            setTimeout(() => {
                this.getEnderecoId();
            }, 500);
    }
    //#endregion

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

                            {/* <!-- form DUPLO--> */}


                            {/* <!-- USUARIO--> */}

                            <form>
                                <div className="c_disp_flex">
                                    <div className="caixa_cad_esquerda">
                                        <div className="caixa_cad_img">
                                                                                                                    {/* <img src={profile} alt="" /> */}

                                            <img alt="Imagem de perfil do Usuário"
                                                src={"http://localhost:5000/" + this.state.putUsuario.imgPerfil} />
                                        </div>
                                        <button className="botao" type="button" name="Inserir IMG">Inserir IMG</button>
                                    </div>
                                    <div>
                                        <div className="caixa_cad_direita">
                                                                                                                    {/* <!-- nome --> */}
                                            <label aria-label="nome_prod_lbl">Nome</label>
                                            <br />
                                            <input className="caixa-texto_1 caixa_style" type="text" placeholder="Digite seu nome"
                                                name="nomeUsuario"
                                                value={this.state.putUsuario.nomeUsuario}
                                                onChange={this.putSetStateUsuario}
                                            />
                                            <br />
                                                                                                                    {/* <!-- email --> */}
                                            <label aria-label="email_lbl">E-mail</label>
                                            <br />
                                            <input className="caixa-texto_1 caixa_style" type="email" placeholder="exemplo@exemplo.com.br"
                                                name="emailUsuario"
                                                value={this.state.putUsuario.emailUsuario}
                                                onChange={this.putSetStateUsuario}
                                            />
                                        </div>
                                        <div className="caixa_cad_direita c_disp_wrap">
                                                                                                                    {/* <!-- tel1 --> */}
                                            <div className="caixa_input_2">
                                                <label aria-label="telefone_lbl">Telefone:</label>
                                                <br />
                                                <input className="caixa-texto_2 caixa_style" type="text" placeholder="(xx) xxxxx - xxxx"
                                                    name="telefone1"
                                                    value={this.state.putUsuario.telefone1}
                                                    onChange={this.putSetStateUsuario}
                                                />
                                            </div>
                                            <div className="caixa_input_2">
                                                                                                                    {/* <!-- tel2 --> */}
                                                <label aria-label="telefone2_lbl">Telefone 2° Opção:</label>
                                                <br />
                                                <input className="caixa-texto_2 caixa_style" type="text" placeholder="(xx) xxxxx - xxxx"
                                                    name="telefone2"
                                                    value={this.state.putUsuario.telefone2}
                                                    onChange={this.putSetStateUsuario}
                                                />
                                            </div>
                                            <div className="caixa_input_2">
                                                                                                                    {/* <!-- cpf --> */}
                                                <label aria-label="documento_lbl">CPF/CNPJ:</label>
                                                <br />
                                                <input className="caixa-texto_2 caixa_style" type="text" placeholder="Digite um documento (CPF/CNPJ)"
                                                    name="documento"
                                                    value={this.state.putUsuario.documento}
                                                    onChange={this.putSetStateUsuario}
                                                />
                                            </div>
                                            <div className="caixa_input_2">
                                                                                                                    {/* <!-- notificacao --> */}
                                                <label aria-label="notificacao_lbl">Deseja receber notificações?</label>
                                                <br />
                                                <select className="caixa-texto_3 caixa_style"
                                                    name="receberNotif"
                                                    value={this.state.putUsuario.receberNotif}
                                                    onChange={this.putSetStateUsuario}
                                                >
                                                {
                                                    (this.state.putUsuario.receberNotif === true) ?
                                                        (
                                                            <>
                                                                <option value="true">Sim</option>
                                                                <option value="false">Não</option>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <option value="false">Não</option>
                                                                <option value="true">Sim</option>
                                                            </>
                                                        )
                                                }
                                                </select>
                                            </div>
                                            <div className="caixa_input_2">
                                                                                                                    {/* <!-- razao --> */}
                                                <label aria-label="razao_social_lbl">Razão Social:</label>
                                                <br />
                                                <input className="caixa-texto_2 caixa_style" type="text" placeholder="Digite o nome da razao social"
                                                    name="razaoSocial"
                                                    value={this.state.putUsuario.razaoSocial}
                                                    onChange={this.putSetStateUsuario}
                                                />
                                            </div>
                                            <div className="caixa_input_2">
                                                                                                                    {/* <!-- entrega --> */}
                                                <label aria-label="entrega_lbl">Faz entrega?</label>
                                                <br />
                                                <select className="caixa-texto_3 caixa_style"
                                                    name="fazEntrega"
                                                    value={this.state.putUsuario.fazEntrega}
                                                    onChange={this.putSetStateUsuario}
                                                >
                                                {
                                                    (this.state.putUsuario.fazEntrega === true) ?
                                                        (
                                                            <>
                                                                <option value="true">Sim</option>
                                                                <option value="false">Não</option>
                                                            </>
                                                        ) : (
                                                            <>
                                                                <option value="false">Não</option>
                                                                <option value="true">Sim</option>
                                                            </>
                                                        )
                                                }
                                                </select>
                                            </div>
                                        </div>
                                        <div className="caixa_cad_direita">
                                            <label aria-label="sobre_lbl">Sobre</label>
                                            <br />
                                            <input disabled className="caixa-texto_4 caixa_style" type="text" placeholder="Sobre o colaborador"
                                                name="sobreColab"
                                                value={this.state.putUsuario.sobreColab}
                                                onChange={this.putSetStateUsuario}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </form>

                            <span className="d_text">Endereço</span>
                            <div className="linha_perfil_colab"></div>


                            {/* ENDEREÇO */}


                            <form>
                                <div className="c_disp_flex">
                                    <div className="caixa_cad_direita">
                                        <label aria-label="logradouro_prod_lbl">Logradouro:</label>
                                        <br />
                                        <input className="caixa-texto_1 caixa_style" type="text" placeholder="Avenida..."
                                            name="endereco1"
                                            value={this.state.putEndereco.endereco1}
                                            onChange={this.putSetStateEndereco}
                                        />

                                        <div className="c_disp_flex">
                                            <div className="caixa_input_3">
                                                <label aria-label="cidade_prod_lbl">Cidade</label>
                                                <br />
                                                <input className="caixa-texto_5 caixa_style" type="text" placeholder="São Paulo"
                                                    name="cidade"
                                                    value={this.state.putEndereco.cidade}
                                                    onChange={this.putSetStateEndereco}
                                                />
                                            </div>
                                            <div className="caixa_input_3">
                                                <label aria-label="bairro_prod_lbl">Bairro</label>
                                                <br />
                                                <input className="caixa-texto_5 caixa_style" type="text" placeholder="Jardins"
                                                    name="bairro"
                                                    value={this.state.putEndereco.bairro}
                                                    onChange={this.putSetStateEndereco}
                                                />
                                            </div>
                                            <div className="caixa_input_3">
                                                <label aria-label="estado_prod_lbl">Estado</label>
                                                <br />
                                                <select className="caixa-texto_5 caixa_style"
                                                    name="estado"
                                                    value={this.state.putEndereco.estado}
                                                    onChange={this.putSetStateEndereco}
                                                >
                                                    <option value="disponibilidade_nao">SP</option>
                                                    <option value="disponibilidade_sim">RJ</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="caixa_input_3">
                                        <label aria-label="numero_prod_lbl">Número</label>
                                        <br />
                                        <input className="caixa-texto_6 caixa_style" type="text" placeholder="00"
                                            name="numero"
                                            value={this.state.putEndereco.numero}
                                            onChange={this.putSetStateEndereco}
                                        />
                                        <br />
                                        <label aria-label="cep_prod_lbl">CEP</label>
                                        <br />
                                        <input className="caixa-texto_6 caixa_style" type="text" placeholder="xxxxx-xxx"
                                            name="cep"
                                            value={this.state.putEndereco.cep}
                                            onChange={this.putSetStateEndereco}
                                        />
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