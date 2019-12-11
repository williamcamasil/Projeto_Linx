import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import mais from '../../assets/img/mais.png'
import api from '../../services/api'
import { parseJwt } from "../../services/auth"

class CadastroReceita extends Component {
    constructor() {
        super();
        this.state = {
            listaCadReceitas: [],
            file: null,

            put_post_Receita: {
                nomeReceita: "",
                descricaoPreparo: "",
                descricaoIngrediente: "",
                imgReceita: React.createRef(),
                idUsuario: parseJwt().Id,
            },
            idReceitaAlterada: 0
        }
    }

    //Mostrar Imagem
    imgSetState = (i) =>{
        this.setState({
            file : URL.createObjectURL(i.target.files[0])
        })
    }

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
        this.state.idReceitaAlterada = id;
        api.get('/Receita/' + id)
        .then(response => {
            if (response.status === 200) {
                this.setState({ put_post_Receita: response.data }, () => console.log("Objeto a ser atualizado:", this.state.put_post_Receita))
            }
        })
    }

    //GET -  Receitas
    getCadReceita = () => {
        api.get('/Receita')
        .then(response => {
            if (response.status === 200) {
                this.setState({ listaCadReceitas: response.data })
            }
        })
    }

    //Mostrar Imagem
    imgSetState = (i) => {
        if (this.state.idReceitaAlterada !== 0) {
            //PUT
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

    //POST & PUT
    post_put_CadReceita = (event) => {
        event.preventDefault();
        if (this.state.idReceitaAlterada !== 0) {
            //PUT 
            let receita = new FormData();
            receita.set('idReceita', this.state.put_post_Receita.idReceita);
            receita.set('nomeReceita', this.state.put_post_Receita.nomeReceita);
            receita.set('descricaoPreparo', this.state.put_post_Receita.descricaoPreparo);
            receita.set('descricaoIngrediente', this.state.put_post_Receita.descricaoIngrediente);
            receita.set('imgReceita', this.state.put_post_Receita.imgReceita.current.files[0], this.state.put_post_Receita.imgReceita.value);
            receita.set('idUsuario', this.state.put_post_Receita.idUsuario);

            fetch("http://localhost:5000/api/Receita/" + this.state.put_post_Receita.idReceita, {
                method: "PUT",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
                },
                body: receita
            })
            .catch(error => console.log(error))

            setTimeout(() => {
                this.getCadReceita();
                this.limparCampos();
            }, 1000);

            this.state.idReceitaAlterada = 0;
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
                console.log(response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))

            setTimeout(() => {
                this.getCadReceita();
                this.limparCampos();
            }, 1000);
        }
    };

    //DELETE - Deletar categoria
    deleteCadReceita = (id) => {
        fetch("https://localhost:5001/api/Receita/" + id, {
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


        setTimeout(() => {
            this.getCadReceita();
            this.limparCampos();
        }, 1000);
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
                                    <div id="caixa_parte_conteudo">
                                        <form className="form_caixa" onSubmit={this.post_put_CadReceita}>
                                            {/* IMAGEM */}
                                            <div id="caixa_parte_imagem">

                                                {this.state.idReceitaAlterada !== 0 ? (
                                                    // PUT
                                                    <>
                                                        <input
                                                            type="file"
                                                            placeholder="Coloque uma foto sua"
                                                            aria-label="Coloque uma foto sua"
                                                            name="imgReceita"
                                                            onChange={this.imgSetState}
                                                            ref={this.state.put_post_Receita.imgReceita}
                                                        />
                                                        <img src={"http://localhost:5000/" + this.state.put_post_Receita.imgReceita} />
                                                    </>
                                                ) : (
                                                        //POST
                                                        <input
                                                            type="file"
                                                            placeholder="Coloque uma foto sua"
                                                            aria-label="Coloque uma foto sua"
                                                            name="imgReceita"
                                                            onChange={this.imgSetState}
                                                            ref={this.state.put_post_Receita.imgReceita}
                                                        />
                                                    )
                                                }

                                                <img className="img_cad_receita" src={this.state.file} alt="imagem ilustrativa de comida" />
                                            </div>

                                            {/* NOME */}
                                            <div className="padronizar_campo2">
                                                <label htmlFor="nome_lbl" aria-label="nome_lbl"> Nome</label>
                                                <input className="caixa_texto_componente" type="nome_receita"
                                                    placeholder="Digite o nome da receita" name="nomeReceita" id="nome_receita"
                                                    value={this.state.put_post_Receita.nomeReceita}
                                                    onChange={this.postSetState} />
                                            </div>

                                            <div className="caixa_texto">
                                                {/* INGREDIENTES */}
                                                <div className="caixa_texto_sub">
                                                    <label htmlFor="ingrediente_lbl" aria-label="ingrediente_lbl"> Ingredientes</label><br />
                                                    <input className="caixa_texto_componente_bt" type="ingrediente_receita"
                                                        placeholder="Digite os ingredientes" name="descricaoIngrediente" id="ingrediente_receita"
                                                        value={this.state.put_post_Receita.descricaoIngrediente}
                                                        onChange={this.postSetState} />
                                                </div>

                                                {/* PREPARO */}
                                                <div className="caixa_texto_sub">
                                                    <label htmlFor="modo_lbl" aria-label="modo_lbl"> Modo de Preparo</label><br />
                                                    <input className="caixa_texto_componente_bt" type="modo_receita"
                                                        placeholder="Digite o modo de preparo" name="descricaoPreparo" id="modoReceita"
                                                        value={this.state.put_post_Receita.descricaoPreparo}
                                                        onChange={this.postSetState} />
                                                </div>
                                            </div>

                                            <div className="caixa_texto_botoes">
                                                <button className="botao" type="submit" name="Salvar">Salvar</button>
                                                <button className="botao" type="button" name="Editar_Card" onClick={e => this.deleteCadReceita(this.state.put_post_Receita.idReceita)}>Excluir</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>

                            <div className="linha"></div>
                            <div className="tit_receita">
                                <span>RECEITAS CADASTRADAS</span>
                            </div>

                            <div className="card_">
                                {
                                    this.state.listaCadReceitas.map(function (receita) {
                                        return (
                                            <>
                                                    <div className="card_branco card">
                                                        <img src={"http://localhost:5000/" + receita.imgReceita} alt="imagem ilustrativa de comida" />
                                                        <p>{receita.nomeReceita}</p>
                                                        <p>Ingredientes</p>
                                                        <p>Modo de Preparo</p>
                                                        <button className="botao" type="button" name="Editar_Card" onClick={e => this.getInputReceita(receita.idReceita)}>Editar</button>
                                                    </div>
                                            </>
                                        );
                                    }.bind(this))
                                }
                            </div>

                            <div className="mais">
                                <a href="/#" title="Ver mais receitas">
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