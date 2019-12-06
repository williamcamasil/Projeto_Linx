import React, { Component } from 'react'
import { parseJwt, usuarioAutenticado } from '../../services/auth';
import api from '../../services/api';

import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

class Login extends Component {
    constructor() {
        super();

        this.state = {
            emailUsuario: "",
            senhaUsuario: "",
            erroMsg: "",
            isLoading: false,
        }
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
                                    <label aria-label="E-mail" htmlFor="email">E-mail</label>
                                    <input 
                                        className="caixa-texto" 
                                        type="email" 
                                        placeholder="Digite seu e-mail" 
                                        name="emailUsuario" 
                                        
                                        value={this.state.emailUsuario}
                                        onChange={this.atualizaEstado}
                                    />

                                    <label aria-label="Senha" htmlFor="senha">Senha</label>
                                    <input 
                                        className="caixa-texto" 
                                        type="password" 
                                        placeholder="Digite sua senha" 
                                        name="senhaUsuario" 
                                        
                                        value={this.state.senhaUsuario}
                                        onChange={this.atualizaEstado}
                                    />

                                    {/* <a className="texto" title="Esqueci a senha" href="#">Esqueceu sua senha?</a> */}

                                    <label htmlFor="conectado" aria-label="Mantenha-me conectado" className="linha_link">
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
                                    <span className="linha_link">Ainda não possuí uma conta? Cadastre-se</span>

                                    <button type="button" className="botao"><a href="/Registrar">Cadastre-se</a></button>
                                </form>

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