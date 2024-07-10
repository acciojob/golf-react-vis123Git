import React, { Component, useState } from "react";
import '../styles/App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            renderBall: false,
            posi : 0,
            ballPosition: { left: "0px" },
            buttonVisible: true

        };
        this.renderChoice = this.renderBallOrButton.bind(this)
        this.buttonClickHandler = this.buttonClickHandler.bind(this)
        this.handleKeyDown = this.handleKeyDown.bind(this);

    };

    buttonClickHandler(e) {
        this.setState((prevState) => ({
            renderBall: true,
            posi: prevState.posi,
            ballPosition: { left: `${prevState.posi}px` },
            buttonVisible: false
        }));
   }
    renderBallOrButton() {
		if (this.state.renderBall) {
		    return <div className="ball" style={this.state.ballPosition}></div>
		} else {
		    return <button onClick={this.buttonClickHandler} className="start">Start</button>
		}
    }

    handleKeyDown(e) {
        if (e.key === 'ArrowRight' || e.keyCode === 39) {
            this.setState((prevState) => ({
                posi: prevState.posi + 5,
                ballPosition: { left: `${prevState.posi + 5}px` }
            }));
        }
    }


    componentDidMount() {
        document.addEventListener('keydown', this.handleKeyDown);
    }

    componentWillUnmount() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }

    render() {
        return (
            <div className="playground">
                {this.renderBallOrButton()}
            </div>
        )
    }
}


export default App;
