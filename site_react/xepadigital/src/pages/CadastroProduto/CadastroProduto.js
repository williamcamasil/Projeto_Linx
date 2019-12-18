import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import api from '../../services/api'
import { parseJwt } from "../../services/auth"
import mais from '../../assets/img/mais.png'
import ScrollTop from '../../componentes/ScrollTop/ScrollTop';
import IconButton from '@material-ui/core/IconButton';
import ImageSearchIcon from '@material-ui/icons/ImageSearch';
import { MDBAlert } from "mdbreact";
import imgdefault from '../../assets/img/imagedefault.png'

class CadastroProduto extends Component {
    constructor() {
        super();
        this.state = {
            listaCadProdutos: [],
            file: null,
            imagePreviewUrl: '',
            put_post_Produto: {
                nomeProduto: "",
                descricaoProduto: "",
                disponibilidade: "",
                organico: false,
                preco: 0,
                validade: "",
                imgProduto: React.createRef(),
                idUsuario: parseJwt().Id,
            },
            idProdutoAlterada: 0,
            more: 4,
            erroMsg: "",
            successMsg: ""
        }
    }
    //#region
    //#region Setstate
    postSetState = (input) => {
        this.setState({
            put_post_Produto: {
                ...this.state.put_post_Produto,
                [input.target.name]: input.target.value
            }
        })
    }

    componentDidMount() {
        this.getCadProduto();
    }
    //#endregion

