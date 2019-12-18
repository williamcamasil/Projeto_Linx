import React, { Component } from 'react'
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import api from '../../services/api';

import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            emailUsuario: "",
            senhaUsuario: "",
            erroMsg: "",
            isLoading: false,
            modal: false,
            nomeUsuario: "",
        }
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    setStateForgotSenha = (input) => {
        this.setState({
            [input.target.name]: input.target.value
        })
    }

    postForgotSenha = () => {
        fetch("http://localhost:5000/api/Usuario/EsqueceuSenha/", {
            method: "PATCH",
            body: JSON.stringify({
                nomeUsuario: this.state.nomeUsuario,
                emailUsuario: this.state.emailUsuario
            }),
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + localStorage.getItem('usuario-xepa')
            },
        })
            .then(response => {
                console.log(response)
                this.setState({ successMsg: "senha enviada para o email com sucesso!" });
            })
            .catch(error => {
                console.log(error);
                this.setState({ erroMsg: "Não foi possível enviar o email" });
            })
        this.toggle();
    }

    atualizaEstado = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    realizarLogin(e) {
        e.preventDefault();

        this.setState({ erroMsg: "" })

        this.setState({ isLoading: true })

        let usuario = {
            emailUsuario: this.state.emailUsuario,
            senhaUsuario: this.state.senhaUsuario
        }

        api.post("/Login", usuario)
            .then(response => {
                console.log("Retorno do login: ", response);

                if (response.status === 200) {
                    localStorage.setItem('usuario-xepa', response.data.token)
                    this.setState({ isLoading: false })

                    var base64 = localStorage.getItem('usuario-xepa').split('.')[1]

                    console.log("PAYLOAD: "+base64)
                    console.log("PAYLOAD STRING: "+window.atob(base64))
                    console.log(JSON.parse(window.atob(base64)))
                    console.log("ROLE: ",parseJwt().Role)
                    console.log("ID: ",parseJwt().Id)
                    console.log("AUTH: "+usuarioAutenticado())

                    setTimeout(() => {
                        if (parseJwt().Role === "Colaborador") {
                            this.props.history.push("/PerfilColaborador");
                        }
                        else {
                            this.props.history.push("/Perfil");
                        }
                    }, 200);
                    
                }
            })
            .catch(erro => {
                console.log("Erro: ", erro)
                this.setState({ erroMsg: 'E-mail ou senha inválidos!' })
                this.setState({ isLoading: false })
            })
    }

    render() {
        return (
            <div>
                <Header/>    
                <main className="fundo">
                    <div className="container-login">
                        <div className="card-login card">
                            <div className="login">
                                <h2 className="tituloh2-sm">Entrar</h2>
                                
                                {/* LOGAR */}
                                <form className="texto" id="Entrar" method="POST" onSubmit={this.realizarLogin.bind(this)}>
                                    <label className="textoCampoSub" aria-label="E-mail" htmlFor="email">E-mail</label>
                                    <input 
                                        className="caixa-texto textoCampoSub" 
                                        type="email" 
                                        placeholder="Digite seu e-mail" 
                                        name="emailUsuario" 
                                        
                                        value={this.state.emailUsuario}
                                        onChange={this.atualizaEstado}
                                    />

                                    <label className="textoCampoSub" aria-label="Senha" htmlFor="senha">Senha</label>
                                    <input 
                                        className="caixa-texto textoCampoSub" 
                                        type="password" 
                                        placeholder="Digite sua senha" 
                                        name="senhaUsuario" 
                                        
                                        value={this.state.senhaUsuario}
                                        onChange={this.atualizaEstado}
                                    />

                                    <a onClick={() => this.toggle()} className="texto textoCampoSub" title="Esqueci a senha" href="#">Esqueceu sua senha?</a>

                                    <label htmlFor="conectado" aria-label="Mantenha-me conectado" className="linha_link ">
                                        <input 
                                            className="check" 
                                            type="checkbox" 
                                            name="conectado" 
                                            id="conectado"
                                        />
                                        Mantenha-me conectado
                                    </label>

                                    <p style={{ color : 'red' }}>{this.state.erroMsg}</p>

                                    {/* BOTAO DE ENVIO */}
                                    {
                                        this.state.isLoading === true &&
                                        <button type="submit" className="botao" disabled>Loading...</button>
                                    }
                                    {
                                        this.state.isLoading === false &&
                                        <button type="submit" className="botao">Acessar</button>
                                    }
                                    <span className="linha_link">Ainda não possuí uma conta? </span>
                                    <span><a href="/Registrar" title="Cadastre-se." >Cadastre-se</a></span>
                                    {/* <button type="button" className="botao"><a href="/Registrar">Cadastre-se</a></button> */}
                                </form>

                                <Dialog open={this.state.modal} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">Esqueceu sua senha?</DialogTitle>
                                <DialogContent>
                                    <form onSubmit={this.postForgotSenha}>
                                        <p style={{ color : 'red' }}>{this.state.erroMsg}</p>
                                        <TextField
                                            label="Nome Completo"
                                            type="text"
                                            placeholder="Digite seu nome"
                                            name="nomeUsuario"
                                            value={this.state.senhaAtual}
                                            onChange={this.setStateForgotSenha}

                                            autoFocus
                                            margin="dense"
                                            fullWidth
                                        />
                                        <TextField
                                            label="Email"
                                            type="text"
                                            placeholder="Digite seu email"
                                            name="emailUsuario"
                                            value={this.state.emailUsuario}
                                            onChange={this.setStateForgotSenha}

                                            autoFocus
                                            margin="dense"
                                            fullWidth
                                        />
                                        <DialogActions>
                                            <Button onClick={this.toggle} color="primary">
                                                Fechar
                                                </Button>
                                            <Button type="submit" color="primary">
                                                Enviar
                                                </Button>
                                        </DialogActions>
                                    </form>
                                </DialogContent>
                            </Dialog>

                            </div>
                        </div>
                    </div>
                </main>
                <Footer/>
            </div>
        )
    }
}

export default Login;