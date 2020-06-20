import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import "./home.css";

class HomeComponent extends Component {
    render() {
        return (
            <div className="center">
                <div className="title">Rock Paper Scissors</div>
                <div className="flexbox-container">
                    <Form className="form" onSubmit={this.handleSubmit}>
                        <Form.Control
                            type="text"
                            placeholder="Enter nickname"
                            className="nickname-field"
                            ref="name_field"
                        />
                        <Form.Text className="text-muted">
                            Enter a nickname to start.
                        </Form.Text>
                    </Form>
                    <Button
                        variant="outline-info"
                        className="button"
                        onClick={() =>
                            this.props.onStart(this.refs.name_field.value)
                        }
                    >
                        Start
                    </Button>
                </div>
            </div>
        );
    }
}

export default HomeComponent;
