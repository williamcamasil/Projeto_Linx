import React, { Component } from 'react'
import api from '../../services/api';
import { MDBAlert} from "mdbreact";
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

class Registrar extends Component {
    constructor() {
        super()
        this.state = {
            senhaIgual: "",

            postUsuario: {
                nomeUsuario: "",
                emailUsuario: "",
                senhaUsuario: "",
                tipoUsuario: "",
            },

            erroMsg: "",
            sucessMsg: "",
        }
    }

    UNSAFE_componentWillMount() {
        console.log("Carregando");
        document.title = this.props.titulo_pagina;
    }
    componentDidMount() {
        console.log("Carregado");
    }
    componentDidUpdate() {
        console.log("Atualizando");
    }
    componentWillUnmount() {
        console.log("Saindo");
    }

    postSetState = (input) => {
        this.setState({
            postUsuario: {
                ...this.state.postUsuario, [input.target.name]: input.target.value
            }
        })
    }

    senhaSetState = (input) => {
        this.setState({
            [input.target.name]: input.target.value
        })
    }

    postUsuario = () => {
        api.post("/Usuario", this.state.postUsuario)
            .then(response => {
                console.log(response)
                this.setState({ successMsg: "Conta criada com sucesso! Faça o login!" });
            })
            .catch(error => {
                console.log(error);
                this.setState({ erroMsg: "Não foi possível criar a conta" });
            })
        setTimeout(() => {
            this.setState({ successMsg: "" });
            this.setState({ erroMsg: "" });
        }, 2000);
    }

    confirmaSenha = (e) => {
        e.preventDefault();
        let { postUsuario, senhaIgual } = this.state;

        if (postUsuario.senhaUsuario !== senhaIgual) {
            this.setState({ erroMsg: "A senha inserida não é igual" });
            
            setTimeout(() => {
                this.setState({ erroMsg: "" });
            }, 2000);
        } else {
            this.postUsuario();
            //Abre a tela de login após cadastrar
            setTimeout(() => {
                window.location = "\Login"
            }, 2000);
        }
    }

    render() {
        return (
            <div>
                <Header />
                <main className="fundo">
                    <div className="container-login">
                        <div className="card-login card">
                            <div className="registrar-se">
                                <h2 className="tituloh2-sm">Registrar-se</h2>

                                {/* REGISTRAR */}
                                <form onSubmit={this.confirmaSenha} id="registrar-se" className="texto" method="POST">
                                    <div id="opcao_login">
                                        <input type="radio"
                                            required
                                            value="Colaborador"
                                            name="tipoUsuario"
                                            onChange={this.postSetState}  
                                            />Colaborador
                                        <input type="radio"
                                            required
                                            value="Cliente"
                                            name="tipoUsuario"
                                            onChange={this.postSetState} 
                                            />Cliente
                                    </div>

                                    {/* NOME */}
                                    <label className="textoCampoSub"aria-label="Seu nome">Seu nome</label>
                                    <input className="caixa-texto textoCampoSub" type="text" placeholder="Digite seu nome"
                                        name="nomeUsuario"
                                        value={this.state.postUsuario.nomeUsuario}
                                        onChange={this.postSetState}
                                    />
                                    
                                    {/* EMAIL */}
                                    <label className="textoCampoSub" htmlFor="email" aria-label="Seu E-mail">E-mail</label>
                                    <input className="caixa-texto textoCampoSub" type="email" placeholder="Digite seu e-mail"
                                        name="emailUsuario"
                                        value={this.state.postUsuario.emailUsuario}
                                        onChange={this.postSetState}
                                    />

                                    {/* SENHA */}
                                    <label className="textoCampoSub" htmlFor="senha" aria-label="Senha">Senha</label>
                                    <input className="caixa-texto textoCampoSub" type="password" placeholder="Crie sua senha"
                                        name="senhaUsuario"
                                        value={this.state.postUsuario.senhaUsuario}
                                        onChange={this.postSetState}
                                    />

                                    {/* CONFIRMAÇÃO DE SENHA */}
                                    <label className="textoCampoSub" htmlFor="confirmar senha" aria-label="Confirme sua senha"> Confirme sua senha</label>
                                    <input className="caixa-texto textoCampoSub" type="password" placeholder="Confirme sua senha"
                                        name="senhaIgual"
                                        value={this.state.senhaIgual}
                                        onChange={this.senhaSetState}
                                    />
                                    <br/>
                                    {   
                                        this.state.erroMsg && 
                                        <MDBAlert className="text-center" color="danger" >
                                            {this.state.erroMsg}
                                        </MDBAlert>
                                    }
                        
                                    {
                                        this.state.successMsg && 
                                        <MDBAlert className="text-center" color="success" >
                                            {this.state.successMsg}
                                        </MDBAlert>
                                    }

                                    <button className="botao" type="submit">Criar sua Conta</button>

                                    <p>Criando sua conta você aceita e concorda com os <a href="Termos" target="_blank" title="Saiba mais sobre nossos termos.">
                                        termos de uso</a> | Já possui uma conta? Acesse <a href="Login" title="Faça o login."> Login</a></p>
                                    
                                    {/* <label className="texto-horizontal" aria-label="Deseja receber notificações e atualizações por e-mail?">
                                        <input className="check" type="checkbox"
                                            name="receberNotif"
                                            defaultChecked={this.state.postUsuario.receberNotif}
                                            
                                            onChange={() => this.setState ({ checked: this.state.postUsuario.receberNotif })}
                                            />
                                            <span>
                                                Deseja receber notificações e atualizações por email?
                                            </span>
                                    </label> */}
                                </form>
                            </div>
                        </div>
                    </div>
                </main>
                <Footer />
            </div>
        )
    }
}

export default Registrar;