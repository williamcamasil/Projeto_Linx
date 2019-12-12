import React, { Component } from 'react';
// import "../../GoTop.css";


class ScrollTop extends React.Component
{
    state = {
        intervalId: 0,
        thePosition: false
    };

    componentDidMount() {
        document.addEventListener("scroll", () => {
            if (window.scrollY > 90) {
                this.setState({ thePosition: true })
            } else {
                this.setState({ thePosition: false })
            }
        });
        window.scrollTo(0, 0);
    }

    onScrollStep = () => {
        if (window.pageYOffset === 0){
            clearInterval(this.state.intervalId);
        }
        window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
    }

    scrollToTop = () => {
        let intervalId = setInterval(this.onScrollStep, this.props.delayInMs);
        this.setState({ intervalId: intervalId });
    }

    renderGoTopIcon = () => {
        if (this.state.thePosition){
            return (
                <div className="go-top card" onClick={this.scrollToTop}>
                    Voltar ao Topo
                </div>
            )
        }
    }

    render(){
        return (
            <React.Fragment>
                
                {this.renderGoTopIcon()}
            </React.Fragment>
        )
    }
}

export default ScrollTop;