import React, {Component} from 'react';
import Header from '../../componentes/Header/Header';
import Footer from '../../componentes/Footer/Footer';
import ScrollTop from '../../componentes/ScrollTop/ScrollTop';
// import api from '../../services/api'

// import food from '../../assets/img/food.png';

class ReceitasDetalhes extends Component {
    constructor(props){
        super(props);
        this.state = {
            listarReceita: []
        }
    }

    componentDidMount(){
        this.getReceita();
    }

    getReceita = () =>{
        let id = this.props.location.state.idReceita;
        setTimeout(() => {
            fetch("http://localhost:5000/api/Receita/"+id)
                .then(response => response.json())
                .then(data => this.setState( {listarReceita :[data]} ))    
        }, 1000);
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
                <ScrollTop />
                <main>
                    <div className="banner_receitaDetalhes">
                        <div className="bloco">
                            <h1 className="tituloh1">RECEITAS</h1>
                            <p className="bloco_titulo_2">SELECIONADAS COM MUITO CARINHO</p>
                        </div>
                    </div>

                    <div className="colab_section"></div>                    
                    {
                        this.state.listarReceita.map(
                            function (vr) {
                                return ( 
                        
                                <div key={vr.idReceita} id="centralizar_pagina_produtor"> 
                                    <div className="caixa_produtor">
                                        <img src={"http://localhost:5000/" + vr.imgReceita} alt="imagem ilustrativa de comida" />
                                        <h3>{vr.nomeReceita}</h3>
                                    </div>

                                    <div id="box_informacoes">
                                        <span>Ingredientes</span>
                                        <br/><br/>
                                        <p>
                                            {vr.descricaoIngrediente}
                                        </p>
                                        <br/>
                                        <span>Modo de Preparo</span>
                                        <br/>
                                        <br/>
                                        <p>
                                            {vr.descricaoPreparo}  
                                        </p>
                                    </div>
                                </div>
                            );
                        }
                    )
                }

                <div className='goback'>
                    <a href="/Receitas" title="Página inicial"><i class="fas fa-arrow-circle-left fa-5x"></i></a>
                </div>
                
                <div className="colab_section"></div>
                </main>
                <Footer />
            </div>
        );
    }
}

export default ReceitasDetalhes;