import React, { Component } from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

// import colaborador from '../../assets/img/colaborador.png';
// import foto_cenoura from '../../assets/img/foto_cenoura.png';
import api from '../../services/api'
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import ScrollTop from '../../componentes/ScrollTop/ScrollTop';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { MDBAlert } from "mdbreact";


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
            successMsg: "",
            erroMsg: "",
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    abrirModal = (id) => {
        // Abre modal
        this.toggle();
        // atribui qual oferta está sendo reservada
        this.setState({
            idRegistro: id,
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
            // console.log('Id ', this.state.listaProdutos.idRegistro)
        })
    }
    //#endregion

    //#region SETSTATE

    postSetState = (input) => {
        this.setState({
            quantidadeReserva: input.target.value
        })
    }

    //#endregion

    //#region POST

    postPedido = (e) => {
        e.preventDefault();
        this.setState({ erroMsg: "" })
        this.setState({ successMsg: "" })

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
        .then(response => {
            this.setState({ successMsg: "Informação salva com sucesso!" });
        })
        .catch(error => {
            console.log(error);
            this.setState({ erroMsg: "Não foi possível salvar" });
        })
            // .catch(error => console.log('Não foi possível cadastrar:' + error))

        this.toggle();

        setTimeout(() => {
            this.getListarProdutos();
        }, 200);

        setTimeout(() => {
            this.setState({ successMsg: "" });
            this.setState({ erroMsg: "" });
        }, 3500);
    }
    //#endregion

    render() {
        return (
            <div>
                <Header />
                <ScrollTop />
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

                            <h3>Produtos fornecidos</h3>
                            {
                                this.state.listaProdutos.map(
                                    function (vp) {
                                        return (
                                            <div className="produtos_colab card">
                                                <div className="prod_colab_top">
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
                                                        {
                                                            usuarioAutenticado() && parseJwt().Role === "Cliente" ? 
                                                            <><button className="botao" type="submit" onClick={() => this.abrirModal(vp.idRegistro)} name="Reservar">Reservar</button></>
                                                            :
                                                            <></>
                                                        }
                                                        </>
                                                    </div>
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


                


                
                <Dialog open={this.state.modal} aria-labelledby="form-dialog-title">
                    <DialogTitle id="form-dialog-title">Reserva de Produto</DialogTitle>
                    <DialogContent>
                        <form onSubmit={this.postPedido}>
                            <TextField

                                label="Quantidade"
                                type="number"
                                placeholder="Quantidade em Kg"
                                name="quantidadeReserva"
                                value={this.state.quantidadeReserva}
                                onChange={this.postSetState}

                                autoFocus
                                margin="dense"
                                id="name"
                                fullWidth
                            />
                            <DialogActions>
                                <Button onClick={this.toggle} color="primary">
                                    Fechar
                        </Button>
                                <Button type="submit" color="primary">
                                    Salvar
                        </Button>
                            </DialogActions>
                        </form>
                    </DialogContent>
                </Dialog>

                <Footer />
            </div>
        );
    }
}

export default ColaboradorDetalhes;