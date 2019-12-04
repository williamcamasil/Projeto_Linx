import React , {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import food from '../../assets/img/food_af.jpg';
// import food from 'C:/Users/fic/Pictures/imagens/morango.jpg';
// import mais from '../../assets/img/mais.png'
import api from '../../services/api'
// import { Link } from "react-router-dom";
import { parseJwt } from "../../services/auth"

class CadastroReceita extends Component {
    constructor(){
        super();
        this.state = {
            listaCadReceitas : [],
            
            postReceita:{
                nomeReceita: "",
                descricaoPreparo: "",
                descricaoIngrediente: "",
                imgReceita: React.createRef(),
                idUsuario: parseJwt().Id,
            }
        }
    }

    componentDidMount(){
        this.getCadReceita();
    }


    getCadReceita = () => {
        api.get('/Receita')
            .then(response => {
            if (response.status === 200) {
                this.setState({ listaCadReceitas: response.data })
            }
        })
    }

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

    // POST - Cadastrar
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
            // console.log(receita);
        })
        .catch(error => console.log('Não foi possível cadastrar:' + error))
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
                                {/* <div id="caixa_parte_imagem">
                                    <img className="img_cad_receita" src={food} alt="Imagem de um prato com macarrão ao molho" />
                                    <form action="GET">
                                        <a className="btn_link_click_receita" href="#">Inserir IMG</a>
                                    </form>                            
                                </div> */}

                                <div id="caixa_parte_conteudo">
                                    <form className="form_caixa" onSubmit={this.postCadReceita}>
                                        <div id="caixa_parte_imagem">
                                            
                                            <input
                                                type="file"
                                                placeholder="Coloque uma foto sua"
                                                aria-label="Coloque uma foto sua"
                                                name="imgReceita"
                                                // value={this.state.postUsuario.fotoUsuario}
                                                // onChange={this.imgSetState}
                                                ref={this.state.postReceita.imgReceita}
                                            />
                                            <img className="img_cad_receita" src={food} alt="imagem ilustrativa de comida" />
                                        </div>
                                        {/* <a className="btn_link_click_receita" href="#">Inserir IMG</a> */}

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
                                            <button className="botao" type="submit" name="Salvar">Salvar</button>
                                            <button className="botao" type="button" name="Excluir">Excluir</button>
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
                                                {/* <img src={"http://localhost:5000/" + receita.imgReceita} alt="imagem ilustrativa de comida" /> */}
                                                <p>{receita.nomeReceita}</p>
                                                <p>Ingredientes</p>
                                                <p>Modo de Preparo</p>
                                                {/* <button className="botao" type="button" name="Editar_Card">Editar</button> */}
                                                {/* <button className="botao" type="button" name="Editar_Card"><Link>Editar</Link></button> */}
                                                <button className="botao" type="button" name="Editar_Card">Editar</button>
                                            </div>
                                        </div>

                                        {/* <div className="mais">
                                            <a href="#" title="Ver mais receitas">
                                            <img src={mais}
                                            alt="Ícone de adição, representando ver mais." /></a>
                                        </div> */}

                                    </div>
                                );
                            }.bind(this))
                        }
                    </div>   
                </section>                    
            </main>
    
            <Footer />
            </>
            
        )
    }
}

export default CadastroReceita;