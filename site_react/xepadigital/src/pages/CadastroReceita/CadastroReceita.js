import React , {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import food from '../../assets/img/food_af.jpg';
// import food from 'C:/Users/fic/Pictures/imagens/morango.jpg';
import mais from '../../assets/img/mais.png'
import api from '../../services/api'
// import { Link } from "react-router-dom";
import { parseJwt } from "../../services/auth"

class CadastroReceita extends Component {
    constructor(){
        super();
        this.state = {
            listaCadReceitas : [],
            file: null,

            postReceita:{
                nomeReceita: "",
                descricaoPreparo: "",
                descricaoIngrediente: "",
                imgReceita: React.createRef(),
                idUsuario: parseJwt().Id,
            }
        }
    }

    //Mostrar Imagem
    imgSetState = (i) =>{
        this.setState({
            file : URL.createObjectURL(i.target.files[0])
        })
    }

    componentDidMount(){
        this.getCadReceita();
    }

    //GET - Inserir nos Inputs
    getInputReceita = (id) => {
        api.get('/Receita/' +  id)
            .then(response => {
            if (response.status === 200) {
                this.setState({ postReceita: response.data })
                // console.log('DEU CERTO')
            }
        })
        // setTimeout(() => {
        //     console.log('Nome receita: ', this.state.postReceita.nomeReceita)    
        // }, 1000);
        
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

    //POST - PEGAR INPUTS
    postSetState = (input) => {
        this.setState({
            postReceita: {
                ...this.state.postReceita,
                [input.target.name]: input.target.value
            }
        })

        console.log('meu state postReceita: ' , this.state.postReceita)
        console.log('meu state postReceita: ' , this.state.postReceita.imgReceita)
    }

<<<<<<< HEAD
    // POST
=======
    imgSetState = (i) => {
        this.setState({
            file: URL.createObjectURL(i.target.files[0])
        })
    }

    // POST - Cadastrar
>>>>>>> e6ea4c84028809b7f388d8b1442ff08e41658629
    postCadReceita = (event) => {
        event.preventDefault();
        console.log("Cadastrando");
        console.log("postReceita: ", this.state.postReceita);

        let receita = new FormData();

        receita.set('nomeReceita', this.state.postReceita.nomeReceita);
        receita.set('descricaoPreparo', this.state.postReceita.descricaoPreparo);
        receita.set('descricaoIngrediente', this.state.postReceita.descricaoIngrediente);
        receita.set('imgReceita', this.state.postReceita.imgReceita.current.files[0]);
        receita.set('idUsuario', this.state.postReceita.idUsuario);

        fetch("http://localhost:5000/api/Receita", {
            method: "POST",
            body: receita
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log('Não foi possível cadastrar:' + error))
    }

     //DELETE - Deletar categoria
     deleteCadReceita = (id) => {
        console.log("excluindo");

        // this.setState({ erroMsg: "" })

        fetch("http://localhost:5000/api/Receita/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.getCadReceita();
                this.setState(() => ({ lista: this.state.listaCadReceitas }))
            })

            // .catch(error => {
            //     console.log(error);
            //     this.setState({ erroMsg: "Não é possível excluir está categoria, verifique se não há eventos que a utilizem" })
            // })
    }

    //PUT
    putCadReceita = (event) => {
        //Previne que a oagina seja recarregada
        event.preventDefault();

        fetch("http://localhost:5000/api/Receita/" + this.state.postReceita.idReceita, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(this.state.postReceita)
        })

            .then(response => response.json())
            .catch(error => console.log(error))

        //Atraso na requisição, pois as requests possuem intervalos muito próximos
        setTimeout(() => {
            this.getCadReceita();
        }, 1000);
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
                                    <form className="form_caixa" onSubmit={this.putCadReceita}>
                                    {/* <form className="form_caixa" onSubmit={this.postCadReceita}> */}
                                        {/* IMAGEM */}
                                        <div id="caixa_parte_imagem">
                                            <input
                                                type="file"
                                                placeholder="Coloque uma foto sua"
                                                aria-label="Coloque uma foto sua"
                                                name="imgReceita"
<<<<<<< HEAD
                                                onChange={this.imgSetState}
                                                ref={this.state.postReceita.imgReceita}
                                            />
                                           <img className="img_cad_receita" src={this.state.file} alt="Imagem de um prato com macarrão ao molho" /> 
=======
                                                // value={this.state.postUsuario.fotoUsuario}
                                                onChange={this.imgSetState}
                                                ref={this.state.postReceita.imgReceita}
                                            />
                                            <img className="img_cad_receita" src={this.state.file} alt="imagem ilustrativa de comida" />
>>>>>>> e6ea4c84028809b7f388d8b1442ff08e41658629
                                        </div>

                                        {/* NOME */}
                                        <div className="padronizar_campo2">
                                            <label htmlFor="nome_lbl" aria-label="nome_lbl"> Nome</label>
                                            <input className="caixa_texto_componente" type="nome_receita" 
                                            placeholder="Digite o nome da receita" name="nomeReceita" id="nome_receita" 
                                            value={this.state.postReceita.nomeReceita}
                                            onChange={this.postSetState}/>  
                                        </div>

                                        <div className="caixa_texto">
                                            {/* INGREDIENTES */}
                                            <div className="caixa_texto_sub">
                                                <label htmlFor="ingrediente_lbl" aria-label="ingrediente_lbl"> Ingredientes</label><br/>
                                                <input className="caixa_texto_componente_bt" type="ingrediente_receita" 
                                                placeholder="Digite os ingredientes" name="descricaoIngrediente" id="ingrediente_receita"
                                                value={this.state.postReceita.descricaoIngrediente}
                                                onChange={this.postSetState} /> 
                                            </div>

                                            {/* PREPARO */}
                                            <div className="caixa_texto_sub">
                                                <label htmlFor="modo_lbl" aria-label="modo_lbl"> Modo de Preparo</label><br/>
                                                <input className="caixa_texto_componente_bt" type="modo_receita" 
                                                placeholder="Digite o modo de preparo" name="descricaoPreparo" id="modoReceita" 
                                                value={this.state.postReceita.descricaoPreparo}
                                                onChange={this.postSetState}/> 
                                            </div>
                                        </div>                             

                                        <div className="caixa_texto_botoes">
                                            {/* COMO 1 BOTÃO CRIAR E ALTERAR AO MESMO TEMPO??? */}
                                            <button className="botao" type="submit" name="Salvar">Salvar</button>
                                            <button className="botao" type="button" name="Editar_Card" onClick={e => this.deleteCadReceita(this.state.postReceita.idReceita)}>Excluir</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>  
                        
                        <div className="linha"></div>
                        <div className="tit_receita">
                            <span>RECEITAS CADASTRADAS</span>
                        </div>

                        {
                            this.state.listaCadReceitas.map(function(receita){
                                return(
                                    <div>
                                        <div className="card_">
                                            <div className="card_branco">
                                                <img src={"http://localhost:5000/" + receita.imgReceita} alt="imagem ilustrativa de comida" />
                                                <p>{receita.nomeReceita}</p>
                                                <p>Ingredientes</p>
                                                <p>Modo de Preparo</p>
                                                <button className="botao" type="button" name="Editar_Card" onClick={e => this.getInputReceita(receita.idReceita)}>Editar</button>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }.bind(this))
                        }

                        <div className="mais">
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