import React from "react";
import { Row, Col, Button, Container, Jumbotron } from "react-bootstrap";
import "./gameControl.css";

function GameControls(props) {
    return (
        <div>
            <Jumbotron className="button-bar">
                <Row>
                    <Col>
                        <Button
                            xs={4}
                            className="buttons"
                            onClick={() => props.onPressed("rock")}
                        >
                            Rock
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            xs={4}
                            className="buttons"
                            onClick={() => props.onPressed("paper")}
                        >
                            Paper
                        </Button>
                    </Col>
                    <Col>
                        <Button
                            xs={4}
                            className="buttons"
                            onClick={() => props.onPressed("scissors")}
                        >
                            Scissor
                        </Button>
                    </Col>
                </Row>
            </Jumbotron>
        </div>
    );
}

export default GameControls;
