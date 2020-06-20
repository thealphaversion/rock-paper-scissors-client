import React, { Component } from "react";
import GameComponent from "./game/gameComponent";
import Navigation from "./navbar/navbar";
import HomeComponent from "./home/homeComponent";
import io from "socket.io-client";

class MainComponent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            socket: null,
            user: null,
            name: null,
            messages: [],
        };
    }

    // utitlity functions
    isTruthy = (o) => {
        return !!o;
    };

    // writing messages
    writeEvent = (text) => {
        console.log("In write event");
        var { messages } = this.state;
        console.log(messages);
        messages = messages.concat(text);
        this.setState({ messages: messages });
    };

    // on button presses
    turnEvent = (id) => {
        this.state.socket.emit("turn", id);
    };

    // starting game
    handleStart = (name) => {
        if (name) {
            this.setState({ name });
            this.connectSocket();
        }
    };

    connectSocket = () => {
        const SERVER_URL = "http://127.0.0.1:8080";
        const socket = io(SERVER_URL);

        socket.on("connect", () => {
            console.log("Connected");
        });

        this.setState({ socket });

        socket.on("message", (data) => {
            this.writeEvent(data);
        });
    };

    setUser = (user) => {
        const { socket } = this.state;
        socket.emit = ("user_connected", user);
        this.setState({ user });
    };

    disconnect = () => {
        const { socket } = this.state;
        socket.emit("disconnected");
        this.setState({ user: null });
    };

    render() {
        return (
            <div>
                <Navigation
                    name={
                        this.isTruthy(this.state.name)
                            ? this.state.name
                            : "Stranger"
                    }
                ></Navigation>
                {this.isTruthy(this.state.socket) ? (
                    <GameComponent
                        user={this.state.user}
                        messages={this.state.messages}
                        onTurn={this.turnEvent}
                    ></GameComponent>
                ) : (
                    <HomeComponent onStart={this.handleStart}></HomeComponent>
                )}
            </div>
        );
    }
}

export default MainComponent;
