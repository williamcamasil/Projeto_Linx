import React, { Component } from 'react'
// import { parseJwt } from '../../services/auth';
// import api from '../../services/api';

import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';

class Registrar extends Component {
    
    
    // constructor() {
    //     super();

    //     this.state = {
    //         emailUsuario: "",
    //         senhaUsuario: "",
    //         erroMsg: "",
    //         isLoading: false,
    //     }
    // }

    // atualizaEstado = (e) => {
    //     this.setState({ [e.target.name]: e.target.value })
    // }

    // realizarLogin(e) {
    //     e.preventDefault();

    //     this.setState({ erroMsg: "" })

    //     this.setState({ isLoading: true })

    //     let usuario = {
    //         emailUsuario: this.state.emailUsuario,
    //         senhaUsuario: this.state.senhaUsuario
    //     }

    //     api.post("/Login", usuario)
    //         .then(response => {
    //             console.log("Retorno do login: ", response);

    //             if (response.status === 200) {
    //                 localStorage.setItem('usuario-xepa', response.data.token)
    //                 this.setState({ isLoading: false })

    //                 var base64 = localStorage.getItem('usuario-xepa').split('.')[1]

    //                 console.log(base64)
    //                 console.log(window.atob(base64))
    //                 console.log(JSON.parse(window.atob(base64)))
    //                 console.log(parseJwt().Role)

    //                 // if (parseJwt().Role === 'Administrador') {

    //                 //     this.props.history.push('/Inicio');
    //                 // }
    //                 // else {

    //                 //     this.props.history.push('/Inicio');
    //                 // }
    //             }
    //         })
    //         .catch(erro => {
    //             console.log("Erro: ", erro)
    //             this.setState({ erroMsg: 'E-mail ou senha inválidos!' })
    //             this.setState({ isLoading: false })
    //         })
    // }

    render() {
        return (
            <div>
                <Header/>    
                <main className="fundo">
                    <div className="container-login">
                        <div className="card-login card">
                            <div className="registrar-se">
                                <h2 className="tituloh2-sm">Registrar-se</h2>                    

                                {/* REGISTRAR */}
                                <form id="registrar-se" className="texto" method="POST">
                                    <div id="opcao_login">
                                        <input type="radio" name="escolha"/> Colaborador 
                                        <input type="radio" name="escolha"/> Cliente
                                    </div>
                                    
                                    <label for="nome" aria-label="Seu nome"> Seu nome</label>
                                    <input className="caixa-texto" type="email" placeholder="Digite seu nome" name="nome" id="nome"/>


                                    <label for="email" aria-label="Seu E-mail">E-mail</label>
                                    <input className="caixa-texto" type="email" placeholder="Digite seu e-mail" name="email"/>


                                    <label for="senha" aria-label="Senha">Senha</label>
                                    <input className="caixa-texto" type="password" placeholder="Crie sua senha" name="senha"/>


                                    <label for="confirmar senha" aria-label="Confirme sua senha"> Confirme sua senha</label>
                                    <input className="caixa-texto" type="password" placeholder="Confirme sua senha"
                                        name="confirmar_senha" id="confirmar_senha"/>

                                    <button className="botao" type="button" name="Criar conta">Criar sua Conta</button>
                                    <p>Criando sua conta você aceita e concorda com as 
                                        {/* <a href="#" title="Condições">condições</a> e */}
                                        {/* <a href="#" title="termos de uso">termos de uso</a> */}
                                    </p>
                                    <label className="texto-horizontal" for="atualizacoes"
                                        aria-label="Desejo receber notificações e atualizações por e-mail?">
                                        <input className="check" type="checkbox" name="atualizacoes" id="atualizacoes"/>
                                        <span>
                                            Deseja receber notificações e atualizações por email?
                                        </span>
                                    </label>
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

export default Registrar;