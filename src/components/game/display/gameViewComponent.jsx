import React, { Component } from "react";
// import { Row, Col, Button, Container, Jumbotron } from "react-bootstrap";
import "./gameView.css";

class GameViewComponent extends Component {
    render() {
        return (
            <div className="view-message">
                {this.props.messages.map((item, index) => (
                    <div key={index}>{item}</div>
                ))}
            </div>
        );
    }
}

export default GameViewComponent;
