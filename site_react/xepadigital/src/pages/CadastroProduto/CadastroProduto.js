import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import foto_legume from '../../assets/img/foto_legume.png';
import mais from '../../assets/img/mais.png';
import api from '../../services/api'
// import { Link } from "react-router-dom";
import { parseJwt } from "../../services/auth"

class CadastroProduto extends Component {
    constructor(){
        super();
        this.state = {
            listaCadProdutos : [],
            file: null,
            postProduto:{
                nomeProduto: "",
                descricaoProduto: "",
                disponibilidade: "",
                organico: false,
                preco: 0,
                validade: "",
                imgProduto: React.createRef(),
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
        this.getCadProduto();
    }

    //GET - Inserir nos Inputs
    getInputProduto = (id) => {
        api.get('/Produto/' +  id)
            .then(response => {
            if (response.status === 200) {
                this.setState({ postProduto: response.data })
                // console.log('DEU CERTO')
            }
        })
        // setTimeout(() => {
        //     console.log('Nome receita: ', this.state.postReceita.nomeReceita)    
        // }, 1000);
        
    }

    //GET - Produtos
    getCadProduto = () => {
        api.get('/Produto').then(response => {
            if (response.status === 200) {
                this.setState({ listaCadProdutos: response.data })
            }
        })
    }

    //POST - PEGAR INPUTS
    postSetState = (input) => {
        this.setState({
            postProduto: {
                ...this.state.postProduto,
                [input.target.name]: input.target.value
            }
        })

        console.log('meu state postProduto: ' , this.state.postProduto)
        console.log('meu state postProduto: ' , this.state.postProduto.imgReceita)
    }

     // POST
     postCadProduto = (event) => {
        event.preventDefault();
        console.log("Cadastrando");
        console.log("postProduto: ", this.state.postProduto);

        let produto = new FormData();

        produto.set('nomeProduto', this.state.postProduto.nomeProduto);
        produto.set('descricaoProduto', this.state.postProduto.descricaoProduto);
        produto.set('disponibilidade', this.state.postProduto.disponibilidade);
        produto.set('organico', this.state.postProduto.organico);
        produto.set('preco', this.state.postProduto.preco);
        produto.set('validade', this.state.postProduto.validade);
        produto.set('imgProduto', this.state.postProduto.imgProduto.current.files[0]);
        produto.set('idUsuario', this.state.postProduto.idUsuario);

        fetch("http://localhost:5000/api/Produto", {
            method: "POST",
            body: produto
        })
        .then(response => response.json())
        .then(response => {
            console.log(response);
        })
        .catch(error => console.log('Não foi possível cadastrar:' + error))
    }

    //DELETE - Deletar categoria
    deleteCadProduto = (id) => {
        console.log("excluindo");

        // this.setState({ erroMsg: "" })

        fetch("http://localhost:5000/api/Produto/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        })

            .then(response => response.json())
            .then(response => {
                console.log(response);
                this.getCadProduto();
                this.setState(() => ({ lista: this.state.listaCadProdutos }))
            })

            // .catch(error => {
            //     console.log(error);
            //     this.setState({ erroMsg: "Não é possível excluir está categoria, verifique se não há eventos que a utilizem" })
            // })
    }

    //PUT
    putCadProduto = (event) => {
        //Previne que a oagina seja recarregada
        event.preventDefault();

        fetch("http://localhost:5000/api/Produto/" + this.state.postProduto.idProduto, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(this.state.postProduto)
        })

            .then(response => response.json())
            .catch(error => console.log(error))

        //Atraso na requisição, pois as requests possuem intervalos muito próximos
        setTimeout(() => {
            this.getCadProduto();
        }, 1000);

    }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <section>
                        <div className="container">
                            <div id="card_cadastro">
                                <span>CADASTRO DE PRODUTO</span>
                                
                                <div id="caixa_total">
                                    {/* <div id="caixa_parte_imagem">
                                        <img src={foto_legume} alt="Legume verde"/>
                                        <form action="GET">
                                            <a className="btn_link_click_receita" href="cadastros_receita.html">Inserir IMG</a>
                                        </form>                            
                                    </div> */}

                                    <div id="caixa_parte_conteudo">
                                        <form className="form_caixa" action="GET" onSubmit={this.postCadProduto}>
                                            {/* IMAGEM */}
                                            <div id="caixa_parte_imagem">
                                                <input
                                                    type="file"
                                                    placeholder="Coloque uma foto sua"
                                                    aria-label="Coloque uma foto sua"
                                                    name="imgProduto"
                                                    onChange={this.imgSetState}
                                                    ref={this.state.postProduto.imgProduto}
                                                />
                                                <img className="img_cad_receita" src={this.state.file} alt="Imagem de um prato com macarrão ao molho" /> 
                                            </div>

                                            {/* NOME */}
                                            <div className="padronizar_campo2">
                                                <label htmlFor="nome_lbl" aria-label="nome_lbl"> Nome</label>
                                                <input className="caixa_texto_componente" type="nome_produto" 
                                                placeholder="Digite o nome do produto" name="nomeProduto" id="nome_produto"
                                                value={this.state.postProduto.nomeProduto}
                                                onChange={this.postSetState}   
                                                />  
                                            </div>

                                            <div className="caixa_texto">
                                                <div className="caixa_texto_sub">
                                                    <label htmlFor="preco_lbl" aria-label="preco_lbl"> Preço</label><br/>
                                                    <input className="caixa_texto_componente" type="preco_produto" 
                                                    placeholder="Digite o preço" name="preco" id="preco_produto"
                                                    value={this.state.postProduto.preco}
                                                    onChange={this.postSetState}   
                                                    /> 
                                                </div>
                                                <div className="caixa_texto_sub">
                                                    <label htmlFor="data_lbl" aria-label="data_lbl"> Data de Validade</label><br/>
                                                    <input className="caixa_texto_componente" type="data_produto" 
                                                    placeholder="26/10/2019" name="validade" id="data_produto"
                                                    value={this.state.postProduto.validade}
                                                    onChange={this.postSetState}   
                                                    /> 
                                                </div>
                                            </div>

                                            <div className="caixa_texto">
                                                <div>
                                                    <label htmlFor="organico_lbl" aria-label="organico_lbl"> Este produto é orgânico?</label><br/>
                                                    <select className="caixa_texto_componente" name="organico_produto" id="organico_produto">
                                                        <option value="organico_nao">Não</option>
                                                        <option value="organico_sim">Sim</option>
                                                    </select>
                                                </div>

                                                <div className="caixa_texto_sub">
                                                    <label htmlFor="disponibilidade_lbl" aria-label="disponibilidade_lbl"> Disponibilidade</label><br/>
                                                    <input className="caixa_texto_componente" type="detalhe_produto" 
                                                    placeholder="1 kg" name="disponibilidade" id="detalhe_produto"
                                                    value={this.state.postProduto.disponibilidade}
                                                    onChange={this.postSetState}   
                                                    />
                                                </div>
                                            </div>

                                            <div className="caixa_texto_sub">
                                                <label htmlFor="detalhe_lbl" aria-label="detalhe_lbl"> Detalhe</label><br/>
                                                <input className="caixa_texto_componente_campo" type="detalhe_produto" 
                                                placeholder="Digite os detalhes desse produto" name="descricaoProduto" id="detalhe_produto"
                                                value={this.state.postProduto.descricaoProduto}
                                                onChange={this.postSetState}   
                                                /> 
                                            </div>

                                            <div className="caixa_texto_botoes">
                                                <button className="botao" type="submit" name="Salvar">Salvar</button>
                                                <button className="botao" type="button" name="Editar_Card" onClick={e => this.deleteCadProduto(this.state.postProduto.idProduto)}>Excluir</button>
                                                {/* FALTA FAZER AQUI */}
                                            </div>
                                        </form>  
                                    </div>
                                </div>
                            </div>  
                            
                            <div className="linha"></div>
                            <div className="tit_produtor">
                                <span>PRODUTOS CADASTRADOS</span>
                            </div>

                            {
                                this.state.listaCadProdutos.map(function(produto){
                                    return(
                                        <div className="card_">
                                            <div className="card_branco">
                                                <img src={"http://localhost:5000/" + produto.imgReceita} alt="imagem ilustrativa de comida" />
                                                <p>{produto.nomeProduto}</p>
                                                <p>{(produto.organico) ? 'Produto Orgânico':'Produto não Orgânico'}</p>
                                                <p>{produto.disponibilidade} Kg</p>
                                                {/* <button className="botao" type="button" name="Editar_Card">Editar</button> */}
                                                {/* <button className="botao" type="button" name="Editar_Card">Editar</button> */}
                                                <button className="botao" type="button" name="Editar_Card" onClick={e => this.getInputProduto(produto.idProduto)}>Editar</button>
                                            </div>
                                        </div>

                                        // <div className="mais">
                                        //     <a href="#" title="Ver mais receitas">
                                        //     <img src={mais} alt="Ícone de adição, representando ver mais."/></a>
                                        // </div>
                                    );
                                }.bind(this))
                            }


                        </div>
                    </section>                    
                </main>
                <Footer />
            </div> 
        )
    }
}

export default CadastroProduto;
  