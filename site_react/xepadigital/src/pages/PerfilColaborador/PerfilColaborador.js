import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import { parseJwt } from '../../services/auth';
import api, { apiForm } from '../../services/api';

import IconButton from '@material-ui/core/IconButton';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';


// npm install @material-ui/core
// npm install @material-ui/icons


class PerfilColaborador extends Component {
    constructor() {
        super();
        this.state = {
            // usuarioPorId: [],
            // enderecoPorId: [],

            usuarioCadastrado: {},
            putUsuario: {
                idUsuario: parseJwt().Id,
                imgPerfil: React.createRef(),
                nomeUsuario: "",
                emailUsuario: "",
                telefone1: "",
                telefone2: "",
                documento: "",
                receberNotif: "",

                //uso exclusivo de colaborador
                razaoSocial: "",
                fazEntrega: "",
                sobreColab: "",

                //tenho que declarar mais não estou utilizando
                senhaUsuario: "",
                tipoUsuario: "",
            },

            putEndereco: {
                idEndereco: "",
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

    //#region COMPONENT's
    componentDidMount() {
        console.log("Carregado")
        this.getUsuarioId();
        this.getEnderecoId();
    }
    //#endregion

    //#region GET's
    getUsuarioId = () => {
        let idUser = this.state.putUsuario.idUsuario;
        console.log("idUser: ", idUser);

        api.get("/Usuario/" + idUser)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ putUsuario: response.data })
                    this.setState({ usuarioCadastrado: response.data })
                }
                console.log("respUser: ", this.state.putUsuario)
            })
            .catch(error => {
                console.log("error: ", error)
                window.location.reload();
            })
    }

    getEnderecoId = () => {
        let idEnd = this.state.putEndereco.idUsuario;

        console.log("idEnd: ", idEnd);

        api.get("/Endereco/" + idEnd)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ putEndereco: response.data })
                }
                console.log("respEnd: ", this.state.putEndereco)
            })
            .catch(error => {
                console.log("error: ", error)
                window.location.reload();
            })
    }
    //#endregion

    //#region SET STATE's
    putSetStateUsuario = (input) => {
        this.setState({
            putUsuario: {
                ...this.state.putUsuario, [input.target.name]: input.target.value
            }
        })
        setTimeout(() => {
            console.log("SetStateUser: ", this.state.putUsuario)
        }, 500);
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

    putSetStateImg = (input) => {
        this.setState({
            putUsuario: {
                ...this.state.putUsuario, [input.target.name]: input.target.files[0]
            }
        })
    }
    //#endregion

    //#region PUT's
    putAltUsuario = (e) => {
        e.preventDefault();
        let idUser = this.state.putUsuario.idUsuario;

        let usuarioForm = new FormData();

        if (this.state.putUsuario.imgPerfil.current !== undefined) {
            // Seta a nova imagem.
            usuarioForm.set('imgPerfil', this.state.putUsuario.imgPerfil.current.files[0], this.state.putUsuario.imgPerfil.value);
        }

        usuarioForm.set('idUsuario', this.state.putUsuario.idUsuario);
        usuarioForm.set('nomeUsuario', this.state.putUsuario.nomeUsuario);
        usuarioForm.set('emailUsuario', this.state.putUsuario.emailUsuario);
        usuarioForm.set('telefone1', this.state.putUsuario.telefone1);
        usuarioForm.set('telefone2', this.state.putUsuario.telefone2);
        usuarioForm.set('documento', this.state.putUsuario.documento);
        usuarioForm.set('receberNotif', this.state.putUsuario.receberNotif);
        usuarioForm.set('razaoSocial', this.state.putUsuario.razaoSocial);
        usuarioForm.set('fazEntrega', this.state.putUsuario.fazEntrega);
        usuarioForm.set('sobreColab', this.state.putUsuario.sobreColab);
        usuarioForm.set('senhaUsuario', this.state.putUsuario.senhaUsuario);
        usuarioForm.set('tipoUsuario', this.state.putUsuario.tipoUsuario);

        apiForm.put("/Usuario/" + idUser, usuarioForm)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                console.log("putRespUser: ", response.data);
            })
            .catch(error => console.log("error: ", error))

        setTimeout(() => {
            this.getUsuarioId();
        }, 300);
    }

    putAltEndereco = (e) => {
        e.preventDefault();
        let idEndPut = this.state.putEndereco.idEndereco;
        let endAtualizado = this.state.putEndereco;

        api.put("/Endereco/" + idEndPut, endAtualizado)
            .then(response => response.json())
            .then(response => {
                console.log(response)
                console.log("putRespEnd: ", response.data);
            })
            .catch(error => console.log("error: ", error))

        setTimeout(() => {
            this.getEnderecoId();
        }, 300);
    }
    //#endregion

    putGeral = (e) => {
        e.preventDefault();
        this.putAltUsuario(e);
        this.putAltEndereco(e);
    }



    render() {
        return (
            <div>
                <Header />
                <main>
                    <section className="card card_size_cad">
                        <div className="container">
                            <h1 className="c_text">PERFIL COLABORADOR</h1>

                            {/* <!-- form DUPLO--> */}

                            {/* <!-- USUARIO--> */}
                            <span className="d_text">Informações</span>
                            <div className="linha_perfil_colab"></div>


                            <form onSubmit={this.putGeral}>
                                <div className="c_disp_flex">
                                    <div className="caixa_cad_esquerda">
                                        <div className="caixa_cad_img">
                                            {/* <img src={profile} alt="" /> */}
                                            <img alt="Imagem de perfil do Usuário" src={"http://localhost:5000/" + this.state.putUsuario.imgPerfil} />
                                        </div>
                                        <br />

                                        {/* teste */}
                                        <label htmlFor="icon-button-file">
                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                <input
                                                    hidden
                                                    id="icon-button-file"
                                                    accept="image/*"
                                                    type="file"
                                                    name="imgPerfil"
                                                    onChange={this.putSetStateImg}
                                                    ref={this.state.putUsuario.imgPerfil}
                                                /><ImageSearchIcon color="action" fontSize="large" />
                                            </IconButton>
                                        </label>

                                        {/* </button> */}
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
                                                <select className="caixa-texto_3 style_selec caixa_style"
                                                    name="receberNotif"
                                                    value={this.state.putUsuario.receberNotif}
                                                    onChange={this.putSetStateUsuario}
                                                >

                                                    <option value="true">Sim</option>
                                                    <option value="false">Não</option>

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
                                                <select className="caixa-texto_3 style_selec caixa_style"
                                                    name="fazEntrega"
                                                    value={this.state.putUsuario.fazEntrega}
                                                    onChange={this.putSetStateUsuario}
                                                >

                                                    <option value="true">Sim</option>
                                                    <option value="false">Não</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="caixa_cad_direita">
                                            <label aria-label="sobre_lbl">Sobre</label>
                                            <br />
                                            <textarea className="caixa-texto_4 caixa_style_2" type="text" placeholder="Sobre o colaborador"
                                                name="sobreColab"
                                                value={this.state.putUsuario.sobreColab}
                                                onChange={this.putSetStateUsuario}
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Button */}
                                {/* <div className="c_disp_just">
                                    <div className="caixa_input_33">


                                        <button className="botao" type="submit" name="Editar"><a href="/ReservaColaborador">Reservas</a></button>


                                    </div>
                                    <div className="caixa_input_33">


                                        <button className="botao" type="submit" name="Salvar">Salvar</button>


                                    </div>
                                </div> */}

                                {/* </form> */}

                                {/* ENDEREÇO */}
                                <span className="d_text">Endereço</span>
                                <div className="linha_perfil_colab"></div>

                                {/* <form onSubmit={this.putAltEndereco}> */}
                                <div className="c_disp_flex">
                                    <div className="caixa_cad_direita">
                                        <label aria-label="logradouro_prod_lbl">Logradouro:</label>
                                        <br />
                                        <input className="caixa-texto_11 caixa_style" type="text" placeholder="Avenida..."
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
                                                <select className="caixa-texto_5 caixa-texto_7 style_selec caixa_style"
                                                    name="estado"
                                                    value={this.state.putEndereco.estado}
                                                    onChange={this.putSetStateEndereco}
                                                >
                                                    <option value="SP">SP</option>
                                                    <option value="RJ">RJ</option>
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

                                {/* btn */}
                                <div className="c_disp_just">
                                    <div className="caixa_input_33">


                                        <button className="botao" type="submit" name="Editar"><a href="/ReservaColaborador">Reservas</a></button>


                                    </div>
                                    <div className="caixa_input_33">


                                        <button className="botao" type="submit" name="Salvar">Salvar</button>


                                    </div>
                                </div>
                            </form>

                        </div>
                    </section>
                </main>
                <Footer />
            </div >
        );
    }
}

export default PerfilColaborador;