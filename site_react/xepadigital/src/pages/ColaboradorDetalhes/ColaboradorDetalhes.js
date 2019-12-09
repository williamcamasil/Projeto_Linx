import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

import colaborador from '../../assets/img/colaborador.png';
import foto_cenoura from '../../assets/img/foto_cenoura.png';
import { Link } from "react-router-dom";
import api from '../../services/api'

class ColaboradorDetalhes extends Component {
    constructor(props){
        super(props);
        this.state = {
            listarColaborador: [],

            informacoesDetalhes : {
                // idUsuario : 0,
                nomeUsuario : "",
                // emailUsuario : "",
                // senhaUsuario : "",
                receberNotif : false,
                documento : "",
                imgPerfil : "",
                telefone1 : "",
                telefone2 : "",
                tipoUsuario : "",
                sobreColab : "",
                fazEntrega : false,
                razaoSocial : "",
                // endereco : [],
                // receita : [],
                // registroProduto : [],
                // reservaProduto: []
            }
        }
    }

    componentDidMount(){
        this.getColaborador();
        // this.getInformacoes();
        this.getInformacoes();
    }

    getInformacoes = () => {
        let id = this.props.location.state.idUsuario;
        api.get('/Colaborador/' + id)
        .then(response => {
            if (response.status === 200) {
                this.setState({ informacoesDetalhes: response.data }, () => console.log("Objeto a ser atualizado:", this.state.informacoesDetalhes))
            }
        })
    }

    // getInformacoes = () =>{
    //     let id = this.props.location.state.idUsuario;
    //     fetch("http://localhost:5000/api/Colaborador/"+id)
    //         .then(response => response.json())
    //         .then(data => this.setState( {informacoesDetalhes :[data]} )) 
            
    //     console.log('Nome ', this.state.informacoesDetalhes.nomeUsuario)
    // }


    // NÃO ESTÁ FUNCIONANDO O ID PARA PUXAR COLABORADOR ESPECIFICO...
    
    getColaborador = () =>{
        let id = this.props.location.state.idUsuario;
        console.log(id);
        // setTimeout(() => {
            fetch("http://localhost:5000/api/Colaborador/"+id)
                .then(response => response.json())
                .then(data => this.setState( {listarColaborador : [data]} ))  
                
            // api.get('/Colaborador/'+id)
            // .then(response => {
            //     if (response.status === 200) {
            //         this.setState({ listarColaborador: response.data })
            //     }
            // })
        // }, 1000);

        console.log('Usuario: ', this.state.listarColaborador)
    }

    // getReceita = () => {
    //     let id = this.props.location.state.idReceita;
    //     api.get('/Receita/'+id).then(response => {
    //         if (response.status === 200) {
    //             this.setState({ listarReceita: response.data })
    //         }
    //     })
    // }

    render() {
        return (
            <div>
                <Header />
                <main>
                    <div className="colab">
                        <div className="colab_banner">
                            <h1 className="tituloh1">COLABORADORES</h1>
                            <p className="p_colab">AUXILIANDO EM NOSSA MISSÃO</p>
                        </div>
                    </div>
                    
                    <div className="colab_section"></div>
                        <div id="centralizar_pagina_produtor">            
                            <div className="caixa_produtor">
                                {/* <img src={"http://localhost:5000/" + vp.imgPerfil} alt="imagem ilustrativa do colaborador" /> */}
                                <h3>{this.state.informacoesDetalhes.nomeUsuario}</h3>
                            </div>

                            <div id="box_informacoes">
                                {/* <p>{vp.sobreColab}</p> */}
                                <p className="Contato_Colaborador"> Tel:{/* {vp.telefone1} | {vp.endereco}*/}</p>
                            </div>
                            {/*  */}
                            <div>
                                <h3>Produtos fornecidos</h3>
                                {
                                    this.state.listarColaborador.map(
                                        function (vp) {
                                            return ( 
                                            <div className="produtos_colab">
                                                <div>
                                                    <img src={foto_cenoura} alt="Foto do produto, cenouras"/>
                                                </div>                    
                                                <div className="produto">
                                                    <p>
                                                        {vp.nomeUsuario}
                                                        Cenoura orgânica <br/>
                                                        Preço: R$10,20 kg <br/>
                                                        Data de validade: 26/10/2019 <br/>  
                                                        Disponível: Sim <br/> 
                                                        Orgânico: Sim <br/> 
                                                        Produto livre de agrotóxicos                                
                                                    </p>
                                                </div>
                                                <div className="input_produtos">
                                                    <div>
                                                        <label htmlFor="qtd_produto" aria-label="qtd_produto"> Quantidade:</label><br/>
                                                        <input className="caixa-texto" type="Quantidade" placeholder="1 Kg" name="Quantidade" id="Quantidade"/><br/>
                                                    </div>
                                                </div>
                                            </div>
                                            );
                                        }
                                    )
                                }
                            </div>
                            
                            <div id="box_colab_produtor">
                                {/* <Link to={{ pathname: '/ReceitasDetalhes', state: { idReceita: receita.idReceita} }} >Reservar</Link> */}
                                <button className="botao" type="buttonReservar" name="Reservar"><Link to={{ pathname: '/ReservaCliente'}} >Reservar</Link></button>
                                {/* <button className="botao" type="buttonReservar" name="Reservar">Reservar</button> */}
                                <button className="botao" type="buttonCancelarReserva" name="CancelarReserva"><Link to={{ pathname: '/Colaboradores'}} >Cancelar</Link></button>
                            </div>
                        </div>
                                    
                    <div className="colab_section"></div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default ColaboradorDetalhes;