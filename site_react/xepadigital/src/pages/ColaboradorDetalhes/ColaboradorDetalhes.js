import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

// import colaborador from '../../assets/img/colaborador.png';
// import foto_cenoura from '../../assets/img/foto_cenoura.png';
import api from '../../services/api'
import { parseJwt } from '../../services/auth';

// , MDBAlert
import { MDBBtn, MDBInput, MDBContainer, MDBModal, MDBModalBody, MDBModalHeader, MDBModalFooter } from "mdbreact";


class ColaboradorDetalhes extends Component {
    constructor(props) {
        super(props);
        this.state = {
            listarColaborador: [],
            listaProdutos: [],

            informacoesDetalhes: {
                // idUsuario : 0,
                nomeUsuario: "",
                // emailUsuario : "",
                // senhaUsuario : "",
                receberNotif: false,
                documento: "",
                imgPerfil: "",
                telefone1: "",
                telefone2: "",
                tipoUsuario: "",
                sobreColab: "",
                fazEntrega: false,
                razaoSocial: "",
                // endereco : [],
                // receita : [],
                // registroProduto : [],
                // reservaProduto: []
            },
            modal: false,

            idRegistro: "",
            quantidadeReserva: 0,
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    componentDidMount() {
        this.getListarProdutos();
        this.getInformacoes();
    }

    //#region GET's

    getInformacoes = () => {
        let id = this.props.location.state.idUsuario;
        api.get('/Colaborador/' + id)
            .then(response => {
                if (response.status === 200) {
                    this.setState({ informacoesDetalhes: response.data }, () => console.log("Objeto a ser atualizado:", this.state.informacoesDetalhes))
                }
            })
    }

    getListarProdutos = () => {
        let id = this.props.location.state.idUsuario;
        api.get('/RegistroProduto/' + id).then(response => {
            if (response.status === 200) {
                this.setState({ listaProdutos: response.data })
            }
            console.log('Id ', this.state.listaProdutos.idRegistro)
        })
    }
    //#endregion

    //#region SETSTATE

    postSetState = (input) => {
        this.setState({
            quantidadeReserva: input.target.value
        })
    }

    abrirModal = (id) => {
        // abre modal
        this.toggle();
        // atribui qual oferta está sendo reservada
        this.setState({
            idRegistro: id,
        });
    }
    //#endregion

    //#region POST

    postPedido = (e) => {
        e.preventDefault();        

        fetch("http://localhost:5000/api/ReservaProduto", {
            method: "POST",
            body: JSON.stringify({
                quantidadeReserva: this.state.quantidadeReserva,
                idRegistro: this.state.idRegistro,
                idUsuario: parseJwt().Id
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
            },
        })
            .then(response => response.json())
            .then(response => {
                console.log("Reserva: ", response);
            })
            .catch(error => console.log('Não foi possível cadastrar:' + error))

        this.toggle();

            setTimeout(() => {
                this.getListarProdutos();
            }, 200);
    }
    //#endregion



    render() {
        return (
            <div>
                <Header />
                <main>
                    <div className="colab_banner_detalhe">
                        <div className="colab_banner">
                            <h1 className="tituloh1">COLABORADORES</h1>
                            <p className="p_colab">AUXILIANDO EM NOSSA MISSÃO</p>
                        </div>
                    </div>

                    <div className="colab_section"></div>
                    <div id="centralizar_pagina_produtor">
                        <div className="caixa_produtor">
                            <img src={"http://localhost:5000/" + this.state.informacoesDetalhes.imgPerfil} alt="imagem ilustrativa do colaborador" />
                            <h3>{this.state.informacoesDetalhes.nomeUsuario}</h3>
                        </div>

                        <div id="box_informacoes">
                            <p>{this.state.informacoesDetalhes.sobreColab}</p>
                            <p className="Contato_Colaborador"> Tel:{this.state.informacoesDetalhes.telefone1} | {this.state.informacoesDetalhes.endereco}</p>
                        </div>
                        {/*  */}
                        <div>
                            {/* <form className="form_caixa" action="GET"> */}
                            <h3>Produtos fornecidos</h3>
                            {
                                this.state.listaProdutos.map(
                                    function (vp) {
                                        return (
                                            <div className="produtos_colab">
                                                <div>
                                                    <img className="colaboradores_img" src={"http://localhost:5000/" + vp.idProdutoNavigation.imgProduto} alt="imagem ilustrativa do colaborador" />
                                                </div>
                                                <div className="produto">
                                                    <p>
                                                        Nome: {vp.idProdutoNavigation.nomeProduto} <br />
                                                        Orgânico: {(vp.idProdutoNavigation.organico === true) ? "Sim" : "Não"} <br />
                                                        Preço: R${vp.idProdutoNavigation.preco} /Kg <br />
                                                        Data de validade: {(vp.idProdutoNavigation.validade).split('T')[0]} <br />
                                                        Disponível: {vp.idProdutoNavigation.disponibilidade} Kg<br />
                                                        {vp.idProdutoNavigation.descricaoProduto} <br />
                                                    </p>
                                                </div>
                                                <div className="input_produtos">
                                                    <>
                                                        {/* <label htmlFor="qtd_produto" aria-label="qtd_produto"> Quantidade:</label><br/>
                                                        <input className="caixa-texto" type="number" placeholder="1 Kg" name="quantidadeReserva" id="Quantidade"
                                                            value={this.state.quantidadeReserva}
                                                            onChange={this.postSetState}
                                                        /><br/> */}

                                                        {/* COLOCAR UMA CONDIÇÃO AQUI */}
                                                        <button className="botao" type="submit" onClick={() => this.abrirModal(vp.idRegistro)} name="Reservar">Reservar</button>
                                                        {/* <button className="botao" type="submit" onClick={this.postPedido(vp.idRegistro)} name="Reservar"><Link to={{ pathname: '/ReservaCliente'}} >Reservar</Link></button> */}
                                                    </>
                                                </div>
                                            </div>
                                        );
                                    }
                                        .bind(this)
                                )
                            }

                            {/* </form>      */}
                        </div>

                        {/* <div id="box_colab_produtor"> */}
                        {/* <Link to={{ pathname: '/ReceitasDetalhes', state: { idReceita: receita.idReceita} }} >Reservar</Link> */}
                        {/* <button className="botao" type="buttonReservar" name="Reservar"><Link to={{ pathname: '/ReservaCliente'}} >Reservar</Link></button> */}
                        {/* <button className="botao" type="buttonReservar" name="Reservar">Reservar</button> */}
                        {/* <button className="botao" type="buttonCancelarReserva" name="CancelarReserva"><Link to={{ pathname: '/Colaboradores'}} >Cancelar</Link></button> */}
                        {/* </div> */}
                    </div>

                    <div className="colab_section"></div>
                    {/* <i className="fas fa-arrow-circle-left"></i>   */}
                </main>


                <MDBContainer>
                    <form onSubmit={this.postPedido}>
                        <MDBModal isOpen={this.state.modal} toggle={this.toggle}>
                            <MDBModalHeader>Reservar Produto</MDBModalHeader>
                            <MDBModalBody>
                                <MDBInput
                                    label="Quantidade"
                                    type="number"
                                    placeholder="Quantidade em Kg"
                                    name="quantidadeReserva"
                                    value={this.state.quantidadeReserva}
                                    onChange={this.postSetState}
                                />
                            </MDBModalBody>
                            <MDBModalFooter>
                                <MDBBtn color="secondary" onClick={this.toggle}>Fechar</MDBBtn>
                                <MDBBtn color="primary" type="submit">Salvar</MDBBtn>
                            </MDBModalFooter>
                        </MDBModal>
                    </form>
                </MDBContainer>


                <Footer />
            </div>
        );
    }
}

export default ColaboradorDetalhes;