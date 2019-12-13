import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import api from '../../services/api'
import { parseJwt } from "../../services/auth"
import mais from '../../assets/img/mais.png'
import ScrollTop from '../../componentes/ScrollTop/ScrollTop';

class CadastroProduto extends Component {
    constructor(){
        super();
        this.state = {
            listaCadProdutos : [],
            file: null,

            put_post_Produto:{
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
            more: 4
        }
    }

    //#region POST
    //Mostrar Imagem
    imgSetState = (i) =>{
        this.setState({
            file : URL.createObjectURL(i.target.files[0])
        })
    }

    //POST - PEGAR INPUTS
    postSetState = (input) => {
        this.setState({
            put_post_Produto: {
                ...this.state.put_post_Produto,
                [input.target.name]: input.target.value
            }
        })
    }

    componentDidMount(){
        this.getCadProduto();
    }
    //#endregion

    //#region GET
    //GET - Inserir nos Inputs
    getInputProduto = (id) => {
        this.setState({idProdutoAlterada: id});
        api.get('/Produto/' +  id)
            .then(response => {
            if (response.status === 200) {
                this.setState({ put_post_Produto: response.data })
            }
        })        
    }

    //GET - Produtos
    // getCadProduto = () => {
    //     api.get('/RegistroProduto/'+parseJwt().Id)
    //     .then(response => {
    //         if (response.status === 200) {
    //             this.setState({ listaCadProdutos: response.data })
    //         }
    //     })
    // }

    getCadProduto = () => {
        fetch('http://localhost:5000/api/RegistroProduto/' + parseJwt().Id)
            .then(response => response.json())
            .then(response => {
                var redux = response.slice(0, this.state.more)

                this.setState({ listaCadProdutos: redux })
            })

    }

    incrementarMais = () => {
        this.state.more += 4; 
        console.log('Mostrar: ', this.state.more) //this.state.more)  
        this.getCadProduto();
    }

    //#endregion

    //Mostrar Imagem
    imgSetState = (i) => {
        if (this.state.idProdutoAlterada !== 0) {
            //PUT
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
     post_put_CadProduto = (event) => {
        event.preventDefault();
        if (this.state.idProdutoAlterada !== 0) {
            //PUT
            let produto = new FormData();
            produto.set('idProduto', this.state.put_post_Produto.idProduto);
            produto.set('nomeProduto', this.state.put_post_Produto.nomeProduto);
            produto.set('descricaoProduto', this.state.put_post_Produto.descricaoProduto);
            produto.set('disponibilidade', this.state.put_post_Produto.disponibilidade);
            produto.set('organico', this.state.put_post_Produto.organico);
            produto.set('preco', this.state.put_post_Produto.preco);
            produto.set('validade', this.state.put_post_Produto.validade);
            produto.set('imgProduto', this.state.put_post_Produto.imgProduto.current.files[0], this.state.put_post_Produto.imgProduto.value);
            produto.set('idUsuario', this.state.put_post_Produto.idUsuario);

            fetch("http://localhost:5000/api/Produto/" + this.state.put_post_Produto.idProduto, {
                method: "PUT",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
                },
                body: produto
            })
            .catch(error => console.log(error))

            setTimeout(() => {
                this.getCadProduto();
                this.limparCampos();
            }, 1000);

            this.setState({idProdutoAlterada: 0});
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

            // API
            // var imagem = Request.Form.Files[0];
            // Produto.ImgProduto = _UploadImg.Upload (imagem, "Produtos");
            // Produto.NomeProduto = Request.Form["NomeProduto"].ToString ();
            // Produto.DescricaoProduto = Request.Form["DescricaoProduto"].ToString ();
            // Produto.Disponibilidade = decimal.Parse (Request.Form["Disponibilidade"]);
            // Produto.Organico = bool.Parse (Request.Form["Organico"]);
            // Produto.Preco = decimal.Parse(Request.Form["Preco"]);
            // Produto.Validade = DateTime.Parse(Request.Form["Validade"]);


            fetch("http://localhost:5000/api/Produto", {
                method: "POST",
                headers: {
                    "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
                },
                body: produto
            })
            .then(response => response.json())
            .then(response => {
                console.log(response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))

            setTimeout(() => {
                this.getCadProduto();
                this.limparCampos();
            }, 1000);
        }
    };

    //DELETE - Deletar categoria
    deleteCadProduto = (id) => {
        fetch("http://localhost:5000/api/Produto/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
            }
        })

        .then(response => response.json())
        .then(response => {
            console.log(response);
            this.getCadProduto();
            this.setState(() => ({ lista: this.state.listaCadProdutos }))
        })

        setTimeout(() => {
            this.getCadProduto();
            this.limparCampos();
        }, 1000);
    }

    limparCampos = () => {
        this.setState({    
            put_post_Produto:{
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

    render() {
        return (
            <div>
                <Header />
                <ScrollTop />
                <main>
                    <section>
                        <div className="container">
                            <div id="card_cadastro">
                                <span>CADASTRO DE PRODUTO</span>
                                
                                <div id="caixa_total">
                                    <div id="caixa_parte_conteudo">
                                        <form className="form_caixa" action="GET" onSubmit={this.post_put_CadProduto}>
                                            {/* IMAGEM */}
                                            <div id="caixa_parte_imagem">

                                                {this.state.idProdutoAlterada !== 0 ? (
                                                    // PUT
                                                    <>
                                                        <input
                                                            type="file"
                                                            placeholder="Coloque uma foto sua"
                                                            aria-label="Coloque uma foto sua"
                                                            name="imgProduto"
                                                            onChange={this.imgSetState}
                                                            ref={this.state.put_post_Produto.imgProduto}
                                                        />
                                                        <img src={"http://localhost:5000/" + this.state.put_post_Produto.imgProduto} alt=""/>
                                                    </>
                                                ) : (
                                                        //POST
                                                        <input
                                                            type="file"
                                                            placeholder="Coloque uma foto sua"
                                                            aria-label="Coloque uma foto sua"
                                                            name="imgProduto"
                                                            onChange={this.imgSetState}
                                                            ref={this.state.put_post_Produto.imgProduto}
                                                        />
                                                    )
                                                }

                                                <img className="img_cad_produto" src={this.state.file} alt="imagem ilustrativa de comida" />
                                            </div>
                                            
                                            {/* IMAGEM
                                            <div id="caixa_parte_imagem">
                                                <input
                                                    type="file"
                                                    placeholder="Coloque uma foto sua"
                                                    aria-label="Coloque uma foto sua"
                                                    name="imgProduto"
                                                    onChange={this.imgSetState}
                                                    ref={this.state.put_post_Produto.imgProduto}
                                                />
                                                <img className="img_cad_receita" src={this.state.file} alt="Imagem de um prato com macarrão ao molho" /> 
                                            </div> */}

                                            {/* NOME */}
                                            <div className="padronizar_campo2">
                                                <label htmlFor="nome_lbl" aria-label="nome_lbl"> Nome</label>
                                                <input className="caixa_texto_componente" type="nome_produto" 
                                                placeholder="Digite o nome do produto" name="nomeProduto" id="nome_produto"
                                                value={this.state.put_post_Produto.nomeProduto}
                                                onChange={this.postSetState}   
                                                />  
                                            </div>

                                            <div className="caixa_texto">
                                                <div className="caixa_texto_sub">
                                                    <label htmlFor="preco_lbl" aria-label="preco_lbl"> Preço</label><br/>
                                                    <input className="caixa_texto_componente" type="preco_produto" 
                                                    placeholder="Digite o preço" name="preco" id="preco_produto"
                                                    value={this.state.put_post_Produto.preco}
                                                    onChange={this.postSetState}   
                                                    /> 
                                                </div>
                                                <div className="caixa_texto_sub">
                                                    <label htmlFor="data_lbl" aria-label="data_lbl"> Data de Validade</label><br/>
                                                    <input className="caixa_texto_componente" type="date" 
                                                    placeholder="26/10/2019" name="validade" id="data_produto"
                                                    value={this.state.put_post_Produto.validade}
                                                    onChange={this.postSetState}   
                                                    /> 
                                                </div>
                                            </div>

                                            <div className="caixa_texto">
                                                <div className="caixa_texto_sub">
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
                                                    value={this.state.put_post_Produto.disponibilidade}
                                                    onChange={this.postSetState}   
                                                    />
                                                </div>
                                            </div>

                                            <div className="caixa_texto_sub">
                                                <label htmlFor="detalhe_lbl" aria-label="detalhe_lbl"> Detalhe</label><br/>
                                                <input className="caixa_texto_componente_campo" type="detalhe_produto" 
                                                placeholder="Digite os detalhes desse produto" name="descricaoProduto" id="detalhe_produto"
                                                value={this.state.put_post_Produto.descricaoProduto}
                                                onChange={this.postSetState}   
                                                /> 
                                            </div>

                                            <div className="caixa_texto_botoes">
                                                <button className="botao" type="submit" name="Salvar">Salvar</button>
                                                <button className="botao" type="button" name="Editar_Card" onClick={e => this.deleteCadProduto(this.state.put_post_Produto.idProduto)}>Excluir</button>
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
                            
                            <div className="card_">
                                {
                                    this.state.listaCadProdutos.map(function(produto){
                                        return(
                                            
                                                <div className="card_branco card">
                                                    <img src={"http://localhost:5000/" + produto.idProdutoNavigation.imgProduto} alt="imagem ilustrativa de comida" />
                                                    <p>{produto.idProdutoNavigation.nomeProduto}</p>
                                                    <p>{(produto.idProdutoNavigation.organico === true) ? 'Produto Orgânico':'Produto não Orgânico'}</p>
                                                    <p>{produto.idProdutoNavigation.disponibilidade} Kg</p>
                                                    {/* <button className="botao" type="button" name="Editar_Card">Editar</button> */}
                                                    {/* <button className="botao" type="button" name="Editar_Card">Editar</button> */}
                                                    <button className="botao" type="button" name="Editar_Card" onClick={e => this.getInputProduto(produto.idProdutoNavigation.idProduto)}>Editar</button>
                                                </div>
                                        );
                                    }.bind(this))
                                }
                            </div>

                            <div className="mais">
                                <a onClick = { () => {this.incrementarMais()}} title="Ver mais receitas">
                                <img src={mais} alt="Ícone de adição, representando ver mais."/></a>
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
  