    //#region GET
    //GET - Inserir nos Inputs
    getInputProduto = (id) => {
        this.setState({ idProdutoAlterada: id });
        api.get('/Produto/' + id)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ put_post_Produto: response.data })
                }
            })
    }

    getCadProduto = () => {
        fetch('http://localhost:5000/api/RegistroProduto/' + parseJwt().Id)
            .then(response => response.json())
            .then(response => {
                var redux = response.slice(0, this.state.more)

                this.setState({ listaCadProdutos: redux })
            })
    }

    incrementarMais = () => {
        this.setState({ more: this.state.more + 4 });
        console.log('Mostrar: ', this.state.more) //this.state.more)  
        this.getCadProduto();
    }

    //#endregion

    //Mostrar Imagem
    imgSetState = (i) => {
        if (this.state.idProdutoAlterada !== 0) {
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
                put_post_Produto: {
                    ...this.state.put_post_Produto, [i.target.name]: i.target.files[0]
                }
            })
        } else {
            // POST
            this.setState({
                file: URL.createObjectURL(i.target.files[0])
            })
        }
    }

    //POST & PUT
    put_post_CadProduto = (event) => {
        event.preventDefault();
        this.setState({ erroMsg: "" })
        this.setState({ successMsg: "" })
        if (this.state.idProdutoAlterada !== 0) {
            //PUT
            let produto = new FormData();

            if (this.state.put_post_Produto.imgProduto.current !== undefined) {
                // Seta a nova imagem.
                produto.set('imgProduto', this.state.put_post_Produto.imgProduto.current.files[0], this.state.put_post_Produto.imgProduto.value);
            }
            produto.set('idProduto', this.state.put_post_Produto.idProduto);
            produto.set('nomeProduto', this.state.put_post_Produto.nomeProduto);
            produto.set('descricaoProduto', this.state.put_post_Produto.descricaoProduto);
            produto.set('disponibilidade', this.state.put_post_Produto.disponibilidade);
            produto.set('organico', this.state.put_post_Produto.organico);
            produto.set('preco', this.state.put_post_Produto.preco);
            produto.set('validade', this.state.put_post_Produto.validade);
            produto.set('idUsuario', this.state.put_post_Produto.idUsuario);

            fetch("http://localhost:5000/api/Produto/" + this.state.put_post_Produto.idProduto, {
                method: "PUT",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
                },
                body: produto
            })
                .then(response => {
                    this.setState({ successMsg: "Informação alterada com sucesso!" });
                })
                .catch(error => {
                    console.log(error);
                    this.setState({ erroMsg: "Não foi possível fazer a modificar" });
                })

            setTimeout(() => {
                this.getCadProduto();
                window.location.reload();
                this.limparCampos();
            }, 1000);

            setTimeout(() => {
                this.setState({ successMsg: "" });
                this.setState({ erroMsg: "" });
            }, 3500);

            this.setState({ idProdutoAlterada: 0 });
        } else {
            //POST
            let produto = new FormData();
            produto.set('nomeProduto', this.state.put_post_Produto.nomeProduto);
            produto.set('descricaoProduto', this.state.put_post_Produto.descricaoProduto);
            produto.set('disponibilidade', this.state.put_post_Produto.disponibilidade);
            produto.set('organico', this.state.put_post_Produto.organico);
            produto.set('preco', this.state.put_post_Produto.preco);
            produto.set('validade', this.state.put_post_Produto.validade);
            produto.set('imgProduto', this.state.put_post_Produto.imgProduto.current.files[0]);

            produto.set('idUsuario', this.state.put_post_Produto.idUsuario);

            fetch("http://localhost:5000/api/Produto", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
                },
                body: produto
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
                this.getCadProduto();
                window.location.reload();
                this.limparCampos();
            }, 1500);

            setTimeout(() => {
                this.setState({ successMsg: "" });
                this.setState({ erroMsg: "" });
            }, 1500);
        }
    };

    //DELETE - Deletar categoria
    deleteCadProduto = (id) => {
        this.setState({ erroMsg: "" })
        this.setState({ successMsg: "" })
        fetch("http://localhost:5000/api/Produto/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
            }
        })
            .then(response => response.json())
            .then(response => {
                this.setState({ successMsg: "Informação deletada com sucesso!" });
                this.getCadProduto();
                this.setState(() => ({ lista: this.state.listaCadProdutos }))
            })
            .catch(error => {
                console.log(error);
                this.setState({ erroMsg: "Não foi possível deletar" });
            })


        setTimeout(() => {
            this.getCadProduto();
            this.limparCampos();
        }, 1000);

        setTimeout(() => {
            this.setState({ successMsg: "" });
            this.setState({ erroMsg: "" });
        }, 3500);
    }

    limparCampos = () => {
        this.setState({
            put_post_Produto: {
                nomeProduto: "",
                descricaoProduto: "",
                disponibilidade: "",
                organico: false,
                preco: 0,
                validade: "",
                imgProduto: React.createRef(),
                idUsuario: parseJwt().Id,
            }
        })
    }
    //#endregion

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} alt=""/>);
        }
        return (
            <div>
                <Header />
                <ScrollTop />
                <main>
                    <section className="card card_size_cad">
                        <div className="container">

                            <h1 className="c_text_prod">PRODUTOS</h1>

                            <span className="d_text_prod">Cadastro</span>
                            <div className="linha_perfil_colab_prod"></div>

                            <form onSubmit={this.put_post_CadProduto}>
                                <div className="c_disp_flex_prod">
                                    <div className="caixa_cad_esquerda_prod">

                                        {/* IMG */}
                                        <div className="caixa_cad_img_prod">

                                            {
                                                // modificação para funcionar os states das trocas de imagem sem exibição de erros
                                                this.state.idProdutoAlterada !== 0 ?
                                                    <>
                                                        {
                                                            this.state.put_post_Produto.imgProduto.current !== undefined ?
                                                                <>{$imagePreview}</>
                                                                :
                                                                <img className="c_coll_rev" src={"http://localhost:5000/" + this.state.put_post_Produto.imgProduto} alt="" />
                                                        }
                                                    </>
                                                    :
                                                    this.state.file === null && this.state.put_post_Produto.imgProduto.current !== undefined ?
                                                        <><img src={imgdefault} alt=""/></>
                                                        :
                                                        <>
                                                            {
                                                                this.state.idProdutoAlterada !== 0 ?
                                                                    <></>
                                                                    :
                                                                    <img alt="imagem ilustra de comida" src={this.state.file} alt=""/>
                                                            }
                                                        </>
                                            }

                                        </div>
                                        <br />

                                        {/* IMG input*/}
                                        <div>
                                            {
                                                this.state.idProdutoAlterada !== 0 ?
                                                    (
                                                        // PUT
                                                        <label htmlFor="icon-button-file">
                                                            <IconButton color="primary" aria-label="upload picture" component="span">
                                                                <input
                                                                    hidden
                                                                    id="icon-button-file"
                                                                    accept="image/*"
                                                                    type="file"
                                                                    name="imgProduto"
                                                                    onChange={this.imgSetState}
                                                                    ref={this.state.put_post_Produto.imgProduto}
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
                                                                    name="imgProduto"
                                                                    onChange={this.imgSetState}
                                                                    ref={this.state.put_post_Produto.imgProduto}
                                                                /><ImageSearchIcon color="action" fontSize="large" />
                                                            </IconButton>
                                                        </label>
                                                    )
                                            }
                                        </div>

                                    </div>
                                    <div>
                                        <div className="caixa_cad_direita_prod">
                                            {/* <!-- NOME PRODUTO --> */}
                                            <label className="textoCampoSub" aria-label="nome_prod_lbl">Nome:</label>
                                            <br />
                                            <input className="caixa-texto_1_prod caixa_style_prod textoCampoSub" type="text"
                                                placeholder="Digite o nome do produto"
                                                name="nomeProduto"
                                                value={this.state.put_post_Produto.nomeProduto}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                        <div className="caixa_cad_direita_prod c_disp_wrap_prod">
                                            {/* <!-- PREÇO --> */}
                                            <div className="caixa_input_2_prod">
                                                <label className="textoCampoSub" aria-label="preco_lbl">Preço:</label>
                                                <br />
                                                <input className="caixa-texto_2_prod caixa_style_prod textoCampoSub" type="text"
                                                    placeholder="Digite o preço"
                                                    name="preco"
                                                    value={this.state.put_post_Produto.preco}
                                                    onChange={this.postSetState}
                                                />
                                            </div>
                                            <div className="caixa_input_2_prod">
                                                {/* <!-- DISPONIBILIDADE --> */}
                                                <label className="textoCampoSub" aria-label="disponibilidade_lbl">Disponibilidade:</label>
                                                <br />
                                                <input className="caixa-texto_2_prod caixa_style_prod textoCampoSub" type="number"
                                                    placeholder="Quantidade em Kg"
                                                    name="disponibilidade"
                                                    value={this.state.put_post_Produto.disponibilidade}
                                                    onChange={this.postSetState}
                                                />
                                            </div>
                                            <div className="caixa_input_2_prod">
                                                {/* <!-- DATA DE VALIDADE --> */}
                                                <label className="textoCampoSub" aria-label="data_lbl">Data de Validade:</label>
                                                <br />
                                                <input className="caixa-texto_2_prod caixa_style_prod textoCampoSub" type="date"
                                                    placeholder="Digite a data de validade"
                                                    name="validade"
                                                    value={this.state.put_post_Produto.validade}
                                                    onChange={this.postSetState}
                                                />
                                            </div>
                                            <div className="caixa_input_2_prod">
                                                {/* <!-- notificacao --> */}
                                                <label className="textoCampoSub" aria-label="organico_lbl">Este produto é orgânico?</label>
                                                <br />
                                                <select className="caixa-texto_3_prod style_selec_prod caixa_style_prod textoCampoSub"
                                                    name="organico"
                                                    value={this.state.put_post_Produto.organico}
                                                    onChange={this.postSetState}
                                                >

                                                    <option value="true">Sim</option>
                                                    <option value="false">Não</option>

                                                </select>
                                            </div>
                                        </div>
                                        <div className="caixa_cad_direita_prod">
                                            <label className="textoCampoSub" aria-label="detalhe_lbl">Detalhes:</label>
                                            <br />
                                            <textarea className="caixa-texto_4_prod caixa_style_2_prod textoCampoSub" type="text"
                                                placeholder="Digite os detalhes desse produto"
                                                name="descricaoProduto"
                                                value={this.state.put_post_Produto.descricaoProduto}
                                                onChange={this.postSetState}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="c_disp_just_prod">
                                    <div className="caixa_input_33_prod">

                                        <button className="botao" type="button" name="Excluir" onClick={e => this.deleteCadProduto(this.state.put_post_Produto.idProduto)}>Excluir</button>

                                    </div>
                                    <div className="caixa_input_33_prod">

                                        <button className="botao" type="submit" name="Salvar">Salvar</button>

                                    </div>
                                </div>
                            </form>
                            
                            <div className="tit_receita">
                                <div className="Mensagens">
                                    {
                                        this.state.erroMsg &&
                                        <MDBAlert className="text-center" color="danger" >
                                            {this.state.erroMsg && <div className="erroMensagem">{this.state.erroMsg}</div>}
                                        </MDBAlert>
                                    }

                                    {
                                        this.state.successMsg &&
                                        <MDBAlert className="text-center" color="success" >
                                            {this.state.successMsg && <div className="certoMensagem">{this.state.successMsg}</div>}
                                        </MDBAlert>
                                    }
                                </div>
                            </div>

                            <span className="d_text">Produtos cadastrados</span>
                            <div className="linha_perfil_colab"></div>


                            <div className="card_size_of">
                                {
                                    this.state.listaCadProdutos.map(function (produto) {
                                        return (

                                            <div className="card_prod_of card">
                                                <>
                                                    <div className="caixa_img_of">
                                                        <img src={"http://localhost:5000/" + produto.idProdutoNavigation.imgProduto} alt="imagem ilustrativa de comida" />
                                                    </div>
                                                    <div className="caixa_of">
                                                        <p><strong className="textoCampoSub">{produto.idProdutoNavigation.nomeProduto}</strong></p>
                                                        <p className="textoCampoSub">{(produto.idProdutoNavigation.organico === true) ? 'Produto Orgânico' : 'Produto não Orgânico'}</p>
                                                        <p className="textoCampoSub">{produto.idProdutoNavigation.disponibilidade} Kg</p>
                                                    </div>
                                                    <div className="but_prod_of">
                                                        <button className="botao" type="button" name="Editar_Card" onClick={e => this.getInputProduto(produto.idProdutoNavigation.idProduto)}>Editar</button>
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
            </div>
        )
    }
}

export default CadastroProduto;
