import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import mais from '../../assets/img/mais.png'
import api from '../../services/api'
import { parseJwt } from "../../services/auth"
import ScrollTop from '../../componentes/ScrollTop/ScrollTop';

import IconButton from '@material-ui/core/IconButton';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { MDBAlert } from "mdbreact";

import imgdefault from '../../assets/img/imagedefault.png'


class CadastroReceita extends Component {
    constructor() {
        super();
        this.state = {
            listaCadReceitas: [],
            file: null,
            imagePreviewUrl: '',

            put_post_Receita: {
                nomeReceita: "",
                descricaoPreparo: "",
                descricaoIngrediente: "",
                imgReceita: React.createRef(),
                idUsuario: parseJwt().Id,
            },
            idReceitaAlterada: 0,
            more: 4,
            erroMsg: "",
            successMsg: ""
        }
    }

    // #region
    postSetState = (input) => {
        this.setState({
            put_post_Receita: {
                ...this.state.put_post_Receita, [input.target.name]: input.target.value
            }
        })
    }

    componentDidMount() {
        this.getCadReceita();
    }

    //GET - Inserir nos Inputs
    getInputReceita = (id) => {
        this.setState({ idReceitaAlterada: id });
        api.get('/Receita/' + id)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ put_post_Receita: response.data }, () => console.log("Objeto a ser atualizado:", this.state.put_post_Receita))
                }
            })
    }

    getCadReceita = () => {
        fetch('http://localhost:5000/api/Receita/Usuario/' + parseJwt().Id)
            .then(response => response.json())
            .then(response => {
                // if(response.status === 200 || response.status === 204){
                // console.log(response.status)
                var redux = response.slice(0, this.state.more)

                this.setState({ listaCadReceitas: redux })
                // }
            })
    }

    //Mostrar Imagem
    imgSetState = (i) => {
        if (this.state.idReceitaAlterada !== 0) {
            //PUT
            let reader = new FileReader();
            let file = i.target.files[0];

            reader.onloadend = () => {
                this.setState({
                    file: file,
                    imagePreviewUrl: reader.result
                });
            }
            reader.readAsDataURL(file)

            this.setState({
                put_post_Receita: {
                    ...this.state.put_post_Receita, [i.target.name]: i.target.files[0]
                }
            })
        } else {
            // POST
            this.setState({
                file: URL.createObjectURL(i.target.files[0])
            })
        }
    }

    incrementarMais = () => {
        this.setState({ more: this.state.more + 4 });
        console.log('Mostrar: ', this.state.more) //this.state.more)  
        this.getCadReceita();
    }

    //POST & PUT
    put_post_CadReceita = (event) => {
        event.preventDefault();
        this.setState({ erroMsg: "" })
        this.setState({ successMsg: "" })

        if (this.state.idReceitaAlterada !== 0) {
            //PUT 
            let receita = new FormData();

            if (this.state.put_post_Receita.imgReceita.current !== undefined) {
                // Seta a nova imagem.
                receita.set('imgReceita', this.state.put_post_Receita.imgReceita.current.files[0], this.state.put_post_Receita.imgReceita.value);
            }
            receita.set('idReceita', this.state.put_post_Receita.idReceita);
            receita.set('nomeReceita', this.state.put_post_Receita.nomeReceita);
            receita.set('descricaoPreparo', this.state.put_post_Receita.descricaoPreparo);
            receita.set('descricaoIngrediente', this.state.put_post_Receita.descricaoIngrediente);
            receita.set('idUsuario', this.state.put_post_Receita.idUsuario);

            fetch("http://localhost:5000/api/Receita/" + this.state.put_post_Receita.idReceita, {
                method: "PUT",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
                },
                body: receita
            })
                .then(response => {
                    this.setState({ successMsg: "Informação alterada com sucesso!" });
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ erroMsg: "Não foi possível fazer a modificação" });
                })

            setTimeout(() => {
                this.getCadReceita();
                window.location.reload();
                this.limparCampos();
            }, 1500);

            setTimeout(() => {
                this.setState({ successMsg: "" });
                this.setState({ erroMsg: "" });
            }, 1500);

            this.setState({ idReceitaAlterada: 0 });
        } else {
            //POST - Padrão
            let receita = new FormData();
            receita.set('nomeReceita', this.state.put_post_Receita.nomeReceita);
            receita.set('descricaoPreparo', this.state.put_post_Receita.descricaoPreparo);
            receita.set('descricaoIngrediente', this.state.put_post_Receita.descricaoIngrediente);
            receita.set('imgReceita', this.state.put_post_Receita.imgReceita.current.files[0]);
            receita.set('idUsuario', this.state.put_post_Receita.idUsuario);

            fetch("http://localhost:5000/api/Receita", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
                },
                body: receita
            })
                .then(response => response.json())
                .then(response => {
                    this.setState({ successMsg: "Conteúdo salvo com sucesso!" });
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ erroMsg: "Não foi possível salvar" });
                })

            setTimeout(() => {
                this.getCadReceita();
                window.location.reload();
                this.limparCampos();
            }, 1000);

            setTimeout(() => {
                this.setState({ successMsg: "" });
                this.setState({ erroMsg: "" });
            }, 3500);
        }
    };

    //DELETE - Deletar categoria
    deleteCadReceita = (id) => {
        this.setState({ erroMsg: "" })
        this.setState({ successMsg: "" })

        fetch("http://localhost:5000/api/Receita/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
            }
        })

            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.getCadReceita();
                this.setState(() => ({ lista: this.state.listaCadReceitas }))
            })
            .then(response => {
                this.setState({ successMsg: "Informação deletada com sucesso!" });
            })
            .catch(error => {
                console.log(error);
                this.setState({ erroMsg: "Não foi possível deletar" });
            })


        setTimeout(() => {
            this.getCadReceita();
            this.limparCampos();
        }, 1000);

        setTimeout(() => {
            this.setState({ successMsg: "" });
            this.setState({ erroMsg: "" });
        }, 3500);
    }

    limparCampos = () => {
        this.setState({
            put_post_Receita: {
                nomeReceita: "",
                descricaoPreparo: "",
                descricaoIngrediente: "",
                imgReceita: React.createRef(),
                idUsuario: parseJwt().Id,
            }
        })
    }
    //#endregion


    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt="" />);
        }
        return (
            <>
                <Header />
                <ScrollTop />
                <main>
                    <section className="card card_size_cad">
                        <div className="container">

                            <h1 className="c_text_prod">RECEITAS</h1>

                            <span className="d_text_prod">Cadastro</span>
                            <div className="linha_perfil_colab_prod"></div>

                            <form onSubmit={this.put_post_CadReceita}>
                                <div className="c_disp_flex_prod">
                                    <div className="caixa_cad_esquerda_prod">

                                        {/* IMG */}
                                        <div className="caixa_cad_img_prod">
                                            {
                                                // modificação para funcionar os states das trocas de imagem sem exibição de erros
                                                this.state.idReceitaAlterada !== 0 ?
                                                    <>
                                                        {
                                                            this.state.put_post_Receita.imgReceita.current !== undefined ?
                                                                <>{$imagePreview}</>
                                                                :
                                                                <img src={"http://localhost:5000/" + this.state.put_post_Receita.imgReceita} alt="imagem ilustrativa de comida" />
                                                        }
                                                    </>
                                                    :
                                                    this.state.file === null && this.state.put_post_Receita.imgReceita.current !== undefined ?
                                                        <><img src={imgdefault} /></>
                                                        :
                                                        <>
                                                            {
                                                                this.state.idReceitaAlterada !== 0 ?
                                                                    <></>
                                                                    :
                                                                    <img className="img_cad_receita" src={this.state.file} alt="" />
                                                            }
                                                        </>
                                            }
                                        </div>
                                        <br />

                                        <div>
                                            {
                                                this.state.idReceitaAlterada !== 0 ?
                                                    (
                                                        // PUT
                                                        <label htmlFor="icon-button-file">
                                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                                <input
                                                                    hidden
                                                                    id="icon-button-file"
                                                                    accept="image/*"

                                                                    type="file"
                                                                    name="imgReceita"
                                                                    onChange={this.imgSetState}
                                                                    ref={this.state.put_post_Receita.imgReceita}
                                                                /><ImageSearchIcon color="action" fontSize="large" />
                                                            </IconButton>
                                                        </label>
                                                    ) : (
                                                        //POST
                                                        <label htmlFor="icon-button-file">
                                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                                <input
                                                                    hidden
                                                                    id="icon-button-file"
                                                                    accept="image/*"
                                                                    type="file"
                                                                    name="imgReceita"
                                                                    onChange={this.imgSetState}
                                                                    ref={this.state.put_post_Receita.imgReceita}
                                                                /><ImageSearchIcon color="action" fontSize="large" />
                                                            </IconButton>
                                                        </label>
                                                    )
                                            }
                                        </div>
                                    </div>
                                    <div>
                                        <div className="caixa_cad_direita_prod">
                                            {/* <!-- NOME RECEITA --> */}
                                            <label aria-label="nome_lbl">Nome:</label>
                                            <br />
                                            <input className="caixa-texto_1_prod caixa_style_prod" type="text"
                                                placeholder="Digite o nome da receita"
                                                name="nomeReceita"
                                                value={this.state.put_post_Receita.nomeReceita}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                        <div className="caixa_cad_direita_prod">
                                            {/* INGREDIENTES */}
                                            <label aria-label="ingrediente_lbl">Ingredientes:</label>
                                            <br />
                                            <textarea className="caixa-texto_4_prod caixa_style_2_prod" type="text"
                                                placeholder="Digite os ingredientes dessa receita"
                                                name="descricaoIngrediente"
                                                value={this.state.put_post_Receita.descricaoIngrediente}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                        <div className="caixa_cad_direita_prod">
                                            {/* PREPARO */}
                                            <label aria-label="modo_lbl">Modo de preparo:</label>
                                            <br />
                                            <textarea className="caixa-texto_4_prod caixa_style_2_prod" type="text"
                                                placeholder="Digite o modo de preparo dessa receita"
                                                name="descricaoPreparo"
                                                value={this.state.put_post_Receita.descricaoPreparo}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="c_disp_just_prod">
                                    <div className="caixa_input_33_prod">

                                        <button className="botao" type="button" name="Excluir" onClick={e => this.deleteCadProduto(this.state.put_post_Receita.idReceita)}>Excluir</button>

                                    </div>
                                    <div className="caixa_input_33_prod">

                                        <button className="botao" type="submit" name="Salvar">Salvar</button>

                                    </div>
                                </div>
                            </form>

                            <div className="Mensagens">
                                {
                                    this.state.erroMsg &&
                                    <MDBAlert className="text-center" color="danger" >
                                        {this.state.erroMsg}
                                        {this.state.erroMsg && <div className="erroMensagem">{this.state.erroMsg}</div>}
                                    </MDBAlert>
                                }

                                {
                                    this.state.successMsg &&
                                    <MDBAlert className="text-center" color="success" >
                                        {this.state.successMsg}
                                        {this.state.successMsg && <div className="certoMensagem">{this.state.successMsg}</div>}
                                    </MDBAlert>
                                }
                            </div>

                            <span className="d_text">Receitas cadastradas</span>
                            <div className="linha_perfil_colab"></div>

                            <div className="card_size_of">
                                {
                                    this.state.listaCadReceitas.map(function (receita) {
                                        return (

                                            <div className="card_prod_of card">
                                                <>
                                                    <div className="caixa_img_of">
                                                        <img src={"http://localhost:5000/" + receita.imgReceita} alt="imagem ilustrativa de comida" />
                                                    </div>
                                                    <div className="caixa_of">
                                                        <p>{receita.nomeReceita}</p>
                                                        <textarea className="text_inv" readOnly>{receita.descricaoIngrediente}</textarea>
                                                        <textarea className="text_inv" readOnly>{receita.descricaoPreparo}</textarea>
                                                    </div>
                                                    <div className="but_prod_of">
                                                        <button className="botao" type="button" name="Editar_Card" onClick={e => this.getInputReceita(receita.idReceita)}>Editar</button>
                                                    </div>
                                                </>
                                            </div>

                                        );
                                    }
                                        .bind(this)
                                    )
                                }
                            </div>

                            <div className="mais">
                                <button className="limparBotao" onClick={() => { this.incrementarMais() }} title="Ver mais receitas">
                                    <img src={mais} alt="Ícone de adição, representando ver mais." /></button>
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