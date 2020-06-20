import React, { Component } from "react";
import GameController from "./controls/gameControlComponent";
import GameViewComponent from "./display/gameViewComponent";

class GameComponent extends Component {
    state = {
        user: this.props.user,
    };

    isTruthy = (o) => {
        return !!o;
    };

    handleStart = (value) => {
        /*
        var messages = [...this.state.messages];
        console.log(messages);
        messages = messages.concat(value);
        this.setState({ messages: messages });
        */
        this.props.onTurn(value);
    };

    render() {
        return (
            <div>
                <GameViewComponent
                    messages={this.props.messages}
                ></GameViewComponent>
                <GameController onPressed={this.handleStart}></GameController>
            </div>
        );
    }
}

export default GameComponent;
